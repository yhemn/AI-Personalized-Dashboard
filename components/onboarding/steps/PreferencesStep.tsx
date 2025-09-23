'use client';

import { SelectInput } from '@/components/form/select-input';
import { CheckCircle, Clock, Globe } from 'lucide-react';

export default function PreferencesStep() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-success-100 to-success-200 dark:from-success-900 dark:to-success-800 rounded-2xl flex items-center justify-center">
          <Clock className="w-8 h-8 text-success-600 dark:text-success-400" />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-foreground">Almost There!</h2>
          <p className="text-lg text-foreground-600 max-w-lg mx-auto leading-relaxed">
            Set your timezone to ensure all times, schedules, and notifications
            are perfectly synchronized with your location.
          </p>
        </div>
      </div>

      {/* Timezone Selection */}
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-content2/30 to-content3/30 rounded-2xl p-6 border border-content3">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-5 h-5 text-success-500" />
            <h3 className="font-semibold text-foreground">
              Select Your Timezone
            </h3>
          </div>

          <SelectInput
            name="timezone"
            label="Timezone"
            options={[
              { label: 'Pacific/Auckland (GMT+13)', value: 'Pacific/Auckland' },
              { label: 'Asia/Tokyo (GMT+9)', value: 'Asia/Tokyo' },
              { label: 'Asia/Shanghai (GMT+8)', value: 'Asia/Shanghai' },
              { label: 'Asia/Dubai (GMT+4)', value: 'Asia/Dubai' },
              { label: 'Europe/London (GMT+0)', value: 'Europe/London' },
              { label: 'Europe/Paris (GMT+1)', value: 'Europe/Paris' },
              { label: 'Europe/Moscow (GMT+3)', value: 'Europe/Moscow' },
              { label: 'America/New_York (GMT-5)', value: 'America/New_York' },
              { label: 'America/Chicago (GMT-6)', value: 'America/Chicago' },
              { label: 'America/Denver (GMT-7)', value: 'America/Denver' },
              {
                label: 'America/Los_Angeles (GMT-8)',
                value: 'America/Los_Angeles',
              },
              { label: 'Pacific/Honolulu (GMT-10)', value: 'Pacific/Honolulu' },
              { label: 'UTC', value: 'UTC' },
            ]}
            variant="bordered"
            radius="lg"
            size="lg"
            isRequired
            startContent={<Clock className="w-5 h-5 text-foreground-400" />}
            classNames={{
              trigger:
                'border-2 hover:border-primary-300 focus-within:border-primary-500 transition-colors',
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-content2/50 rounded-xl p-4 border border-content3 text-center">
            <CheckCircle className="w-8 h-8 text-success-500 mx-auto mb-2" />
            <h4 className="font-semibold text-foreground text-sm mb-1">
              Accurate Scheduling
            </h4>
            <p className="text-xs text-foreground-600">
              All times will display in your local timezone
            </p>
          </div>
          <div className="bg-content2/50 rounded-xl p-4 border border-content3 text-center">
            <CheckCircle className="w-8 h-8 text-success-500 mx-auto mb-2" />
            <h4 className="font-semibold text-foreground text-sm mb-1">
              Smart Notifications
            </h4>
            <p className="text-xs text-foreground-600">
              Receive alerts at the right time for you
            </p>
          </div>
          <div className="bg-content2/50 rounded-xl p-4 border border-content3 text-center">
            <CheckCircle className="w-8 h-8 text-success-500 mx-auto mb-2" />
            <h4 className="font-semibold text-foreground text-sm mb-1">
              Global Sync
            </h4>
            <p className="text-xs text-foreground-600">
              Stay coordinated with team members worldwide
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-success-50 to-success-100 dark:from-success-900/20 dark:to-success-800/20 rounded-xl p-4 border border-success-200 dark:border-success-800">
          <p className="text-sm text-success-700 dark:text-success-300 flex items-start gap-2">
            <span className="text-success-500 mt-0.5">🎉</span>
            <span>
              <strong>You&apos;re all set!</strong> Once you complete this step,
              your personalized dashboard will be ready with all your
              preferences and interests.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
