'use client';

import { useForm } from '@/contexts/FormContext';
import { Chip } from '@heroui/react';
import { useMemo } from 'react';
import { Controller } from 'react-hook-form';

interface InterestChipsProps {
  name: string;
  label?: string;
  options: string[];
  placeholder?: string;
  maxSelections?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function InterestChips({
  name,
  label,
  options,
  placeholder = 'Select your interests',
  maxSelections,
  className = '',
  size = 'md',
}: InterestChipsProps) {
  const { formState, control } = useForm();
  const error = useMemo(
    () => formState.errors[name]?.message?.toString(),
    [formState.errors, name]
  );

  return (
    <Controller
      name={name}
      render={({ field }) => {
        const { onChange, value } = field;
        const selectedInterests = Array.isArray(value)
          ? (value as string[])
          : [];

        const toggleInterest = (interest: string) => {
          const isSelected = selectedInterests.includes(interest);
          if (isSelected) {
            onChange(selectedInterests.filter(item => item !== interest));
          } else {
            if (maxSelections && selectedInterests.length >= maxSelections) {
              return;
            }
            onChange([...selectedInterests, interest]);
          }
        };

        const isSelected = (interest: string) =>
          selectedInterests.includes(interest);
        const isMaxReached =
          maxSelections && selectedInterests.length >= maxSelections;

        return (
          <div className={`space-y-2 ${className}`}>
            {label && (
              <label className="text-sm font-medium text-foreground block">
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
                    size={size}
                    variant={selected ? 'solid' : 'bordered'}
                    color={selected ? 'primary' : 'default'}
                    className={`cursor-pointer transition-all ${
                      disabled
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:scale-105'
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

            {error && <p className="text-sm text-danger">{error}</p>}
          </div>
        );
      }}
      control={control}
    />
  );
}
