import { useForm } from '@/contexts/FormContext';
import { Checkbox, CheckboxGroup, CheckboxGroupProps } from '@heroui/react';

interface CheckboxGroupInputProps extends CheckboxGroupProps {
  options: { label: string; value: string }[];
  name: string;
}

export default function CheckboxGroupInput({
  name,
  options,
  ...props
}: CheckboxGroupInputProps) {
  const formik = useForm();
  return (
    <CheckboxGroup
      name={name}
      orientation="horizontal"
      isDisabled={formik.isSubmitting}
      isInvalid={!!formik.errors[name]}
      errorMessage={formik.errors[name] as string}
      value={formik.values[name] ?? []}
      onValueChange={selectedValues => {
        formik.setFieldValue(name, selectedValues);
      }}
      {...props}
    >
      {options.map(option => (
        <Checkbox key={option.value} value={option.value}>
          {option.label}
        </Checkbox>
      ))}
    </CheckboxGroup>
  );
}
