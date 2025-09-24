'use client';

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@heroui/react';
import {
  AlertCircle,
  Bell,
  CheckCircle,
  HelpCircle,
  Info,
  LogOut,
  Menu,
  Moon,
  Settings,
  Shield,
  Sun,
  User,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useMemo, useState } from 'react';

interface DashboardHeaderProps {
  onMenuToggle?: () => void;
  isMobileMenuOpen?: boolean;
}

const notifications = [
  {
    id: 1,
    title: 'New user registered',
    message: 'Sarah Johnson has joined your team',
    time: '2 minutes ago',
    type: 'success',
    unread: true,
  },
  {
    id: 2,
    title: 'System maintenance',
    message: 'Scheduled maintenance will begin at 2 AM',
    time: '1 hour ago',
    type: 'warning',
    unread: true,
  },
  {
    id: 3,
    title: 'Data export complete',
    message: 'Your monthly report is ready for download',
    time: '3 hours ago',
    type: 'info',
    unread: false,
  },
];

const userActions = [
  {
    key: 'profile',
    label: 'View Profile',
    icon: User,
    href: '/dashboard/profile',
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: Settings,
    href: '/dashboard/settings',
  },
  {
    key: 'security',
    label: 'Security',
    icon: Shield,
    href: '/dashboard/security',
  },
  {
    key: 'help',
    label: 'Help & Support',
    icon: HelpCircle,
    href: '/dashboard/help',
  },
];

export function DashboardHeader({ onMenuToggle }: DashboardHeaderProps) {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = useMemo(
    () => (resolvedTheme === 'dark' ? 'dark' : 'light'),
    [resolvedTheme]
  );

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-success" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-warning" />;
      case 'info':
        return <Info className="h-4 w-4 text-primary" />;
      default:
        return <Bell className="h-4 w-4 text-foreground/50" />;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-divider">
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button */}
          <Button
            isIconOnly
            variant="ghost"
            size="sm"
            className="lg:hidden text-foreground/70 hover:text-foreground hover:bg-foreground/5"
            onPress={onMenuToggle}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-1.5">
          {/* Light & Dark Mode Toggle */}
          <Button
            size="sm"
            isIconOnly
            variant="bordered"
            radius="full"
            onPress={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
          >
            {mounted ? (
              currentTheme === 'dark' ? (
                <Sun size={16} />
              ) : (
                <Moon size={16} />
              )
            ) : (
              <Moon size={16} />
            )}
          </Button>

          {/* Notifications Popover */}
          <Popover
            isOpen={isNotificationsOpen}
            onOpenChange={setIsNotificationsOpen}
            placement="bottom-end"
            showArrow
          >
            <PopoverTrigger>
              <Button size="sm" isIconOnly variant="bordered" radius="full">
                <Bell size={16} />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0">
              <div className="p-4 border-b border-divider">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Notifications</h3>
                  <Button size="sm" variant="light" className="text-primary">
                    Mark all read
                  </Button>
                </div>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.map(notification => (
                  <div
                    key={notification.id}
                    className={`p-4 border-b border-divider/50 hover:bg-foreground/5 transition-colors ${
                      notification.unread ? 'bg-primary/5' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      {getNotificationIcon(notification.type)}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">
                          {notification.title}
                        </p>
                        <p className="text-sm text-foreground/70 mt-1">
                          {notification.message}
                        </p>
                        <p className="text-xs text-foreground/50 mt-2">
                          {notification.time}
                        </p>
                      </div>
                      {notification.unread && (
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-divider">
                <Button variant="light" className="w-full text-primary">
                  View all notifications
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          {/* User Menu Dropdown */}
          <Dropdown
            isOpen={isUserMenuOpen}
            onOpenChange={setIsUserMenuOpen}
            placement="bottom-end"
          >
            <DropdownTrigger>
              <Button size="sm" isIconOnly variant="bordered" radius="full">
                <User size={16} />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="User menu" className="w-64">
              <DropdownSection title="Account" showDivider>
                {userActions.map(action => (
                  <DropdownItem
                    key={action.key}
                    startContent={<action.icon className="h-4 w-4" />}
                    href={action.href}
                    className="text-foreground/80"
                  >
                    {action.label}
                  </DropdownItem>
                ))}
              </DropdownSection>
              <DropdownSection>
                <DropdownItem
                  key="logout"
                  startContent={<LogOut className="h-4 w-4" />}
                  className="text-danger"
                  as={'a'}
                  href="/auth/sign-out"
                >
                  Sign out
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </header>
  );
}
