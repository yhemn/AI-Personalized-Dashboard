import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().default(''),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required()
    .default(''),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required()
    .default(''),
});

export const initialValues = validationSchema.getDefault();

export type FormDataType = Yup.InferType<typeof validationSchema>;
