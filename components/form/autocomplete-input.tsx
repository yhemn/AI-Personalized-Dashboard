'use client';

import { useForm } from '@/contexts/FormContext';
import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteProps,
} from '@heroui/react';
import { useMemo } from 'react';
import { Controller } from 'react-hook-form';

interface AutocompleteInputProps extends AutocompleteProps {
  name: string;
  options: ({ label: string; value: string; tip?: string } | string)[];
}

export function AutocompleteInput({
  name,
  options,
  ...props
}: Omit<AutocompleteInputProps, 'children'>) {
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
          <Autocomplete
            selectedKey={value as string}
            isDisabled={formState.isSubmitting}
            size="sm"
            onSelectionChange={key => {
              onChange(key?.toString() ?? '');
            }}
            isInvalid={!!error}
            errorMessage={error}
            {...rest}
            {...props}
          >
            {options.map(opt => (
              <AutocompleteItem key={typeof opt === 'string' ? opt : opt.value}>
                {typeof opt === 'string' ? opt : opt.label}
              </AutocompleteItem>
            ))}
          </Autocomplete>
        );
      }}
      control={control}
    />
  );
}
