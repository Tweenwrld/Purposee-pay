
export interface ClaimRemittanceData {
  groupWalletId: string;
  amount: number;
}

export interface GroupWalletData {
  id: string;
  balance: number;
  status: 'validated' | 'pending' | 'invalid';
  beneficiaryAddress: string;
  validatedAt?: string;
}

export interface PayoutDetails {
  beneficiaryName: string;
  amount: number;
  amountKES: number;
  transactionId: string;
  mpesaNumber: string;
  exchangeRate: number;
}

export interface ClaimRemittanceProps {
  language: 'en' | 'sw';
  translations: any;
}
