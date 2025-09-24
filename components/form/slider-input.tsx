'use client';

import { useForm } from '@/contexts/FormContext';
import { Slider, SliderProps } from '@heroui/react';
import { useMemo } from 'react';
import { Controller } from 'react-hook-form';

export type SliderInputProps = SliderProps & {
  name: string;
};

export function SliderInput({ name, ...props }: SliderInputProps) {
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
          <Slider
            size="sm"
            onValueChange={onChange}
            isDisabled={formState.isSubmitting}
            isInvalid={!!error}
            errorMessage={error}
            showTooltip
            step={1}
            {...rest}
            {...props}
          />
        );
      }}
      control={control}
    />
  );
}
