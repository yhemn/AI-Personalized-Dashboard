'use client';

import { useForm } from '@/contexts/FormContext';
import { Textarea, TextAreaProps } from '@heroui/react';
import { useMemo } from 'react';

interface TextAreaInputProps extends TextAreaProps {
  name: string;
}

export function TextareaInput({ name, ...props }: TextAreaInputProps) {
  const formik = useForm();
  const error = useMemo(
    () => formik.touched[name] && (formik.errors[name] as string),
    [formik.errors, formik.touched, name]
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue(name, event.target.value);
    formik.handleChange(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    formik.handleBlur(event);
    formik.setFieldValue(name, event.target.value);
    formik.setFieldTouched(name, true, false);
  };

  return (
    <Textarea
      size="sm"
      name={String(name)}
      value={formik.values[name] as string}
      isDisabled={formik.isSubmitting}
      onChange={handleChange}
      onBlur={handleBlur}
      validationBehavior="aria"
      formNoValidate={false}
      errorMessage={error}
      isInvalid={!!error}
      aria-invalid={!!error}
      aria-describedby={error ? `${name}-error` : undefined}
      {...props}
    />
  );
}
