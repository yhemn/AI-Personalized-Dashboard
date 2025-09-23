import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  full_name: Yup.string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must be less than 100 characters')
    .required('Full name is required')
    .default(''),

  role: Yup.string()
    .oneOf(
      ['student', 'teacher', 'shopper', 'admin'],
      'Please select a valid role'
    )
    .required('Role is required')
    .default('student'),

  interests: Yup.array()
    .of(Yup.string().required())
    .min(1, 'Please select at least one interest')
    .max(8, 'You can select up to 8 interests')
    .required('Please select your interests')
    .default([]),

  timezone: Yup.string().required('Timezone is required').default('UTC'),
});

export const initialValues = validationSchema.getDefault();

export type FormDataType = Yup.InferType<typeof validationSchema>;
