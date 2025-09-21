import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from './supabase';

export interface UserProfile {
  id: string;
  full_name?: string;
  avatar_url?: string;
  role?: 'student' | 'teacher' | 'shopper' | 'admin';
  interests?: string[];
  timezone?: string;
  created_at?: string;
}

export interface OnboardingFormData {
  full_name: string;
  role: 'student' | 'teacher' | 'shopper' | 'admin';
  interests: string[];
  timezone: string;
  avatar_url?: string;
}

export type SupabaseClientType = SupabaseClient<Database>;
