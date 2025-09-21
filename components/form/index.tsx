'use client';

import { FormContext } from '@/contexts/FormContext';
import { FormikHelpers, FormikProps, useFormik } from 'formik';
import { ComponentProps, PropsWithChildren, ReactNode } from 'react';
import * as Yup from 'yup';

// Types
export interface FormProps<TSchema extends Yup.ObjectSchema<any>>
  extends Omit<Omit<ComponentProps<'div'>, 'onSubmit'>, 'children'> {
  initialValues: Yup.InferType<TSchema>;
  validationSchema: TSchema | null;
  as?: React.ElementType;
  onSubmit: (
    values: Yup.InferType<TSchema>,
    formikHelpers: FormikHelpers<Yup.InferType<TSchema>>
  ) => void;
  children:
    | ReactNode
    | ((formikProps: FormikProps<Yup.InferType<TSchema>>) => ReactNode);
}

// Helper function to handle form submission
const handleFormSubmit =
  (formik: FormikProps<any>) => (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formik.handleSubmit();
  };

// Helper function to render children
const renderChildren = <TSchema extends Yup.ObjectSchema<any>>(
  children:
    | ReactNode
    | ((formikProps: FormikProps<Yup.InferType<TSchema>>) => ReactNode),
  formik: FormikProps<Yup.InferType<TSchema>>
) => {
  return typeof children === 'function' ? children(formik) : children;
};

// Main Form component
export function Form<TSchema extends Yup.ObjectSchema<any>>({
  initialValues,
  validationSchema,
  onSubmit,
  children,
  as,
  ...rest
}: PropsWithChildren<FormProps<TSchema>>) {
  // Initialize Formik
  const formik = useFormik<Yup.InferType<TSchema>>({
    initialValues,
    validationSchema,
    onSubmit,
  });

  // Determine the component to render
  const Component = as || 'form';

  // Prepare props for the component
  const componentProps = {
    ...rest,
    ...(Component === 'form' && {
      onSubmit: handleFormSubmit(formik),
    }),
  };

  return (
    <Component {...componentProps}>
      <FormContext.Provider value={{ formik }}>
        {renderChildren(
          children,
          formik as FormikProps<Yup.InferType<TSchema>>
        )}
      </FormContext.Provider>
    </Component>
  );
}
