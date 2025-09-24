'use client';

import { useForm } from '@/contexts/FormContext';
import cn from '@/lib/cn';
import { Button, ButtonProps } from '@heroui/react';
import React from 'react';

export interface ResetButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export default function ResetButton({
  children,
  className,
  ...props
}: ResetButtonProps) {
  const { formState, reset } = useForm();

  return (
    <Button
      type="reset"
      color="default"
      variant="light"
      className={cn('rounded', className)}
      isDisabled={formState.isSubmitting}
      onPress={() => reset()}
      {...props}
    >
      {children}
    </Button>
  );
}
