import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  useDisclosure,
} from '@heroui/react';
import {
  IconHelpCircle,
  IconLogout,
  IconSettings,
  IconShield,
  IconUser,
} from '@tabler/icons-react';
import Link from 'next/link';

const userActions = [
  {
    key: 'profile',
    label: 'View Profile',
    icon: IconUser,
    href: '/dashboard/profile',
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: IconSettings,
    href: '/dashboard/settings',
  },
  {
    key: 'security',
    label: 'Security',
    icon: IconShield,
    href: '/dashboard/security',
  },
  {
    key: 'help',
    label: 'Help & Support',
    icon: IconHelpCircle,
    href: '/dashboard/help',
  },
];

export default function UserDropdown() {
  const { isOpen, onOpenChange } = useDisclosure();

  return (
    <Dropdown
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="bottom-end"
    >
      <DropdownTrigger>
        <Button size="sm" isIconOnly variant="bordered" radius="full">
          <IconUser size={16} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="User menu" className="w-64">
        <DropdownSection title="Account" showDivider>
          {userActions.map(action => (
            <DropdownItem
              key={action.key}
              startContent={<action.icon size={16} />}
              as={Link}
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
            startContent={<IconLogout size={16} />}
            className="text-danger"
            as="a"
            href="/auth/sign-out"
          >
            Sign out
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
