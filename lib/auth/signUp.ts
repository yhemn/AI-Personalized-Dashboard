import { SupabaseClientType } from '@/types';

export async function signUp(
  supabase: SupabaseClientType,
  email: string,
  password: string
) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${window.location.origin}/auth/onboarding`,
    },
  });

  if (error) throw new Error(error.message);

  return data;
}
