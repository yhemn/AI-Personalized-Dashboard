'use client';

import { useForm } from '@/contexts/FormContext';
import { Checkbox, CheckboxGroup, CheckboxGroupProps } from '@heroui/react';
import { useMemo } from 'react';
import { Controller } from 'react-hook-form';

export interface CheckboxGroupInputProps extends CheckboxGroupProps {
  options: { label: string; value: string }[];
  name: string;
}

export function CheckboxGroupInput({
  name,
  options,
  ...props
}: CheckboxGroupInputProps) {
  const { formState, control } = useForm();
  const error = useMemo(
    () => formState.errors[name]?.message?.toString(),
    [formState.errors, name]
  );

  return (
    <Controller
      name={name}
      render={({ field }) => {
        const { onChange, value, ...rest } = field;
        return (
          <CheckboxGroup
            orientation="horizontal"
            isDisabled={formState.isSubmitting}
            isInvalid={!!error}
            errorMessage={error}
            value={Array.isArray(value) ? value : value ? [value] : []}
            onValueChange={selectedValues => {
              onChange(selectedValues);
            }}
            {...rest}
            {...props}
          >
            {options.map(option => (
              <Checkbox key={option.value} value={option.value}>
                {option.label}
              </Checkbox>
            ))}
          </CheckboxGroup>
        );
      }}
      control={control}
    />
  );
}
