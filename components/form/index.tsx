'use client';

import { FormContext } from '@/contexts/FormContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { ComponentProps, ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

export interface FormProps extends ComponentProps<'form'> {
  onSubmit: (data: any) => void;
  children: ReactNode;
  validationSchema: Yup.ObjectSchema<any>;
  initialValues: any;
}

export function Form({
  onSubmit,
  children,
  validationSchema,
  initialValues,
  ...props
}: FormProps) {
  const form = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: initialValues,
    mode: 'onChange', // Validate on change for better UX
  });

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} noValidate {...props}>
      <FormContext.Provider value={{ form }}>{children}</FormContext.Provider>
    </form>
  );
}
