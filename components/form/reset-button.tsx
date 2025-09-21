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
  const formik = useForm();

  return (
    <Button
      type="reset"
      color="default"
      variant="light"
      className={cn('rounded', className)}
      isDisabled={formik.isSubmitting}
      onPress={() => formik.resetForm()}
      {...props}
    >
      {children}
    </Button>
  );
}
