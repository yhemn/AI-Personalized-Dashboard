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
  const { formState } = useForm();

  return (
    <Button
      type="submit"
      color="primary"
      variant="solid"
      className={cn('rounded', className)}
      isDisabled={formState.isSubmitting}
      isLoading={formState.isSubmitting}
      {...props}
    >
      {children}
    </Button>
  );
}
