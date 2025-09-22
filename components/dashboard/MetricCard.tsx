import { Card, CardBody } from '@heroui/react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    type: 'increase' | 'decrease' | 'neutral';
  };
  icon: LucideIcon;
  description?: string;
  loading?: boolean;
}

export default function MetricCard({
  title,
  value,
  change,
  icon: Icon,
  description,
  loading = false,
}: MetricCardProps) {
  if (loading) {
    return (
      <Card className="p-6">
        <CardBody className="p-0">
          <div className="animate-pulse">
            <div className="flex items-center justify-between mb-4">
              <div className="h-4 bg-foreground/10 rounded w-24"></div>
              <div className="h-8 w-8 bg-foreground/10 rounded"></div>
            </div>
            <div className="h-8 bg-foreground/10 rounded w-20 mb-2"></div>
            <div className="h-3 bg-foreground/10 rounded w-32"></div>
          </div>
        </CardBody>
      </Card>
    );
  }

  const getChangeColor = () => {
    if (!change) return 'text-foreground/60';
    switch (change.type) {
      case 'increase':
        return 'text-success';
      case 'decrease':
        return 'text-danger';
      default:
        return 'text-foreground/60';
    }
  };

  const getChangeIcon = () => {
    if (!change) return null;
    switch (change.type) {
      case 'increase':
        return '↗';
      case 'decrease':
        return '↘';
      default:
        return '→';
    }
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300">
      <CardBody className="p-0">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-foreground/70">{title}</h3>
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon className="h-5 w-5 text-primary" />
          </div>
        </div>

        <div className="mb-2">
          <span className="text-2xl font-bold text-foreground">
            {typeof value === 'number' ? value.toLocaleString() : value}
          </span>
        </div>

        {change && (
          <div className="flex items-center gap-1">
            <span className={`text-sm font-medium ${getChangeColor()}`}>
              {getChangeIcon()} {Math.abs(change.value)}%
            </span>
            <span className="text-xs text-foreground/60">vs last period</span>
          </div>
        )}

        {description && (
          <p className="text-xs text-foreground/60 mt-2">{description}</p>
        )}
      </CardBody>
    </Card>
  );
}
