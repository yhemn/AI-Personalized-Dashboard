'use client';

import AuthCard from '@/components/auth/AuthCard';
import { Form } from '@/components/form';
import OnboardingForm from '@/components/onboarding/OnboardingForm';
import useSupabase from '@/hooks/useSupabase';
import { OnboardingFormData } from '@/types';
import { addToast } from '@heroui/toast';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import * as validation from './validation';

export default function OnboardingPage() {
  const supabase = useSupabase();
  const router = useRouter();
  const [, setIsLoading] = useState(false);

  // Check if user is authenticated
  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        router.push('/auth/sign-in');
      }
    };
    checkAuth();
  }, [supabase.auth, router]);

  const handleSubmit = async (values: OnboardingFormData) => {
    setIsLoading(true);
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        throw new Error('User not authenticated');
      }

      // Update the user's profile
      const { error } = await supabase
        .from('profiles')
        .update({
          full_name: values.full_name,
          role: values.role,
          interests: values.interests,
          timezone: values.timezone,
        })
        .eq('id', user.id);

      if (error) {
        throw error;
      }

      addToast({
        title: 'Profile updated successfully!',
        color: 'success',
      });

      // Redirect to dashboard
      router.push('/dashboard');
    } catch (error: any) {
      addToast({
        title: error.message || 'Failed to update profile',
        color: 'danger',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthCard
      title="Complete Your Profile"
      description="Let's set up your personalized dashboard experience"
    >
      <Form
        initialValues={validation.initialValues}
        validationSchema={validation.validationSchema}
        onSubmit={handleSubmit}
        className="w-full space-y-6"
      >
        <OnboardingForm />
      </Form>
    </AuthCard>
  );
}
