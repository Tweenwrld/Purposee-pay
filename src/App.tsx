
import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SuiClientProvider, WalletProvider } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui.js/client';
import { Outlet } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import OfflineBanner from '@/components/OfflineBanner';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';
import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const LANGUAGE_KEY = "pp_language_pref";

const App: React.FC = () => {
  const online = useOnlineStatus();

  // Example of staring/retrieving language preference in localstorage for offline access
  useEffect(() => {
    const lang = localStorage.getItem(LANGUAGE_KEY) || 'en';
    // Just demo, you'd normallly set this somewhere central (redux/react context)
    document.documentElement.lang = lang;
  }, []);

  // Example of saving language preference when user changes language:
  // LocalStorage.setItem(LANGUAGE_KEY, 'sw');

  return (
    <QueryClientProvider client={queryClient}>
      {!online && <OfflineBanner />}
      <SuiClientProvider networks={{ testnet: {url: getFullnodeUrl('testnet') }} } defaultNetwork='testnet'>
        <WalletProvider>
          <Outlet />
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  )
}