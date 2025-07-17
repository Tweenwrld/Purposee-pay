export interface Dispute {
  id: string;
  transactionId: string;
  reason: string;
  status: "open" | "resolved" | "rejected";
  createdAt: string;
  updatedAt: string;
} 