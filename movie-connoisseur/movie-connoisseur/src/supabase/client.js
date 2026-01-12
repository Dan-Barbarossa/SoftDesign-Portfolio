import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rxiptifimtngfnhfodzo.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4aXB0aWZpbXRuZ2ZuaGZvZHpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxOTQ4NzEsImV4cCI6MjA4Mzc3MDg3MX0.NYP500rEdhLLhCWS3qC78ppAipgOB-E2zLxiV90cdIg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);