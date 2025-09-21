'use client';

import { IconEye, IconEyeOff } from '@tabler/icons-react';
import React from 'react';
import { TextInput, TextInputProps } from './text-input';

export function PasswordInput(props: Omit<TextInputProps, 'type'>) {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <TextInput
      type={isVisible ? 'text' : 'password'}
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
          tabIndex={-1}
          aria-hidden="true"
        >
          {isVisible ? (
            <IconEye
              size={20}
              role="button"
              aria-hidden="true"
              className="cursor-pointer"
            />
          ) : (
            <IconEyeOff
              size={20}
              role="button"
              aria-hidden="true"
              className="cursor-pointer"
            />
          )}
        </button>
      }
      {...props}
    />
  );
}
