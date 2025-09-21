'use client';

import AuthCard from '@/components/auth/AuthCard';
import SignUpForm from '@/components/auth/sign-up/SignUpForm';

export default function SignUpPage() {
  return (
    <AuthCard
      title="Create Account"
      description="Join our platform and start your personalized journey with us"
    >
      <SignUpForm />
    </AuthCard>
  );
}
