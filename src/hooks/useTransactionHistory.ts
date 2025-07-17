import { useState } from "react";
import { Transaction } from "@/types/transaction";
// import { getTransactions } from "@/integrations/api/transaction";

export function useTransactionHistory() {
  // TODO: Integrate with Supabase or backend
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  return { transactions, setTransactions };
} 