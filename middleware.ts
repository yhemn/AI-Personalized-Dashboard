import { createServerClient } from '@/lib/supabase/server';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith('/auth') || pathname.startsWith('/dashboard')) {
    const supabase = await createServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user && pathname.startsWith('/auth')) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    if (!user && pathname.startsWith('/dashboard')) {
      return NextResponse.redirect(
        new URL(`/auth/sign-in?r=${pathname}`, request.url)
      );
    }
  }

  return NextResponse.next();
}
