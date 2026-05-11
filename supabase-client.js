import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

export const supabase = createClient(
  'https://qiasqmssajpsukutnlna.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpYXNxbXNzYWpwc3VrdXRubG5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3MzE2NDcsImV4cCI6MjA5MjMwNzY0N30.urc-IHmSW7-a4Tplult9it1U_exWeRzDdku-HuYcY_4'
)
