import * as validation from '@/components/auth/sign-in/validation';
import { Form } from '@/components/form';
import { PasswordInput } from '@/components/form/password-input';
import SubmitButton from '@/components/form/submit-button';
import { TextInput } from '@/components/form/text-input';
import useSupabase from '@/hooks/useSupabase';
import { signIn } from '@/lib/auth/signIn';
import { Link } from '@heroui/react';
import { addToast } from '@heroui/toast';
import { useRouter } from 'next/navigation';

export default function SignInForm() {
  const supabase = useSupabase();
  const router = useRouter();
  const handleSubmit = async (values: validation.FormDataType) => {
    try {
      await signIn(supabase, values.email, values.password);
      router.push('/auth/onboarding');
    } catch (error: any) {
      addToast({
        title: error.message,
        color: 'danger',
      });
    }
  };

  return (
    <Form {...validation} onSubmit={handleSubmit} className="w-full space-y-4">
      <TextInput name="email" label="Email Address" type="email" isRequired />
      <PasswordInput name="password" label="Password" isRequired />
      <SubmitButton fullWidth>Sign In</SubmitButton>

      <div className="text-center">
        <Link
          href="/auth/forgot-password"
          className="text-sm text-primary font-medium"
        >
          Forgot your password?
        </Link>
      </div>

      <p className="text-small text-center text-foreground/60">
        New to our platform?{' '}
        <Link href="/auth/sign-up" className="text-primary font-medium">
          Create an account
        </Link>
      </p>
    </Form>
  );
}
