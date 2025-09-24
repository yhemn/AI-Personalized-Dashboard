'use client';

import { useForm } from '@/contexts/FormContext';
import { Input, InputProps } from '@heroui/react';
import { useMemo } from 'react';
import { Controller } from 'react-hook-form';

export type TextInputProps = InputProps & {
  name: string;
};

export function TextInput({ name, ...props }: TextInputProps) {
  const { formState, control } = useForm();
  const error = useMemo(() => {
    return formState.errors[name]?.message?.toString();
  }, [formState.errors, name]);

  return (
    <Controller
      name={name}
      render={({ field }) => {
        const { ...rest } = field;
        return (
          <Input
            size="sm"
            isInvalid={!!error}
            errorMessage={error}
            formNoValidate={false}
            radius="md"
            {...rest}
            {...props}
          />
        );
      }}
      control={control}
    />
  );
}
