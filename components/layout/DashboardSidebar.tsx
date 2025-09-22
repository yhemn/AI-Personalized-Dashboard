'use client';

import { Button } from '@heroui/react';
import {
  BarChart3,
  Calendar,
  FileText,
  Home,
  MessageSquare,
  Settings,
  Shield,
  Users,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface DashboardSidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: Home },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
  { name: 'Users', href: '/dashboard/users', icon: Users },
  { name: 'Messages', href: '/dashboard/messages', icon: MessageSquare },
  { name: 'Calendar', href: '/dashboard/calendar', icon: Calendar },
  { name: 'Reports', href: '/dashboard/reports', icon: FileText },
  { name: 'Automation', href: '/dashboard/automation', icon: Zap },
  { name: 'Security', href: '/dashboard/security', icon: Shield },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
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
                  startContent={<item.icon className="h-4 w-4" />}
                  radius={isActive ? 'lg' : 'none'}
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
                <Zap className="h-4 w-4 text-primary" />
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
