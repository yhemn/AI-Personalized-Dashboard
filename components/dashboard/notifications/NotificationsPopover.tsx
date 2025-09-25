'use client';

import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from '@heroui/react';

import {
  IconAlertCircle,
  IconBell,
  IconCircleCheck,
  IconInfoCircle,
} from '@tabler/icons-react';

const mockNotifications = [
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

const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'success':
      return <IconCircleCheck className="h-4 w-4 text-success" />;
    case 'warning':
      return <IconAlertCircle className="h-4 w-4 text-warning" />;
    case 'info':
      return <IconInfoCircle className="h-4 w-4 text-primary" />;
    default:
      return <IconBell className="h-4 w-4 text-foreground/50" />;
  }
};

export default function NotificationsPopover() {
  const { isOpen, onOpenChange } = useDisclosure();
  return (
    <Popover
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="bottom-end"
      showArrow
    >
      <PopoverTrigger>
        <Button size="sm" isIconOnly variant="bordered" radius="full">
          <IconBell size={16} />
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
          {mockNotifications.map(notification => (
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
  );
}
