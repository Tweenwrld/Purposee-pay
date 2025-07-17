import { useState } from "react";
import { Wallet } from "@/types/wallet";
// import { getWallets, addWallet } from "@/integrations/api/wallet";

export function useWallets() {
  // TODO: Integrate with Supabase or backend
  const [wallets, setWallets] = useState<Wallet[]>([]);
  return { wallets, setWallets };
} 