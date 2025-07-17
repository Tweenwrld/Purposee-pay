export interface RecurringPayment {
  id: string;
  userId: string;
  amount: number;
  currency: string;
  frequency: "daily" | "weekly" | "monthly";
  nextPaymentDate: string;
  status: "active" | "paused" | "cancelled";
} 