import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from './supabase';

export type UserProfile = Database['public']['Tables']['profiles']['Row'];

export interface OnboardingFormData {
  full_name: string;
  role: 'student' | 'teacher' | 'shopper' | 'admin';
  interests: string[];
  timezone: string;
  avatar_url?: string;
}

export type SupabaseClientType = SupabaseClient<Database>;
