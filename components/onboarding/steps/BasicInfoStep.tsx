'use client';

import { TextInput } from '@/components/form/text-input';
import { User, UserCheck } from 'lucide-react';

export default function BasicInfoStep() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-2xl flex items-center justify-center">
          <User className="w-8 h-8 text-primary-600 dark:text-primary-400" />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-foreground">
            Welcome to Your Dashboard
          </h2>
          <p className="text-lg text-foreground-600 max-w-md mx-auto leading-relaxed">
            Let&apos;s start by setting up your personal profile to create a
            tailored experience just for you.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="space-y-6">
        <div className="relative">
          <TextInput
            name="full_name"
            label="Full Name"
            placeholder="Enter your full name"
            variant="bordered"
            radius="lg"
            size="lg"
            isRequired
            startContent={<UserCheck className="w-5 h-5 text-foreground-400" />}
            classNames={{
              input: 'text-base',
              inputWrapper:
                'border-2 hover:border-primary-300 focus-within:border-primary-500 transition-colors',
            }}
          />
        </div>

        <div className="bg-content2/50 rounded-xl p-4 border border-content3">
          <p className="text-sm text-foreground-600 flex items-start gap-2">
            <span className="text-primary-500 mt-0.5">💡</span>
            <span>
              Your name will be used to personalize your dashboard and help us
              provide a more engaging experience.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
