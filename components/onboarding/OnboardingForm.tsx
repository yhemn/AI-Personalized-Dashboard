'use client';

import SubmitButton from '@/components/form/submit-button';
import { useForm } from '@/contexts/FormContext';
import { Button, Progress } from '@heroui/react';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import {
  BasicInfoStep,
  InterestsStep,
  PreferencesStep,
  RoleSelectionStep,
} from './steps';

const steps = [
  { id: 'basic', title: 'Personal Information', icon: CheckCircle },
  { id: 'role', title: 'Role Selection', icon: CheckCircle },
  { id: 'interests', title: 'Interests & Preferences', icon: CheckCircle },
  { id: 'preferences', title: 'Final Setup', icon: CheckCircle },
];
export default function OnboardingForm() {
  useForm();
  const [currentStep, setCurrentStep] = useState(0);

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

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <BasicInfoStep />;
      case 1:
        return <RoleSelectionStep />;
      case 2:
        return <InterestsStep />;
      case 3:
        return <PreferencesStep />;
      default:
        return null;
    }
  };

  const progressValue = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="space-y-8">
      {/* Progress Indicator */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-foreground-600">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="text-sm text-foreground-500">
            {Math.round(progressValue)}% Complete
          </span>
        </div>
        <Progress
          value={progressValue}
          className="w-full"
          color="primary"
          size="sm"
        />
        <div className="flex justify-between">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-center gap-2 text-xs ${
                index <= currentStep
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-foreground-400'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  index <= currentStep
                    ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                    : 'bg-content3 text-foreground-400'
                }`}
              >
                {index < currentStep ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <span className="text-xs font-semibold">{index + 1}</span>
                )}
              </div>
              <span className="hidden sm:block font-medium">{step.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="min-h-[400px]">{renderStepContent()}</div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-content3">
        <Button
          variant="bordered"
          onPress={prevStep}
          isDisabled={currentStep === 0}
          startContent={<ArrowLeft className="w-4 h-4" />}
          className="min-w-[120px]"
        >
          Previous
        </Button>

        <div className="flex gap-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentStep
                  ? 'bg-primary-500'
                  : index < currentStep
                    ? 'bg-primary-300'
                    : 'bg-content3'
              }`}
            />
          ))}
        </div>

        {currentStep < steps.length - 1 ? (
          <Button
            color="primary"
            onPress={nextStep}
            endContent={<ArrowRight className="w-4 h-4" />}
            className="min-w-[120px]"
          >
            Next
          </Button>
        ) : (
          <SubmitButton
            color="primary"
            endContent={<ArrowRight className="w-4 h-4" />}
            className="min-w-[140px]"
          >
            Complete Setup
          </SubmitButton>
        )}
      </div>
    </div>
  );
}
