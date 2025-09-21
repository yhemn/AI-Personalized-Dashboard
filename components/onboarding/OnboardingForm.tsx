'use client';

import { InterestChips } from '@/components/form/interest-chips';
import { SelectInput } from '@/components/form/select-input';
import SubmitButton from '@/components/form/submit-button';
import { TextInput } from '@/components/form/text-input';
import { useForm } from '@/contexts/FormContext';
import { interestOptions, timezoneOptions } from '@/lib/utils/timezone';
import { OnboardingFormData } from '@/types';
import { Avatar, Button } from '@heroui/react';
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Camera,
  Clock,
  Heart,
  User,
} from 'lucide-react';
import { useCallback, useState } from 'react';

const roleOptions = [
  { label: 'Student', value: 'student' },
  { label: 'Teacher', value: 'teacher' },
  { label: 'Shopper', value: 'shopper' },
  { label: 'Admin', value: 'admin' },
];

const steps = [
  { id: 'basic', title: 'Basic Info', icon: User },
  { id: 'role', title: 'Your Role', icon: Briefcase },
  { id: 'interests', title: 'Interests', icon: Heart },
  { id: 'preferences', title: 'Preferences', icon: Clock },
];
export default function OnboardingForm() {
  const formik = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [avatarPreview, setAvatarPreview] = useState<string>('');

  const handleAvatarChange = useCallback((value: string) => {
    setAvatarPreview(value);
  }, []);
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = (values: OnboardingFormData) => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Welcome! Let&apos;s get to know you
              </h2>
              <p className="text-foreground-500">
                Tell us your name and upload a profile picture
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <Avatar
                src={avatarPreview || values.avatar_url}
                className="w-24 h-24"
                name={values.full_name}
                showFallback
              />

              <TextInput
                name="avatar_url"
                label="Avatar URL (Optional)"
                placeholder="https://example.com/your-photo.jpg"
                variant="bordered"
                radius="lg"
                startContent={
                  <Camera className="w-4 h-4 text-foreground-400" />
                }
                onChange={e => handleAvatarChange(e.target.value)}
              />
            </div>

            <TextInput
              name="full_name"
              label="Full Name"
              placeholder="Enter your full name"
              variant="bordered"
              radius="lg"
              size="lg"
              startContent={<User className="w-4 h-4 text-foreground-400" />}
            />
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                What&apos;s your role?
              </h2>
              <p className="text-foreground-500">
                This helps us personalize your experience
              </p>
            </div>

            <SelectInput
              name="role"
              label="Select Your Role"
              options={roleOptions}
              variant="bordered"
              radius="lg"
              size="lg"
              startContent={
                <Briefcase className="w-4 h-4 text-foreground-400" />
              }
            />
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                What are you interested in?
              </h2>
              <p className="text-foreground-500">
                Choose up to 8 topics that interest you most
              </p>
            </div>

            <InterestChips
              name="interests"
              options={interestOptions}
              maxSelections={8}
              placeholder="Select your interests to get personalized content"
            />
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Final touches
              </h2>
              <p className="text-foreground-500">
                Set your timezone for better scheduling
              </p>
            </div>

            <SelectInput
              name="timezone"
              label="Timezone"
              options={timezoneOptions}
              variant="bordered"
              radius="lg"
              size="lg"
              startContent={<Clock className="w-4 h-4 text-foreground-400" />}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {renderStepContent(formik.values as any)}

      {error && (
        <div className="p-3 rounded-lg bg-danger-50 dark:bg-danger-950 border border-danger-200 dark:border-danger-800">
          <p className="text-sm text-danger-600 dark:text-danger-400">
            {error}
          </p>
        </div>
      )}

      <div className="flex justify-between pt-6">
        <Button
          variant="bordered"
          onPress={prevStep}
          isDisabled={currentStep === 0}
          startContent={<ArrowLeft className="w-4 h-4" />}
        >
          Previous
        </Button>

        {currentStep < steps.length - 1 ? (
          <Button
            color="primary"
            onPress={nextStep}
            endContent={<ArrowRight className="w-4 h-4" />}
          >
            Next
          </Button>
        ) : (
          <SubmitButton
            color="primary"
            isLoading={isLoading}
            endContent={!isLoading && <ArrowRight className="w-4 h-4" />}
          >
            {isLoading ? 'Completing Setup...' : 'Complete Setup'}
          </SubmitButton>
        )}
      </div>
    </>
  );
}
