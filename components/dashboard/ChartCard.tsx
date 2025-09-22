import { Card, CardBody, CardHeader } from '@heroui/react';
import { LucideIcon } from 'lucide-react';

interface ChartCardProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  loading?: boolean;
  className?: string;
}

export default function ChartCard({
  title,
  description,
  icon: Icon,
  children,
  loading = false,
  className = '',
}: ChartCardProps) {
  if (loading) {
    return (
      <Card className={className}>
        <CardHeader className="pb-3">
          <div className="animate-pulse">
            <div className="h-6 bg-foreground/10 rounded w-40"></div>
            {description && (
              <div className="h-4 bg-foreground/10 rounded w-64 mt-2"></div>
            )}
          </div>
        </CardHeader>
        <CardBody className="pt-0">
          <div className="animate-pulse">
            <div className="h-64 bg-foreground/10 rounded"></div>
          </div>
        </CardBody>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="h-5 w-5 text-primary" />}
          <h2 className="text-lg font-semibold text-foreground">{title}</h2>
        </div>
        {description && (
          <p className="text-sm text-foreground/70 mt-1">{description}</p>
        )}
      </CardHeader>
      <CardBody className="pt-0">{children}</CardBody>
    </Card>
  );
}
