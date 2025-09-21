'use client';

import { useForm } from '@/contexts/FormContext';
import { DatePicker, DatePickerProps } from '@heroui/react';
import { DateValue, parseDate, parseDateTime } from '@internationalized/date';
import { useMemo } from 'react';

export type DatePickerInputProps = DatePickerProps & {
  name: string;
};

export function DatePickerInput({
  name,
  onChange,
  ...props
}: DatePickerInputProps) {
  const formik = useForm();
  const error = useMemo(() => {
    return formik.touched[name] && formik.errors[name]
      ? (formik.errors[name] as string)
      : undefined;
  }, [formik.errors, formik.touched, name]);

  const currentValue = useMemo(() => {
    if (props.granularity && ['minute', 'hour'].includes(props.granularity)) {
      return formik.values[name]
        ? parseDateTime(formik.values[name] as string)
        : null;
    } else {
      return formik.values[name]
        ? parseDate(formik.values[name] as string)
        : null;
    }
  }, [formik.values, name, props.granularity]);

  return (
    <DatePicker
      size="sm"
      name={name}
      onChange={value => {
        const calendar = value as unknown as DateValue;
        formik.setFieldValue(name, calendar?.toString() || null);
        onChange?.(value);
      }}
      value={currentValue}
      onBlur={formik.handleBlur}
      isDisabled={formik.isSubmitting}
      isInvalid={!!error}
      errorMessage={error}
      showMonthAndYearPickers
      classNames={{
        inputWrapper: 'border-primary',
        errorMessage: 'text-danger text-sm mt-1',
      }}
      variant="bordered"
      {...props}
    />
  );
}
