'use client';

import { useForm } from '@/contexts/FormContext';
import { Select, SelectItem, SelectProps } from '@heroui/react';
import { useMemo } from 'react';
import { Controller } from 'react-hook-form';

interface SelectInputProps extends SelectProps {
  name: string;
  options: ({ label: string; value: string } | string)[];
}

export function SelectInput({
  name,
  options,
  ...props
}: Omit<SelectInputProps, 'children'>) {
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
          <Select
            selectedKeys={field.value ? [field.value as string] : []}
            isDisabled={formState.isSubmitting}
            size="sm"
            onSelectionChange={keys => {
              const value = Array.from(keys)[0];
              onChange(value);
            }}
            isInvalid={!!error}
            errorMessage={error}
            {...rest}
            {...props}
          >
            {options.map(opt => (
              <SelectItem key={typeof opt === 'string' ? opt : opt.value}>
                {typeof opt === 'string' ? opt : opt.label}
              </SelectItem>
            ))}
          </Select>
        );
      }}
      control={control}
    />
  );
}
