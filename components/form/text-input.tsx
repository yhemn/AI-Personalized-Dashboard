'use client';

import { useForm } from '@/contexts/FormContext';
import { Input, InputProps } from '@heroui/react';
import { useMemo } from 'react';

export type TextInputProps = InputProps & {
  name: string;
};

export function TextInput({ name, onChange, ...props }: TextInputProps) {
  const formik = useForm();
  const error = useMemo(() => {
    return formik.touched[name] && formik.errors[name]
      ? (formik.errors[name] as string)
      : undefined;
  }, [formik.errors, formik.touched, name]);

  return (
    <Input
      size="sm"
      name={name}
      value={formik.values[name] || ''}
      onChange={event => {
        formik.handleChange(event);
        return onChange?.(event);
      }}
      onBlur={formik.handleBlur}
      isDisabled={formik.isSubmitting}
      isInvalid={!!error}
      errorMessage={error}
      aria-invalid={!!error}
      aria-describedby={error ? `${name}-error` : undefined}
      formNoValidate={false}
      radius="md"
      {...props}
    />
  );
}
