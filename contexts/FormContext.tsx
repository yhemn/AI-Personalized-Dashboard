import { FormikProps } from 'formik'
import * as Yup from 'yup'
import { createContext, useContext } from 'react'

type FormContextType<T> = {
  formik: FormikProps<T>
}

export const FormContext = createContext<FormContextType<any> | undefined>(
  undefined,
)

export function useForm<T extends Yup.AnyObject>(
  initialFormik?: FormikProps<T>,
): FormikProps<T> {
  const context = useContext(FormContext)
  if (!context) {
    if (initialFormik) {
      return initialFormik
    }
    throw new Error('useForm must be used within a <Form> component')
  }
  return context.formik
}
