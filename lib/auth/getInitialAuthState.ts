import { createServerClient } from '@/lib/supabase/server';

export async function getInitialAuthState() {
  try {
    const supabase = await createServerClient();
    const { data } = await supabase.auth.getUser();

    if (!data.user) {
      return { user: null, profile: null };
    }

    const { data: profile, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', data.user.id)
      .single();

    if (error) {
      return { user: data.user, profile: null };
    }

    return {
      user: data.user,
      profile,
    };
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error in getInitialAuthState:', error);
    }
    return { user: null, profile: null };
  }
}
