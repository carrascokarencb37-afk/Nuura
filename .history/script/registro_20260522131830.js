<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>

const supabaseUrl = 'https://trfupybydxgmcozqwpak.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRyZnVweWJ5ZHhnbWNvenF3cGFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg4MTgzNDcsImV4cCI6MjA5NDM5NDM0N30.SNexC4W6M6Tz78g-0IE_STfhhweA37ykcqruSaT2n_M';

const client = supabase.createClient(supabaseUrl, supabaseKey);
