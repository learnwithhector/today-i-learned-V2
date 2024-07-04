import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://tvxokwydnqravkffckpw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2eG9rd3lkbnFyYXZrZmZja3B3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc5MDM5NjYsImV4cCI6MjAwMzQ3OTk2Nn0.o_EtYkQJbWRSA4rwU-wqTgHRU6lNu9rHDk-ayKtoBuk";
const supabase = createClient(supabaseUrl, supabaseKey);

// https://tvxokwydnqravkffckpw.supabase.co/rest/v1/facts

export default supabase;
