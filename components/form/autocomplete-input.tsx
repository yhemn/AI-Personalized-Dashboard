'use client';

import { useForm } from '@/contexts/FormContext';
import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteProps,
} from '@heroui/react';
import { useMemo } from 'react';

interface AutocompleteInputProps extends AutocompleteProps {
  name: string;
  options: ({ label: string; value: string; tip?: string } | string)[];
}

export function AutocompleteInput({
  name,
  options,
  ...props
}: Omit<AutocompleteInputProps, 'children'>) {
  const formik = useForm();
  const error = useMemo(
    () => formik.touched[name] && (formik.errors[name] as string),
    [formik.errors, formik.touched, name]
  );

  return (
    <Autocomplete
      name={name}
      selectedKey={formik.values[name] as string}
      isDisabled={formik.isSubmitting}
      size="sm"
      onSelectionChange={key => {
        formik.setFieldValue(name, key?.toString() ?? '');
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
        <AutocompleteItem key={typeof opt === 'string' ? opt : opt.value}>
          {typeof opt === 'string' ? opt : opt.label}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
}
