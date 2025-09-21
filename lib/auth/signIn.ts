import { SupabaseClientType } from '@/types';

export async function signIn(
  supabase: SupabaseClientType,
  email: string,
  password: string
) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}
