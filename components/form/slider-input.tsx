'use client'

import { useForm } from '@/contexts/FormContext'
import { Slider, SliderProps } from '@heroui/react'
import React, { useMemo } from 'react'

export type SliderInputProps = SliderProps & {
  name: string
}

export function SliderInput({ name, onChange, ...props }: SliderInputProps) {
  const formik = useForm()
  const error = useMemo(() => {
    return formik.touched[name] && formik.errors[name]
      ? (formik.errors[name] as string)
      : undefined
  }, [formik.errors, formik.touched, name])

  return (
    <Slider
      size="sm"
      name={name}
      value={formik.values[name] ?? 0}
      onChange={(value) => {
        formik.setFieldValue(name, value)
        return onChange?.(value)
      }}
      onBlur={formik.handleBlur}
      isDisabled={formik.isSubmitting}
      isInvalid={!!error}
      errorMessage={error}
      aria-invalid={!!error}
      aria-describedby={error ? `${name}-error` : undefined}
      showTooltip
      step={1}
      {...props}
    />
  )
}
