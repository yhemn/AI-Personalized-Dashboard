'use client';

import { Button } from '@heroui/react';
import {
  IconBolt,
  IconCalendar,
  IconChartBar,
  IconFileText,
  IconHome,
  IconMessages,
  IconSettings,
  IconShield,
  IconUsers,
} from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface DashboardSidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: IconHome },
  { name: 'Analytics', href: '/dashboard/analytics', icon: IconChartBar },
  { name: 'Users', href: '/dashboard/users', icon: IconUsers },
  { name: 'Messages', href: '/dashboard/messages', icon: IconMessages },
  { name: 'Calendar', href: '/dashboard/calendar', icon: IconCalendar },
  { name: 'Reports', href: '/dashboard/reports', icon: IconFileText },
  { name: 'Automation', href: '/dashboard/automation', icon: IconBolt },
  { name: 'Security', href: '/dashboard/security', icon: IconShield },
  { name: 'Settings', href: '/dashboard/settings', icon: IconSettings },
];

export function DashboardSidebar({ isOpen, onClose }: DashboardSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed top-0 left-0 bottom-0 z-40 h-[calc(100vh-56px)] mt-14 bg-background border-e border-divider transform transition-transform duration-200
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:inset-0
        w-64
      `}
      >
        <div className="flex flex-col h-full py-5 px-2">
          {/* Navigation */}
          <nav className="flex-1 space-y-1 overflow-y-auto">
            {navigation.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Button
                  key={`navigationItem-${index}`}
                  variant={isActive ? 'solid' : 'light'}
                  color={isActive ? 'primary' : 'default'}
                  startContent={<item.icon size={16} />}
                  className="justify-start"
                  as={Link}
                  href={item.href}
                  fullWidth
                >
                  {item.name}
                </Button>
              );
            })}
          </nav>

          {/* Upgrade */}
          <div className="p-3 border-t border-divider">
            <div className="bg-primary/10 rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-2">
                <IconBolt size={16} className="text-primary" />
                <div className="text-sm font-medium">Upgrade Plan</div>
              </div>
              <Button size="sm" color="primary" className="w-full">
                Upgrade
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
