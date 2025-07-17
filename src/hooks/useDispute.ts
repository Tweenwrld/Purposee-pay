import { useState } from "react";
import { Dispute } from "@/types/dispute";
// import { getDisputes, createDispute } from "@/integrations/api/dispute";

export function useDispute() {
  // TODO: Integrate with Supabase or backend
  const [disputes, setDisputes] = useState<Dispute[]>([]);
  return { disputes, setDisputes };
} 

