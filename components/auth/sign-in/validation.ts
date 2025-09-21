import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().default(''),
  password: Yup.string().required().default(''),
});

export const initialValues = validationSchema.getDefault();

export type FormDataType = Yup.InferType<typeof validationSchema>;
