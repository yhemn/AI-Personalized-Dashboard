import { useCallback, useEffect, useState } from 'react';

interface UseLocationHashOptions {
  /** Whether to include the # symbol in the returned hash (default: false) */
  includeHash?: boolean;
  /** Whether to return null when hash is empty (default: true) */
  returnNullForEmpty?: boolean;
  /** Whether to automatically parse hash parameters into an object (default: false) */
  parseParams?: boolean;
}

interface UseLocationHashReturn {
  /** The current hash value (without # by default) */
  hash: string | null;
  /** Parsed hash parameters as an object (when parseParams is enabled) */
  params: Record<string, string> | null;
  /** Whether the component is mounted and window is available */
  isClient: boolean;
  /** Manually set the hash (pass null to clear) */
  setHash: (newHash: string | null) => void;
  /** Parse a hash string into parameters object */
  parseHashParams: (hashString: string) => Record<string, string>;
}

/**
 * Hook to track and manage the browser's location hash
 *
 * @param options Configuration options for the hook
 * @returns Object containing hash value, client status, and hash setter
 *
 * @example
 * ```tsx
 * // Basic usage
 * const { hash, setHash } = useLocationHash();
 *
 * // Navigate to a section
 * setHash('section1');
 *
 * // Clear the hash
 * setHash(null);
 *
 * // Parse hash parameters automatically
 * const { hash, params } = useLocationHash({ parseParams: true });
 * // For hash: "#error=access_denied&error_code=otp_expired"
 * // params will be: { error: "access_denied", error_code: "otp_expired" }
 *
 * // Manual parsing
 * const { parseHashParams } = useLocationHash();
 * const parsed = parseHashParams("error=access_denied&error_code=otp_expired");
 * ```
 */
export function useLocationHash(
  options: UseLocationHashOptions = {}
): UseLocationHashReturn {
  const {
    includeHash = false,
    returnNullForEmpty = true,
    parseParams = false,
  } = options;

  // Initialize state with proper SSR handling
  const [hash, setHashState] = useState<string | null>(() => {
    if (typeof window === 'undefined') return null;
    const currentHash = window.location.hash;
    if (!currentHash) return returnNullForEmpty ? null : '';
    return includeHash ? currentHash : currentHash.slice(1);
  });

  const [isClient, setIsClient] = useState(false);

  // Parse hash parameters into an object
  const parseHashParams = useCallback(
    (hashString: string): Record<string, string> => {
      if (!hashString) return {};

      // Remove # if present
      const cleanHash = hashString.startsWith('#')
        ? hashString.slice(1)
        : hashString;

      // Check if it looks like query parameters
      if (!cleanHash.includes('=') && !cleanHash.includes('&')) {
        return {};
      }

      const params: Record<string, string> = {};
      const pairs = cleanHash.split('&');

      for (const pair of pairs) {
        const [key, value] = pair.split('=');
        if (key) {
          // Decode URL-encoded values and handle + characters
          // First replace + with spaces, then decode URI components
          const decodedKey = decodeURIComponent(key.replace(/\+/g, ' '));
          const decodedValue = value
            ? decodeURIComponent(value.replace(/\+/g, ' '))
            : '';
          params[decodedKey] = decodedValue;
        }
      }

      return params;
    },
    []
  );

  // State for parsed parameters
  const [params, setParams] = useState<Record<string, string> | null>(() => {
    if (!parseParams || typeof window === 'undefined') return null;
    const currentHash = window.location.hash;
    if (!currentHash) return null;
    return parseHashParams(currentHash);
  });

  // Memoized hash change listener
  const handleHashChange = useCallback(() => {
    if (typeof window === 'undefined') return;

    const currentHash = window.location.hash;
    if (!currentHash) {
      setHashState(returnNullForEmpty ? null : '');
      if (parseParams) setParams(null);
      return;
    }

    const hashValue = includeHash ? currentHash : currentHash.slice(1);
    setHashState(hashValue);

    // Update params if parsing is enabled
    if (parseParams) {
      setParams(parseHashParams(currentHash));
    }
  }, [includeHash, returnNullForEmpty, parseParams, parseHashParams]);

  // Manual hash setter
  const setHash = useCallback(
    (newHash: string | null) => {
      if (typeof window === 'undefined') return;

      // Handle null case - clear the hash completely
      if (newHash === null) {
        // Use replaceState to avoid adding a new history entry
        window.location.hash = '';
        return;
      }

      const hashValue =
        includeHash && !newHash.startsWith('#') ? `#${newHash}` : newHash;
      window.location.hash = hashValue;
    },
    [includeHash]
  );

  useEffect(() => {
    // Mark as client-side after mount
    setIsClient(true);

    // Set initial hash if not already set
    if (hash === null && typeof window !== 'undefined') {
      handleHashChange();
    }

    // Add event listener
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [handleHashChange, hash]);

  return {
    hash,
    params: parseParams ? params : null,
    isClient,
    setHash,
    parseHashParams,
  };
}
