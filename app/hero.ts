import { ConfigTheme, heroui } from '@heroui/react';

const colors: ConfigTheme['colors'] = {
  primary: {
    DEFAULT: '#8b5cf6',
    foreground: '#ffffff',
  },
  secondary: {
    DEFAULT: '#1e293b',
    foreground: '#f8fafc',
  },
  success: {
    DEFAULT: '#10b981',
    foreground: '#ffffff',
  },
  warning: {
    DEFAULT: '#f59e0b',
    foreground: '#ffffff',
  },
  danger: {
    DEFAULT: '#ef4444',
    foreground: '#ffffff',
  },
};

export default heroui({
  defaultTheme: 'dark',
  themes: {
    light: {
      colors: {
        background: '#fefefe',
        foreground: '#0f172a',
        content1: {
          DEFAULT: '#f1f5f9',
          foreground: '#0f172a',
        },
        ...colors,
      },
    },
    dark: {
      colors: {
        background: '#0a0a0a',
        foreground: '#f1f5f9',
        content1: {
          DEFAULT: '#111827',
          foreground: '#f1f5f9',
        },
        ...colors,
      },
    },
  },
  layout: {
    borderWidth: {
      small: '1px',
      medium: '2px',
      large: '3px',
    },
    radius: {
      small: '2px',
      medium: '4px',
      large: '6px',
    },
  },
});
