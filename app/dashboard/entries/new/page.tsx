'use client';

import { Form } from '@/components/form';
import { AutocompleteInput } from '@/components/form/autocomplete-input';
import { CheckboxGroupInput } from '@/components/form/checkbox-group-input';
import { DatePickerInput } from '@/components/form/date-picker-input';
import { InterestChips } from '@/components/form/interest-chips';
import { PasswordInput } from '@/components/form/password-input';
import { RadioGroupInput } from '@/components/form/radio-group-input';
import ResetButton from '@/components/form/reset-button';
import { SelectInput } from '@/components/form/select-input';
import { SliderInput } from '@/components/form/slider-input';
import SubmitButton from '@/components/form/submit-button';
import { TextInput } from '@/components/form/text-input';
import { TextareaInput } from '@/components/form/textarea-input';
import { useAuth } from '@/hooks/useAuth';
import {
  AVAILABLE_TIMEZONES,
  INTERESTS_OPTIONS,
  USER_ROLE_OPTIONS,
} from '@/lib/constants';
import { Card, CardBody, CardHeader, Divider } from '@heroui/react';
import { useMemo, useState } from 'react';
import * as Yup from 'yup';

const ENTRY_TYPE_OPTIONS = [
  { label: 'Sales Data', value: 'sales' },
  { label: 'User Activity', value: 'user_activity' },
  { label: 'Financial Metrics', value: 'financial' },
  { label: 'Performance Data', value: 'performance' },
  { label: 'Marketing Data', value: 'marketing' },
  { label: 'Custom Entry', value: 'custom' },
];

const CATEGORY_OPTIONS = [
  { label: 'Revenue', value: 'revenue' },
  { label: 'Users', value: 'users' },
  { label: 'Marketing', value: 'marketing' },
  { label: 'Operations', value: 'operations' },
  { label: 'Support', value: 'support' },
  { label: 'Product', value: 'product' },
  { label: 'Finance', value: 'finance' },
];

const CURRENCY_OPTIONS = [
  { label: 'USD ($)', value: 'USD' },
  { label: 'EUR (€)', value: 'EUR' },
  { label: 'GBP (£)', value: 'GBP' },
  { label: 'JPY (¥)', value: 'JPY' },
  { label: 'CAD (C$)', value: 'CAD' },
  { label: 'AUD (A$)', value: 'AUD' },
];

const PRIORITY_OPTIONS = [
  { label: 'Low', value: 'low' },
  { label: 'Medium', value: 'medium' },
  { label: 'High', value: 'high' },
  { label: 'Critical', value: 'critical' },
];

const STATUS_OPTIONS = [
  { label: 'Active', value: 'active' },
  { label: 'Pending', value: 'pending' },
  { label: 'Completed', value: 'completed' },
  { label: 'Archived', value: 'archived' },
];

const TAG_OPTIONS = [
  'Q1 2024',
  'Q2 2024',
  'Q3 2024',
  'Q4 2024',
  'Important',
  'Follow-up',
  'Analysis',
  'Report',
  'Meeting',
  'Project',
  'Client',
  'Internal',
  'External',
  'Urgent',
  'Review',
];

