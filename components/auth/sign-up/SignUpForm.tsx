import * as validation from '@/components/auth/sign-up/validation';
import { Form } from '@/components/form';
import { PasswordInput } from '@/components/form/password-input';
import SubmitButton from '@/components/form/submit-button';
import { TextInput } from '@/components/form/text-input';
import { signUp } from '@/lib/auth/signUp';
import { createClient } from '@/lib/supabase/client';
import { addToast, Link } from '@heroui/react';
import { useRouter } from 'next/navigation';

export default function SignUpForm() {
  const router = useRouter();
  const supabase = createClient();

  const handleSignUp = async (values: validation.FormDataType) => {
    try {
      await signUp(supabase, values.email, values.password);
      router.push('/auth/sign-in');
      addToast({
        title: 'Your account has been created!',
        description:
          'A verification email has been sent to your inbox. Please check your email and follow the instructions to verify your account before signing in.',
        color: 'success',
      });
    } catch (error: any) {
      addToast({
        title: error.message,
        color: 'danger',
      });
    }
  };

  return (
    <Form {...validation} onSubmit={handleSignUp} className="w-full space-y-4">
      <TextInput
        name="email"
        label="Email Address"
        type="email"
        isRequired
        placeholder="Enter your email address"
      />

      <PasswordInput
        name="password"
        label="Password"
        isRequired
        placeholder="Create a secure password"
      />

      <PasswordInput
        name="confirmPassword"
        label="Confirm Password"
        isRequired
        placeholder="Confirm your password"
      />

      <SubmitButton fullWidth>Create Account</SubmitButton>

      <p className="text-small text-center text-foreground/60">
        Already have an account?{' '}
        <Link href="/auth/sign-in" className="text-primary font-medium">
          Sign in
        </Link>
      </p>
    </Form>
  );
}
