import { createContext, useContext } from 'react';
import { UseFormReturn } from 'react-hook-form';

type FormContextType = {
  form: UseFormReturn;
};

export const FormContext = createContext<FormContextType | undefined>(
  undefined
);

export function useForm() {
  const context = useContext(FormContext);
  if (!context)
    throw new Error('useForm must be used within a <Form> component');

  return context.form;
}
