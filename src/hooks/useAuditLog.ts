
import { supabase } from '@/integrations/supabase/client';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useAuth } from './useAuth';

export interface AuditLogEntry {
  id: string;
  action: string;
  resource_type: string;
  resource_id?: string;
  ip_address?: string;
  user_agent?: string;
  metadata?: any;
  created_at: string;
}

export const useAuditLog = () => {
  const { user } = useAuth();

  const { data: auditLogs, isLoading } = useQuery({
    queryKey: ['auditLogs', user?.id],
    queryFn: async () => {
      if (!user?.id) return [];
      
      const { data, error } = await supabase
        .from('audit_logs')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(50);

      if (error) throw error;
      return data as AuditLogEntry[];
    },
    enabled: !!user?.id,
  });

  const logEvent = useMutation({
    mutationFn: async (eventData: {
      action: string;
      resource_type: string;
      resource_id?: string;
      metadata?: any;
    }) => {
      if (!user?.id) throw new Error('User not authenticated');

      const { data, error } = await supabase.rpc('log_audit_event', {
        p_user_id: user.id,
        p_action: eventData.action,
        p_resource_type: eventData.resource_type,
        p_resource_id: eventData.resource_id || null,
        p_metadata: eventData.metadata || {}
      });

      if (error) throw error;
      return data;
    },
  });

  return {
    auditLogs: auditLogs || [],
    isLoading,
    logEvent: logEvent.mutate,
  };
};
