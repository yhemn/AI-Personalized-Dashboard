import { SupabaseClientType, UserProfile } from '@/types';

export default async function updateProfile(
  supabase: SupabaseClientType,
  values: Partial<UserProfile>,
  userId: string
) {
  const { error, data } = await supabase
    .from('profiles')
    .update(values)
    .eq('id', userId)
    .select('*')
    .single();
  if (error) throw new Error(error.message);
  return data;
}
