'use client';

import { useForm } from '@/contexts/FormContext';
import { Checkbox, CheckboxProps } from '@heroui/react';
import { useMemo } from 'react';
import { Controller } from 'react-hook-form';

interface CheckboxInputProps extends CheckboxProps {
  name: string;
}

export function CheckboxInput({
  name,
  children,
  ...props
}: CheckboxInputProps) {
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
          <Checkbox
            size="sm"
            isDisabled={formState.isSubmitting}
            onValueChange={onChange}
            checked={field.value as boolean}
            isInvalid={!!error}
            classNames={{
              base: 'items-start',
              label: '-mt-1',
            }}
            {...rest}
            {...props}
          >
            <p className="text-gray">{children}</p>
          </Checkbox>
        );
      }}
      control={control}
    />
  );
}
