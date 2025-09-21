'use client';

import { useForm } from '@/contexts/FormContext';
import { Radio, RadioGroup, RadioGroupProps } from '@heroui/react';
import { useMemo } from 'react';

interface RadioGroupInputProps extends RadioGroupProps {
  name: string;
  options: { label: string; value: string }[];
}

export function RadioGroupInput({
  name,
  options,
  ...props
}: RadioGroupInputProps) {
  const formik = useForm();
  const error = useMemo(
    () => formik.touched[name] && (formik.errors[name] as string),
    [formik.errors, formik.touched, name]
  );

  return (
    <RadioGroup
      isDisabled={formik.isSubmitting}
      name={name}
      value={formik.values[name] as string}
      onValueChange={value => formik.setFieldValue(name, value)}
      onBlur={event => {
        formik.setFieldTouched(name, true, false);
        formik.handleBlur(event);
      }}
      isInvalid={!!error}
      errorMessage={error}
      aria-invalid={!!error}
      aria-describedby={error ? `${name}-error` : undefined}
      {...props}
    >
      {options.map(option => (
        <Radio key={option.value} value={option.value}>
          {option.label}
        </Radio>
      ))}
    </RadioGroup>
  );
}
