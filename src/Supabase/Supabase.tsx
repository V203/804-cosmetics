import { createClient } from '@supabase/supabase-js';

const supabase = createClient("https://blpfzwujlcchsohtmjng.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJscGZ6d3VqbGNjaHNvaHRtam5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0MTQyODIsImV4cCI6MTk5Mjk5MDI4Mn0.aL1Txj0fScJ4ohqtujppyHiwNX9PdPGHu9DfShDGkAI");

export default supabase;