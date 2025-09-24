'use client';

import { useForm } from '@/contexts/FormContext';
import { DatePicker, DatePickerProps } from '@heroui/react';
import { DateValue, parseDate, parseDateTime } from '@internationalized/date';
import { useMemo } from 'react';
import { Controller } from 'react-hook-form';

export type DatePickerInputProps = DatePickerProps & {
  name: string;
};

export function DatePickerInput({ name, ...props }: DatePickerInputProps) {
  const { formState, control } = useForm();
  const error = useMemo(() => {
    return formState.errors[name]?.message?.toString();
  }, [formState.errors, name]);

  return (
    <Controller
      name={name}
      render={({ field }) => {
        const { onChange, value, ...rest } = field;

        return (
          <DatePicker
            size="sm"
            value={
              props.granularity &&
              ['minute', 'hour'].includes(props.granularity)
                ? value
                  ? parseDateTime(value as string)
                  : null
                : value
                  ? parseDate(value as string)
                  : null
            }
            onChange={value => {
              const calendar = value as unknown as DateValue;
              onChange(calendar?.toString() || null);
            }}
            isDisabled={formState.isSubmitting}
            isInvalid={!!error}
            errorMessage={error}
            showMonthAndYearPickers
            classNames={{
              inputWrapper: 'border-primary',
              errorMessage: 'text-danger text-sm mt-1',
            }}
            variant="bordered"
            {...rest}
            {...props}
          />
        );
      }}
      control={control}
    />
  );
}
