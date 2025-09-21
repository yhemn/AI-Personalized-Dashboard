import { useLocationHash } from '@/hooks/useLocationHash';
import { addToast } from '@heroui/toast';
import { useEffect } from 'react';

export default function ErrorBoundary() {
  const { hash, parseHashParams, setHash } = useLocationHash({
    parseParams: true,
  });
  useEffect(() => {
    if (hash !== null) {
      const data = parseHashParams(hash);
      if (data['error'] && data['error_description']) {
        addToast({
          color: 'danger',
          title: 'Error',
          description: data['error_description'],
        });
      }
      setHash(null);
    }
  }, [hash, parseHashParams, setHash]);
  return null;
}
