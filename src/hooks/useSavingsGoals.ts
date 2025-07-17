import { useState } from "react";
import { SavingsGoal } from "@/types/savingsGoal";
// import { getSavingsGoals, addSavingsGoal } from "@/integrations/api/savingsGoal";

export function useSavingsGoals() {
  // TODO: Integrate with Supabase or backend
  const [goals, setGoals] = useState<SavingsGoal[]>([]);
  return { goals, setGoals };
} 