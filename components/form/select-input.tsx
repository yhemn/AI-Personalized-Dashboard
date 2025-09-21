'use client';

import { useForm } from '@/contexts/FormContext';
import { Select, SelectItem, SelectProps } from '@heroui/react';
import { useMemo } from 'react';

interface SelectInputProps extends SelectProps {
  name: string;
  options: ({ label: string; value: string } | string)[];
}

export function SelectInput({
  name,
  options,
  ...props
}: Omit<SelectInputProps, 'children'>) {
  const formik = useForm();
  const error = useMemo(
    () => formik.touched[name] && (formik.errors[name] as string),
    [formik.errors, formik.touched, name]
  );

  return (
    <Select
      name={name}
      selectedKeys={[formik.values[name] as string]}
      isDisabled={formik.isSubmitting}
      size="sm"
      onSelectionChange={keys => {
        const value = Array.from(keys)[0];
        formik.setFieldValue(name, value);
      }}
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
      {options.map(opt => (
        <SelectItem key={typeof opt === 'string' ? opt : opt.value}>
          {typeof opt === 'string' ? opt : opt.label}
        </SelectItem>
      ))}
    </Select>
  );
}
