export interface Wallet {
  id: string;
  userId: string;
  address: string;
  balance: number;
  currency: string;
  isPrimary: boolean;
  status: string;
  createdAt: string;
} 