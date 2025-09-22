import * as validation from '@/components/auth/reset-password/validation';
import { Form } from '@/components/form';
import { PasswordInput } from '@/components/form/password-input';
import SubmitButton from '@/components/form/submit-button';
import { createClient } from '@/lib/supabase/client';
import { Link } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ResetPasswordForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();

  const handleResetPassword = async (values: validation.FormDataType) => {
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.updateUser({
        password: values.password,
      });

      if (error) {
        setError(error.message);
        return;
      }

      setIsSuccess(true);
      // Redirect to sign in after a short delay
      setTimeout(() => {
        router.push('/auth/sign-in');
      }, 2000);
    } catch {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-success-100 dark:bg-success-900 rounded-full mx-auto flex items-center justify-center">
          <svg
            className="w-8 h-8 text-success-600 dark:text-success-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-foreground">
          Password Reset Successful
        </h2>
        <p className="text-sm text-foreground/70">
          Your password has been successfully updated. You will be redirected to
          the sign-in page shortly.
        </p>
        <Link href="/auth/sign-in" className="text-primary font-medium">
          Go to Sign In
        </Link>
      </div>
    );
  }

  return (
    <Form
      {...validation}
      onSubmit={handleResetPassword}
      className="w-full space-y-4"
    >
      <PasswordInput
        name="password"
        label="New Password"
        isRequired
        placeholder="Enter your new password"
      />

      <PasswordInput
        name="confirmPassword"
        label="Confirm New Password"
        isRequired
        placeholder="Confirm your new password"
      />

      {error && (
        <div className="p-3 rounded-lg bg-danger-50 dark:bg-danger-950 border border-danger-200 dark:border-danger-800">
          <p className="text-sm text-danger-600 dark:text-danger-400">
            {error}
          </p>
        </div>
      )}

      <SubmitButton fullWidth isLoading={isLoading}>
        {isLoading ? 'Updating Password...' : 'Update Password'}
      </SubmitButton>

      <p className="text-small text-center text-foreground/60">
        Remember your password?{' '}
        <Link href="/auth/sign-in" className="text-primary font-medium">
          Sign in
        </Link>
      </p>
    </Form>
  );
}
