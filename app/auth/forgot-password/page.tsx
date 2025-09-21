'use client';

import AuthCard from '@/components/auth/AuthCard';
import ForgotPasswordForm from '@/components/auth/forgot-password/ForgotPasswordForm';

export default function ForgotPasswordPage() {
  return (
    <AuthCard
      title="Forgot Password"
      description="Enter your email address and we'll send you a link to reset your password"
    >
      <ForgotPasswordForm />
    </AuthCard>
  );
}
