import { createServerClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Handles user sign-out by cleaning up authentication state and redirecting
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const redirectUrl =
      searchParams.get('redirect') || searchParams.get('r') || '/auth/sign-in';

    const supabase = await createServerClient();
    const cookieStore = await cookies();

    // Clean up Supabase cookies
    const allCookies = cookieStore.getAll();
    for (const cookie of allCookies) {
      if (cookie.name.startsWith('sb-')) {
        cookieStore.delete(cookie.name);
      }
    }

    // Sign out from Supabase
    await supabase.auth.signOut();

    // Redirect to sign-in page
    return NextResponse.redirect(new URL(redirectUrl, request.url), {
      status: 303,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error) {
    console.error('Sign-out error:', error);
    return NextResponse.redirect(new URL('/auth/sign-in', request.url));
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  return GET(request);
}
