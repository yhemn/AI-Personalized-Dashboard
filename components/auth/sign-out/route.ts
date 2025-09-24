import { createServerClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const supabase = await createServerClient();
  await supabase.auth.signOut();
  return NextResponse.redirect(new URL('/auth/sign-in', request.url));
}

export function POST(request: NextRequest) {
  return GET(request);
}
