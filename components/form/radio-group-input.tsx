'use client';

import { useForm } from '@/contexts/FormContext';
import { Radio, RadioGroup, RadioGroupProps } from '@heroui/react';
import { useMemo } from 'react';
import { Controller } from 'react-hook-form';

interface RadioGroupInputProps extends RadioGroupProps {
  name: string;
  options: { label: string; value: string }[];
}

export function RadioGroupInput({
  name,
  options,
  ...props
}: RadioGroupInputProps) {
  const { formState, control } = useForm();
  const error = useMemo(
    () => formState.errors[name]?.message?.toString(),
    [formState.errors, name]
  );

  return (
    <Controller
      name={name}
      render={({ field }) => {
        const { onChange, ...rest } = field;
        return (
          <RadioGroup
            isDisabled={formState.isSubmitting}
            onValueChange={onChange}
            isInvalid={!!error}
            errorMessage={error}
            {...rest}
            {...props}
          >
            {options.map(option => (
              <Radio key={option.value} value={option.value}>
                {option.label}
              </Radio>
            ))}
          </RadioGroup>
        );
      }}
      control={control}
    />
  );
}
