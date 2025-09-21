'use client'

import { useForm } from '@/contexts/FormContext'
import { Checkbox, CheckboxProps } from '@heroui/react'
import React, { useMemo } from 'react'

interface CheckboxInputProps extends CheckboxProps {
  name: string
}

export function CheckboxInput({
  name,
  children,
  ...props
}: CheckboxInputProps) {
  const formik = useForm()
  const error = useMemo(
    () => formik.touched[name] && (formik.errors[name] as string),
    [formik.errors, formik.touched, name],
  )

  return (
    <Checkbox
      name={name}
      size="sm"
      value={name}
      isDisabled={formik.isSubmitting}
      onValueChange={(isChecked) => formik.setFieldValue(name, isChecked)}
      onBlur={(event) => {
        formik.setFieldTouched(name, true, false)
        formik.handleBlur(event)
      }}
      checked={formik.values[name] as boolean}
      isInvalid={!!error}
      classNames={{
        base: 'items-start',
        label: '-mt-1',
      }}
      aria-invalid={!!error}
      aria-describedby={error ? `${name}-error` : undefined}
      {...props}
    >
      <p className="text-gray">{children}</p>
    </Checkbox>
  )
}