export default function NewEntryPage() {
  const { userAuth } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        // Basic Information
        full_name: Yup.string().required('Full name is required').default(''),
        email: Yup.string()
          .email('Invalid email')
          .required('Email is required')
          .default(''),
        role: Yup.string().required('Role is required').default(''),
        timezone: Yup.string().required('Timezone is required').default(''),
        phone_number: Yup.string().optional().default(''),
        company: Yup.string().optional().default(''),
        job_title: Yup.string().optional().default(''),

        // Data Entry
        entry_type: Yup.string().required('Entry type is required').default(''),
        category: Yup.string().required('Category is required').default(''),
        value: Yup.number()
          .required('Value is required')
          .min(0, 'Value must be positive')
          .default(0),
        currency: Yup.string().optional().default('USD'),
        date: Yup.string().required('Date is required').default(''),
        description: Yup.string().optional().default(''),

        // Advanced Data
        tags: Yup.array().of(Yup.string()).optional().default([]),
        priority_level: Yup.string()
          .required('Priority level is required')
          .default('medium'),
        status: Yup.string().required('Status is required').default('active'),
        source: Yup.string().optional().default(''),
        notes: Yup.string().optional().default(''),

        // Additional fields for demonstration
        confidence_score: Yup.number().min(0).max(100).default(50),
        is_public: Yup.boolean().default(false),
        interests: Yup.array().of(Yup.string()).optional().default([]),
      }),
    []
  );

  const handleSubmit = async (
    values: Yup.InferType<typeof validationSchema>
  ) => {
    setIsLoading(true);
    try {
      console.log('Submitting entry:', values);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.error('Error submitting entry:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!userAuth) return null;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Create New Entry</h1>
        <p className="text-foreground/70 mt-1">
          Add new data to your personalized dashboard using all available form
          components
        </p>
      </div>

      <Form
        validationSchema={validationSchema}
        initialValues={{
          ...validationSchema.getDefault(),
          email: userAuth.email || '',
        }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold">Basic Information</h2>
          </CardHeader>
          <CardBody className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextInput
                label="Full Name"
                placeholder="Enter your full name"
                name="full_name"
                size="md"
                variant="bordered"
                isRequired
              />

              <TextInput
                label="Email"
                name="email"
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

              <TextInput
                label="Phone Number"
                placeholder="Enter phone number"
                name="phone_number"
                size="md"
                variant="bordered"
              />

              <TextInput
                label="Company/Organization"
                placeholder="Enter company name"
                name="company"
                size="md"
                variant="bordered"
              />

              <TextInput
                label="Job Title"
                placeholder="Enter job title"
                name="job_title"
                size="md"
                variant="bordered"
              />
            </div>
          </CardBody>
        </Card>

        {/* Data Entry Section */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold">Data Entry</h2>
          </CardHeader>
          <CardBody className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SelectInput
                label="Entry Type"
                name="entry_type"
                size="md"
                variant="bordered"
                options={ENTRY_TYPE_OPTIONS}
                isRequired
              />

              <SelectInput
                label="Category"
                name="category"
                size="md"
                variant="bordered"
                options={CATEGORY_OPTIONS}
                isRequired
              />

              <TextInput
                label="Value"
                name="value"
                type="number"
                placeholder="Enter numeric value"
                size="md"
                variant="bordered"
                isRequired
              />

              <SelectInput
                label="Currency"
                name="currency"
                size="md"
                variant="bordered"
                options={CURRENCY_OPTIONS}
              />

              <DatePickerInput
                label="Date"
                name="date"
                size="md"
                variant="bordered"
                isRequired
              />

              <SliderInput
                label="Confidence Score"
                name="confidence_score"
                size="md"
                minValue={0}
                maxValue={100}
                step={1}
                marks={[
                  { value: 0, label: '0%' },
                  { value: 25, label: '25%' },
                  { value: 50, label: '50%' },
                  { value: 75, label: '75%' },
                  { value: 100, label: '100%' },
                ]}
              />
            </div>

            <TextareaInput
              label="Description"
              name="description"
              placeholder="Describe this data entry..."
              size="md"
              variant="bordered"
              maxRows={3}
              minRows={3}
            />
          </CardBody>
        </Card>

        {/* Advanced Data Section */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold">Advanced Data</h2>
          </CardHeader>
          <CardBody className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CheckboxGroupInput
                label="Tags"
                name="tags"
                options={TAG_OPTIONS.map(tag => ({ label: tag, value: tag }))}
                size="md"
              />

              <RadioGroupInput
                label="Priority Level"
                name="priority_level"
                options={PRIORITY_OPTIONS}
                size="md"
                isRequired
              />

              <SelectInput
                label="Status"
                name="status"
                size="md"
                variant="bordered"
                options={STATUS_OPTIONS}
                isRequired
              />

              <TextInput
                label="Source"
                name="source"
                placeholder="Where did this data come from?"
                size="md"
                variant="bordered"
              />
            </div>

            <TextareaInput
              label="Notes"
              name="notes"
              placeholder="Additional notes or context..."
              size="md"
              variant="bordered"
              maxRows={3}
              minRows={3}
            />
          </CardBody>
        </Card>

        {/* Interests Section */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold">Related Interests</h2>
          </CardHeader>
          <CardBody>
            <InterestChips
              name="interests"
              options={INTERESTS_OPTIONS}
              maxSelections={8}
              size="md"
            />
          </CardBody>
        </Card>

        {/* Additional Form Components Demo */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold">Additional Options</h2>
          </CardHeader>
          <CardBody className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CheckboxGroupInput
                label="Make Public"
                name="is_public"
                options={[
                  { label: 'Make this entry publicly visible', value: 'true' },
                ]}
                size="md"
              />

              <PasswordInput
                label="Secure Access Code"
                name="access_code"
                placeholder="Optional access code"
                size="md"
                variant="bordered"
              />
            </div>
          </CardBody>
        </Card>

        <Divider />

        {/* Form Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-end">
          <ResetButton size="lg" variant="bordered">
            Reset Form
          </ResetButton>
          <SubmitButton size="lg" isLoading={isLoading}>
            Create Entry
          </SubmitButton>
        </div>
      </Form>
    </div>
  );
}
