import CSRProviders from '@/components/providers/CSRProviders';
import SSRProviders from '@/components/providers/SSRProviders';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SSRProviders>
      <CSRProviders>{children}</CSRProviders>
    </SSRProviders>
  );
}
