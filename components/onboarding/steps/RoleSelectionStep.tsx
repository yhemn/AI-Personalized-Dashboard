'use client';

import { useForm } from '@/contexts/FormContext';
import { Card, CardBody, Radio, RadioGroup } from '@heroui/react';
import {
  Briefcase,
  GraduationCap,
  Shield,
  ShoppingCart,
  Users,
} from 'lucide-react';
import { Controller } from 'react-hook-form';

const roleOptions = [
  {
    label: 'Student',
    value: 'student',
    description: 'Learning and growing in your field',
    icon: GraduationCap,
  },
  {
    label: 'Teacher',
    value: 'teacher',
    description: 'Educating and mentoring others',
    icon: Users,
  },
  {
    label: 'Shopper',
    value: 'shopper',
    description: 'Discovering and purchasing products',
    icon: ShoppingCart,
  },
  {
    label: 'Admin',
    value: 'admin',
    description: 'Managing and overseeing operations',
    icon: Shield,
  },
];

export default function RoleSelectionStep() {
  const {} = useForm();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="w-12 h-12 mx-auto bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
          <Briefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Select Your Role
          </h2>
          <p className="text-foreground-600 max-w-md mx-auto">
            Choose the role that best describes your primary function
          </p>
        </div>
      </div>

      {/* Role Selection */}
      <div className="max-w-2xl mx-auto">
        <Controller
          name="role"
          render={({ field }) => {
            const { onChange, ...rest } = field;
            return (
              <RadioGroup
                onValueChange={value => onChange(value)}
                className="space-y-3"
                {...rest}
              >
                {roleOptions.map(role => {
                  const IconComponent = role.icon;
                  const isSelected = field.value === role.value;

                  return (
                    <Card
                      key={role.value}
                      className={`cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                          : 'border-content3 hover:border-primary-300'
                      }`}
                      isPressable
                      onPress={() => onChange(role.value)}
                    >
                      <CardBody className="p-4">
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                              isSelected
                                ? 'bg-primary-500 text-white'
                                : 'bg-content2 text-foreground-600'
                            }`}
                          >
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <Radio value={role.value} className="mr-0" />
                              <h3 className="font-medium text-foreground">
                                {role.label}
                              </h3>
                            </div>
                            <p className="text-sm text-foreground-600 mt-1">
                              {role.description}
                            </p>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  );
                })}
              </RadioGroup>
            );
          }}
        />
      </div>

      {/* Info */}
      <div className="text-center">
        <p className="text-sm text-foreground-500">
          This helps us personalize your dashboard experience
        </p>
      </div>
    </div>
  );
}
