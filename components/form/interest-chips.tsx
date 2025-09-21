'use client';

import { useForm } from '@/contexts/FormContext';
import { Chip } from '@heroui/react';
import { useEffect, useState } from 'react';

interface InterestChipsProps {
  name: string;
  label?: string;
  options: string[];
  placeholder?: string;
  maxSelections?: number;
  className?: string;
}

export function InterestChips({
  name,
  label,
  options,
  placeholder = 'Select your interests',
  maxSelections,
  className = '',
}: InterestChipsProps) {
  const formik = useForm();
  const [selectedInterests, setSelectedInterests] = useState<string[]>(
    formik.values[name] || []
  );

  useEffect(() => {
    formik.setFieldValue(name, selectedInterests);
  }, [selectedInterests, formik, name]);

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev => {
      const isSelected = prev.includes(interest);

      if (isSelected) {
        return prev.filter(item => item !== interest);
      } else {
        if (maxSelections && prev.length >= maxSelections) {
          return prev;
        }
        return [...prev, interest];
      }
    });
  };

  const isSelected = (interest: string) => selectedInterests.includes(interest);
  const isMaxReached =
    maxSelections && selectedInterests.length >= maxSelections;

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-foreground">
          {label}
          {maxSelections && (
            <span className="text-foreground-500 ml-1">
              ({selectedInterests.length}/{maxSelections})
            </span>
          )}
        </label>
      )}

      <div className="flex flex-wrap gap-2">
        {options.map(interest => {
          const selected = isSelected(interest);
          const disabled = !selected && isMaxReached;

          return (
            <Chip
              key={interest}
              variant={selected ? 'solid' : 'bordered'}
              color={selected ? 'primary' : 'default'}
              className={`cursor-pointer transition-all ${
                disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
              }`}
              onClick={() => !disabled && toggleInterest(interest)}
            >
              {interest}
            </Chip>
          );
        })}
      </div>

      {selectedInterests.length === 0 && (
        <p className="text-sm text-foreground-400">{placeholder}</p>
      )}

      {formik.errors[name] && formik.touched[name] && (
        <p className="text-sm text-danger">{formik.errors[name] as string}</p>
      )}
    </div>
  );
}
