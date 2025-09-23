'use client';

import FormFooter from '@/components/dashboard/shared/FormFooter';
import { Form } from '@/components/form';
import { AutocompleteInput } from '@/components/form/autocomplete-input';
import { InterestChips } from '@/components/form/interest-chips';
import { SelectInput } from '@/components/form/select-input';
import { TextInput } from '@/components/form/text-input';
import { useAuth } from '@/hooks/useAuth';
import useSupabase from '@/hooks/useSupabase';
import updateProfile from '@/lib/auth/updateProfile';
import {
  AVAILABLE_TIMEZONES,
  INTERESTS_OPTIONS,
  USER_ROLE_OPTIONS,
} from '@/lib/constants';
import { addToast, Card, CardBody, CardHeader, Input } from '@heroui/react';
import { useMemo } from 'react';
import * as Yup from 'yup';

export default function ProfilePage() {
  const { profile, userAuth, setProfile } = useAuth();
  const supabase = useSupabase();
  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        full_name: Yup.string()
          .required()
          .default(profile?.full_name || ''),
        role: Yup.string()
          .required()
          .default(profile?.role || ''),
        timezone: Yup.string()
          .required()
          .default(profile?.timezone || ''),
        interests: Yup.array()
          .of(Yup.string().required())
          .max(8, 'You can select up to 8 interests')
          .default(profile?.interests || []),
      }),
    [profile]
  );

  const handleSubmit = async (
    values: Yup.InferType<typeof validationSchema>
  ) => {
    if (userAuth && profile) {
      try {
        setProfile(await updateProfile(supabase, values, profile.id));
        addToast({
          title: 'Profile updated successfully!',
          color: 'success',
        });
      } catch (error: any) {
        addToast({
          description: error.message || 'Failed to update profile',
          color: 'danger',
        });
      }
    }
  };

  if (!profile || !userAuth) return null;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <Card>
        <CardHeader>Basic Information</CardHeader>
        <CardBody className="space-y-6">
          <Form
            validationSchema={validationSchema}
            initialValues={validationSchema.getDefault()}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextInput
                label="Full Name"
                placeholder="Enter your full name"
                name="full_name"
                size="md"
                variant="bordered"
                isRequired
              />

              <Input
                label="Email"
                name="email"
                defaultValue={userAuth.email}
                size="md"
                variant="bordered"
                isDisabled
              />

              <SelectInput
                label="Role"
                name="role"
                size="md"
                variant="bordered"
                options={USER_ROLE_OPTIONS}
                isRequired
              />

              <AutocompleteInput
                label="Timezone"
                name="timezone"
                size="md"
                variant="bordered"
                options={AVAILABLE_TIMEZONES}
                isVirtualized
                isRequired
              />
            </div>
            <FormFooter />
          </Form>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>Your Interests</CardHeader>
        <CardBody>
          <Form
            validationSchema={validationSchema}
            initialValues={validationSchema.getDefault()}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <InterestChips
              name="interests"
              options={INTERESTS_OPTIONS}
              maxSelections={8}
              size="md"
            />
            <FormFooter />
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}
