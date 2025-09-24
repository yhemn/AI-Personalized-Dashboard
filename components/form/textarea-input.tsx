'use client';

import { useForm } from '@/contexts/FormContext';
import { Textarea, TextAreaProps } from '@heroui/react';
import { useMemo } from 'react';
import { Controller } from 'react-hook-form';

interface TextAreaInputProps extends TextAreaProps {
  name: string;
}

export function TextareaInput({ name, ...props }: TextAreaInputProps) {
  const { formState, control } = useForm();
  const error = useMemo(() => {
    return formState.errors[name]?.message?.toString();
  }, [formState.errors, name]);
  return (
    <Controller
      name={name}
      render={({ field }) => {
        const { onChange, ...rest } = field;
        return (
          <Textarea
            size="sm"
            isDisabled={formState.isSubmitting}
            validationBehavior="aria"
            formNoValidate={false}
            errorMessage={error}
            isInvalid={!!error}
            onValueChange={onChange}
            {...rest}
            {...props}
          />
        );
      }}
      control={control}
    />
  );
}
