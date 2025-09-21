import { useForm } from '@/contexts/FormContext';
import cn from '@/lib/cn';
import { Button, ButtonProps } from '@heroui/react';
import React from 'react';

export interface SubmitButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export default function SubmitButton({
  children,
  className,
  ...props
}: SubmitButtonProps) {
  const formik = useForm();

  return (
    <Button
      type="submit"
      color="primary"
      variant="solid"
      className={cn('rounded', className)}
      isDisabled={formik.isSubmitting}
      isLoading={formik.isSubmitting}
      onPress={() => formik.handleSubmit()}
      {...props}
    >
      {children}
    </Button>
  );
}
