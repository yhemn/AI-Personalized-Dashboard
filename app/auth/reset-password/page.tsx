'use client';

import AuthCard from '@/components/auth/AuthCard';
import ResetPasswordForm from '@/components/auth/reset-password/ResetPasswordForm';

export default function ResetPasswordPage() {
  return (
    <AuthCard
      title="Reset Password"
      description="Enter your new password below to complete the reset process"
    >
      <ResetPasswordForm />
    </AuthCard>
  );
}
