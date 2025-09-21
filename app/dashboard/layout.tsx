'use client';

import { DashboardHeader } from '@/components/layout/DashboardHeader';
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';
import { useState } from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="h-screen bg-background">
      <DashboardHeader onMenuToggle={toggleMobileMenu} />
      <div className="relative w-full h-full flex flex-row">
        <DashboardSidebar isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
        <main
          id="main-content"
          className="relative mt-16 h-[calc(100%-64px)] w-full overflow-y-auto"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
