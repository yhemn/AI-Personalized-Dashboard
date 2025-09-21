'use client';

import ErrorBoundary from '@/components/error-boundary/ErrorBoundary';
import { HeroUIProvider, ToastProvider } from '@heroui/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function CSRProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider attribute="class" enableSystem>
      <HeroUIProvider>
        <ToastProvider
          maxVisibleToasts={1}
          placement="bottom-right"
          toastProps={{
            radius: 'sm',
            size: 'lg',
            timeout: 10000,
          }}
        />
        <ErrorBoundary />
        {children}
      </HeroUIProvider>
    </NextThemesProvider>
  );
}
