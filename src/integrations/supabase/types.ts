// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://rnoqewpanczxhrpttcgt.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJub3Fld3BhbmN6eGhycHR0Y2d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxNjE3NzQsImV4cCI6MjA2NTczNzc3NH0.sA9jY8Sf_GEtQVjZJT-WGYlWq-ADLUzMF91DSF3lf5U";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);