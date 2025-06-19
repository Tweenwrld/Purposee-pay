
import { useState } from 'react';
import { Form } from 'antd';
import { toast } from 'sonner';
import { useCurrentAccount } from '@mysten/dapp-kit';
import { useMutation, useQuery } from '@tanstack/react-query';

interface ClaimRemittanceData {
  groupWalletId: string;
  amount: number;
}

interface GroupWalletData {
  id: string;
  balance: number;
  status: 'validated' | 'pending' | 'invalid';
  beneficiaryAddress: string;
  validatedAt?: string;
}

interface PayoutDetails {
  beneficiaryName: string;
  amount: number;
  amountKES: number;
  transactionId: string;
  mpesaNumber: string;
  exchangeRate: number;
}

export const useClaimRemittance = (language: 'en' | 'sw') => {
  const [form] = Form.useForm();
  const currentAccount = useCurrentAccount();
  const [selectedWalletId, setSelectedWalletId] = useState<string>('');
  const [payoutDetails, setPayoutDetails] = useState<PayoutDetails | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const connected = !!currentAccount;

  // Mock function to get group wallet data
  const getGroupWallet = async (walletId: string): Promise<GroupWalletData> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock data - replace with actual API call
    return {
      id: walletId,
      balance: 250.75,
      status: Math.random() > 0.5 ? 'validated' : 'pending',
      beneficiaryAddress: currentAccount?.address || '0x1234567890abcdef',
      validatedAt: new Date().toISOString(),
    };
  };

  // Query to fetch wallet data when wallet ID is provided
  const { data: walletData, isLoading: isLoadingWallet, error: walletError } = useQuery({
    queryKey: ['groupWallet', selectedWalletId],
    queryFn: () => getGroupWallet(selectedWalletId),
    enabled: !!selectedWalletId && selectedWalletId.length >= 10,
    retry: 2,
  });

  // Mock claimRemittance function
  const claimRemittance = async (data: ClaimRemittanceData): Promise<PayoutDetails> => {
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    // Mock M-Pesa payout details
    const exchangeRate = 150.25; // USD to KES
    const amountKES = data.amount * exchangeRate;
    
    return {
      beneficiaryName: 'John Doe Mwangi',
      amount: data.amount,
      amountKES: amountKES,
      transactionId: 'MP' + Math.random().toString(36).substr(2, 10).toUpperCase(),
      mpesaNumber: '+254712345678',
      exchangeRate: exchangeRate,
    };
  };

  const mutation = useMutation({
    mutationFn: claimRemittance,
    onSuccess: (data) => {
      setPayoutDetails(data);
      toast.success(
        language === 'en' 
          ? 'Remittance claimed successfully! M-Pesa payout initiated.' 
          : 'Pesa imepokewa kikamilifu! Malipo ya M-Pesa yameanzishwa.'
      );
      setIsSubmitting(false);
    },
    onError: (error) => {
      console.error('Claim remittance error:', error);
      toast.error(
        language === 'en' 
          ? 'Failed to claim remittance. Please try again.' 
          : 'Imeshindwa kupokea pesa. Tafadhali jaribu tena.'
      );
      setIsSubmitting(false);
    },
  });

  const handleSubmit = async (values: ClaimRemittanceData) => {
    if (!connected) {
      toast.warning(
        language === 'en' 
          ? 'Please connect your wallet first' 
          : 'Tafadhali unganisha mkoba wako kwanza'
      );
      return;
    }

    if (!walletData) {
      toast.warning(
        language === 'en' 
          ? 'Please enter a valid group wallet ID first' 
          : 'Tafadhali ingiza kitambulisho sahihi cha mkoba wa kikundi kwanza'
      );
      return;
    }

    if (walletData.status !== 'validated') {
      toast.error(
        language === 'en' 
          ? 'This remittance has not been validated yet' 
          : 'Pesa hii bado haijahakikiwa'
      );
      return;
    }

    if (walletData.beneficiaryAddress !== currentAccount?.address) {
      toast.error(
        language === 'en' 
          ? 'You are not the beneficiary of this remittance' 
          : 'Wewe si mpokeaji wa pesa hii'
      );
      return;
    }

    if (values.amount > walletData.balance) {
      toast.error(
        language === 'en' 
          ? 'Amount exceeds available balance' 
          : 'Kiasi kinazidi salio linalopo'
      );
      return;
    }

    setIsSubmitting(true);
    mutation.mutate(values);
  };

  const handleWalletIdChange = (value: string) => {
    setSelectedWalletId(value);
    setPayoutDetails(null); // Reset payout details when wallet ID changes
  };

  const isBeneficiary = walletData && currentAccount && walletData.beneficiaryAddress === currentAccount.address;
  const canClaim = connected && walletData && walletData.status === 'validated' && isBeneficiary;

  return {
    form,
    connected,
    isSubmitting,
    walletData,
    isLoadingWallet,
    walletError,
    payoutDetails,
    isBeneficiary: !!isBeneficiary,
    canClaim: !!canClaim,
    handleSubmit,
    handleWalletIdChange,
  };
};
