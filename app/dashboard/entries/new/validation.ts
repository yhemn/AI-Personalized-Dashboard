import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  // Basic Information
  full_name: Yup.string().required('Full name is required').default(''),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
    .default(''),
  role: Yup.string().required('Role is required').default(''),
  timezone: Yup.string().required('Timezone is required').default(''),
  phone_number: Yup.string().optional().default(''),
  company: Yup.string().optional().default(''),
  job_title: Yup.string().optional().default(''),

  // Data Entry
  entry_type: Yup.string().required('Entry type is required').default(''),
  category: Yup.string().required('Category is required').default(''),
  value: Yup.number()
    .required('Value is required')
    .min(0, 'Value must be positive')
    .default(0),
  currency: Yup.string().optional().default('USD'),
  date: Yup.date().required('Date is required').default(new Date()),
  description: Yup.string().optional().default(''),

  // Advanced Data
  tags: Yup.array().of(Yup.string()).optional().default([]),
  priority_level: Yup.string()
    .required('Priority level is required')
    .default('medium'),
  status: Yup.string().required('Status is required').default('active'),
  source: Yup.string().optional().default(''),
  notes: Yup.string().optional().default(''),

  // File Attachments
  supporting_documents: Yup.array().of(Yup.mixed()).optional().default([]),
  images: Yup.array().of(Yup.mixed()).optional().default([]),
  data_files: Yup.array().of(Yup.mixed()).optional().default([]),
});

export const initialValues = validationSchema.getDefault();

export type FormDataType = Yup.InferType<typeof validationSchema>;
