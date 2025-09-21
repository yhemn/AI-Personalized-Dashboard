'use client';

import AuthCard from '@/components/auth/AuthCard';
import SignInForm from '@/components/auth/sign-in/SignInForm';

export default function SignInPage() {
  return (
    <AuthCard
      title="Welcome Back"
      description="Sign in to access your personalized dashboard and continue your journey"
    >
      <SignInForm />
    </AuthCard>
  );
}
