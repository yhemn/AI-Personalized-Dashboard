import { Button } from '@heroui/react';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from 'next-themes';
import { useEffect, useMemo, useState } from 'react';

export default function ThemeToggler() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = useMemo(
    () => (resolvedTheme === 'dark' ? 'dark' : 'light'),
    [resolvedTheme]
  );

  return (
    <Button
      size="sm"
      isIconOnly
      variant="bordered"
      radius="full"
      onPress={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
    >
      {mounted ? (
        currentTheme === 'dark' ? (
          <IconSun size={16} />
        ) : (
          <IconMoon size={16} />
        )
      ) : (
        <IconMoon size={16} />
      )}
    </Button>
  );
}
