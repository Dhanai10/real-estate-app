import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zqjuclcloihtgdphyzso.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxanVjbGNsb2lodGdkcGh5enNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3ODExNDMsImV4cCI6MjA4MTM1NzE0M30.mePEMJdHltBi8jhNstUd6SRsBz6UcwTIx2qSK3aviiY";

export const supabase = createClient(supabaseUrl, supabaseKey);