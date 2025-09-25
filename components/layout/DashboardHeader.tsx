'use client';

import { Button } from '@heroui/react';
import { Menu } from 'lucide-react';
import UserDropdown from '../auth/UserDropdown';
import NotificationsPopover from '../dashboard/notifications/NotificationsPopover';
import ThemeToggler from '../shared/ThemeToggler';

interface DashboardHeaderProps {
  onMenuToggle?: () => void;
  isMobileMenuOpen?: boolean;
}

export function DashboardHeader({ onMenuToggle }: DashboardHeaderProps) {
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
          <ThemeToggler />

          {/* Notifications Popover */}
          <NotificationsPopover />

          {/* User Menu Dropdown */}
          <UserDropdown />
        </div>
      </div>
    </header>
  );
}
