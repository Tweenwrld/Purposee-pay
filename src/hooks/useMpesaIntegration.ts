
import { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { toast } from 'sonner';

export interface MpesaTransaction {
  id: string;
  transaction_id: string;
  amount: number;
  phone_number: string;
  status: string;
  created_at: string;
  response_description?: string;
}

export const useMpesaIntegration = (language: 'en' | 'sw') => {
  const { user } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);

  const { data: transactions, isLoading } = useQuery({
    queryKey: ['mpesaTransactions', user?.id],
    queryFn: async () => {
      if (!user?.id) return [];
      
      const { data, error } = await supabase
        .from('mpesa_transactions')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as MpesaTransaction[];
    },
    enabled: !!user?.id,
  });

  const initiateStkPush = useMutation({
    mutationFn: async (transactionData: {
      amount: number;
      phone_number: string;
      account_reference?: string;
      transaction_desc?: string;
    }) => {
      if (!user?.id) throw new Error('User not authenticated');

      setIsProcessing(true);
      
      // Generate a unique transaction ID
      const transactionId = `TXN_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      // Store transaction in database
      const { data, error } = await supabase
        .from('mpesa_transactions')
        .insert({
          user_id: user.id,
          transaction_id: transactionId,
          amount: transactionData.amount,
          phone_number: transactionData.phone_number,
          account_reference: transactionData.account_reference || '',
          transaction_desc: transactionData.transaction_desc || 'Purpose Pay Transaction',
          status: 'initiated'
        })
        .select()
        .single();

      if (error) throw error;
      
      // In a real implementation, this would call M-Pesa STK Push API
      // For now, we'll simulate the process
      setTimeout(() => {
        setIsProcessing(false);
        toast.success(
          language === 'en' 
            ? 'STK Push sent! Check your phone.' 
            : 'STK Push imetumwa! Angalia simu yako.'
        );
      }, 2000);

      return data;
    },
    onError: () => {
      setIsProcessing(false);
      toast.error(
        language === 'en' 
          ? 'Failed to initiate M-Pesa payment' 
          : 'Imeshindwa kuanzisha malipo ya M-Pesa'
      );
    },
  });

  const checkTransactionStatus = useMutation({
    mutationFn: async (transactionId: string) => {
      const { data, error } = await supabase
        .from('mpesa_transactions')
        .select('*')
        .eq('transaction_id', transactionId)
        .single();

      if (error) throw error;
      return data;
    },
  });

  return {
    transactions: transactions || [],
    isLoading,
    isProcessing,
    initiateStkPush: initiateStkPush.mutate,
    checkTransactionStatus: checkTransactionStatus.mutate,
  };
};
