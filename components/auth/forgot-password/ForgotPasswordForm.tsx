import * as validation from '@/components/auth/forgot-password/validation';
import { Form } from '@/components/form';
import SubmitButton from '@/components/form/submit-button';
import { TextInput } from '@/components/form/text-input';
import { createClient } from '@/lib/supabase/client';
import { Link } from '@heroui/react';
import { useState } from 'react';

export default function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();

  const handleForgotPassword = async (values: validation.FormDataType) => {
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(
        values.email,
        {
          redirectTo: `${window.location.origin}/auth/reset-password`,
        }
      );

      if (error) {
        setError(error.message);
        return;
      }

      setIsSuccess(true);
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
          Check Your Email
        </h2>
        <p className="text-sm text-foreground/70">
          We&apos;ve sent a password reset link to your email address. Please
          check your inbox and follow the instructions to reset your password.
        </p>
        <Link href="/auth/sign-in" className="text-primary font-medium">
          Back to Sign In
        </Link>
      </div>
    );
  }

  return (
    <Form
      {...validation}
      onSubmit={handleForgotPassword}
      className="w-full space-y-4"
    >
      <TextInput
        name="email"
        label="Email Address"
        type="email"
        isRequired
        placeholder="Enter your email address"
      />

      {error && (
        <div className="p-3 rounded-lg bg-danger-50 dark:bg-danger-950 border border-danger-200 dark:border-danger-800">
          <p className="text-sm text-danger-600 dark:text-danger-400">
            {error}
          </p>
        </div>
      )}

      <SubmitButton fullWidth isLoading={isLoading}>
        {isLoading ? 'Sending Reset Link...' : 'Send Reset Link'}
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
