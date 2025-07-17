import { useState } from "react";
import { RecurringPayment } from "@/types/recurringPayment";
// import { getRecurringPayments, addRecurringPayment } from "@/integrations/api/recurringPayment";

export function useRecurringPayments() {
  // TODO: Integrate with Supabase or backend
  const [payments, setPayments] = useState<RecurringPayment[]>([]);
  return { payments, setPayments };
} 