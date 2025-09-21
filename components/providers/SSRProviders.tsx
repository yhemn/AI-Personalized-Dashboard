import { AuthProvider } from '@/contexts/AuthContext';
import { getInitialAuthState } from '@/lib/auth/getInitialAuthState';
import { ReactNode } from 'react';

export default async function SSRProviders({
  children,
}: {
  children: ReactNode;
}) {
  const { user, profile } = await getInitialAuthState();

  return (
    <AuthProvider initialUser={user} initialProfile={profile}>
      {children}
    </AuthProvider>
  );
}
