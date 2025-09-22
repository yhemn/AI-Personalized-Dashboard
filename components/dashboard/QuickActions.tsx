import { Button, Card, CardBody, CardHeader } from '@heroui/react';
import { LucideIcon } from 'lucide-react';

interface QuickAction {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'bordered';
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger';
}

interface QuickActionsProps {
  actions: QuickAction[];
  loading?: boolean;
}

export default function QuickActions({
  actions,
  loading = false,
}: QuickActionsProps) {
  if (loading) {
    return (
      <Card>
        <CardHeader className="pb-3">
          <div className="animate-pulse">
            <div className="h-6 bg-foreground/10 rounded w-32"></div>
          </div>
        </CardHeader>
        <CardBody className="pt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="animate-pulse">
                <div className="h-16 bg-foreground/10 rounded"></div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <h2 className="text-lg font-semibold text-foreground">Quick Actions</h2>
      </CardHeader>
      <CardBody className="pt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {actions.map(action => {
            const Icon = action.icon;
            return (
              <Button
                key={action.id}
                variant={action.variant || 'bordered'}
                color={action.color || 'default'}
                className="h-16 p-4 justify-start hover:scale-105 transition-all duration-200"
                onClick={action.onClick}
              >
                <div className="flex items-center gap-3 w-full">
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  <div className="text-left flex-1 min-w-0">
                    <div className="font-medium text-sm truncate">
                      {action.label}
                    </div>
                    <div className="text-xs opacity-70 truncate">
                      {action.description}
                    </div>
                  </div>
                </div>
              </Button>
            );
          })}
        </div>
      </CardBody>
    </Card>
  );
}
