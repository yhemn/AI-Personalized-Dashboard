import { ConfigTheme, heroui } from '@heroui/react';

const colors: ConfigTheme['colors'] = {
  primary: {
    DEFAULT: '#2563ef',
    foreground: '#fafafa',
  },
  secondary: {
    DEFAULT: '#262626',
    foreground: '#fafafa',
  },
  success: {
    DEFAULT: '#17c964',
    foreground: '#fafafa',
  },
};

export default heroui({
  defaultTheme: 'dark',
  themes: {
    light: {
      colors: {
        background: '#ffffff',
        foreground: '#0a0a0a',
        content1: {
          DEFAULT: '#eeeeee',
          foreground: '#0a0a0a',
        },
        divider: '#e5e5e5',
        ...colors,
      },
    },
    dark: {
      colors: {
        background: '#040404',
        foreground: '#e4e4e4',
        content1: {
          DEFAULT: '#0d0d0d',
          foreground: '#fafafa',
        },
        divider: '#ffffff0d',
        ...colors,
      },
    },
  },
  layout: {
    borderWidth: {
      medium: '1px',
    },
  },
});
