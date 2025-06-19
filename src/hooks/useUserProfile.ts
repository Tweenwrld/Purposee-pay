
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { useMutation, useQuery } from '@tanstack/react-query';
import { UserProfile } from '@/types/profile';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

export const useUserProfile = (language: 'en' | 'sw') => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [copied, setCopied] = useState(false);

  // Fetch user profile from Supabase
  const { data: profileData, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['profile', user?.id],
    queryFn: async () => {
      if (!user?.id) return null;
      
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching profile:', error);
        throw error;
      }

      return data;
    },
    enabled: !!user?.id,
  });

  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    email: '',
    phone: '',
    address: '',
    mpesaNumber: '',
    handle: '',
    bio: '',
    avatar: '',
    notifications: {
      email: true,
      sms: true,
      push: true,
    },
    privacy: {
      profileVisibility: 'public',
      showTransactionHistory: false,
      allowDirectMessages: true,
    },
    verification: {
      email: true,
      phone: false,
      identity: false,
    },
    language: language,
  });

  // Update profile state when data is loaded
  useEffect(() => {
    if (profileData) {
      setProfile(prev => ({
        ...prev,
        name: profileData.full_name || '',
        email: profileData.email || user?.email || '',
        phone: profileData.phone || '',
        address: profileData.address || '',
        mpesaNumber: profileData.mpesa_number || '',
        handle: profileData.handle || '',
        bio: profileData.bio || '',
        avatar: profileData.avatar_url || '',
        language: (profileData.language === 'en' || profileData.language === 'sw') ? profileData.language : 'en',
      }));
    }
  }, [profileData, user?.email]);

  // Update user profile in Supabase
  const updateProfile = async (data: UserProfile) => {
    if (!user?.id) throw new Error('User not authenticated');

    const { error } = await supabase
      .from('profiles')
      .upsert({
        id: user.id,
        full_name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        mpesa_number: data.mpesaNumber,
        handle: data.handle,
        bio: data.bio,
        avatar_url: data.avatar,
        language: data.language,
        updated_at: new Date().toISOString(),
      });

    if (error) throw error;
    return { success: true };
  };

  const mutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      toast.success(
        language === 'en' 
          ? 'Profile updated successfully!' 
          : 'Wasifu umesasishwa kikamilifu!'
      );
      setIsEditing(false);
    },
    onError: (error) => {
      console.error('Profile update error:', error);
      toast.error(
        language === 'en' 
          ? 'Failed to update profile. Please try again.' 
          : 'Imeshindwa kusasisha wasifu. Tafadhali jaribu tena.'
      );
    },
  });

  const handleSubmit = () => {
    mutation.mutate(profile);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success(language === 'en' ? 'Copied to clipboard!' : 'Imenakiliwa kwenye klipbodi!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error(language === 'en' ? 'Failed to copy' : 'Imeshindwa kunakili');
    }
  };

  const handlePersonalInfoChange = (updates: Partial<UserProfile>) => {
    setProfile(prev => ({ ...prev, ...updates }));
  };

  const handleNotificationChange = (updates: Partial<UserProfile['notifications']>) => {
    setProfile(prev => ({ 
      ...prev, 
      notifications: { ...prev.notifications, ...updates }
    }));
  };

  const handlePrivacyChange = (updates: Partial<UserProfile['privacy']>) => {
    setProfile(prev => ({ 
      ...prev, 
      privacy: { ...prev.privacy, ...updates }
    }));
  };

  return {
    profile,
    isEditing,
    copied,
    isLoading: mutation.isPending || isLoadingProfile,
    setIsEditing,
    handleSubmit,
    handleCancel,
    copyToClipboard,
    handlePersonalInfoChange,
    handleNotificationChange,
    handlePrivacyChange,
  };
};
