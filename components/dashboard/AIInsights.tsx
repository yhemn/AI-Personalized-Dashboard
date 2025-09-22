import { Card, CardBody, CardHeader } from '@heroui/react';
import { AlertTriangle, Brain, Lightbulb, TrendingUp } from 'lucide-react';

interface Insight {
  id: string;
  type: 'success' | 'warning' | 'info' | 'action';
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface AIInsightsProps {
  insights: Insight[];
  loading?: boolean;
}

export default function AIInsights({
  insights,
  loading = false,
}: AIInsightsProps) {
  const getInsightIcon = (type: Insight['type']) => {
    switch (type) {
      case 'success':
        return TrendingUp;
      case 'warning':
        return AlertTriangle;
      case 'action':
        return Lightbulb;
      default:
        return Brain;
    }
  };

  const getInsightColor = (type: Insight['type']) => {
    switch (type) {
      case 'success':
        return 'text-success';
      case 'warning':
        return 'text-warning';
      case 'action':
        return 'text-primary';
      default:
        return 'text-foreground';
    }
  };

  const getInsightBgColor = (type: Insight['type']) => {
    switch (type) {
      case 'success':
        return 'bg-success/10';
      case 'warning':
        return 'bg-warning/10';
      case 'action':
        return 'bg-primary/10';
      default:
        return 'bg-foreground/5';
    }
  };

  if (loading) {
    return (
      <Card>
        <CardHeader className="pb-3">
          <div className="animate-pulse">
            <div className="h-6 bg-foreground/10 rounded w-32"></div>
          </div>
        </CardHeader>
        <CardBody className="pt-0">
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-foreground/10 rounded w-full mb-2"></div>
                <div className="h-3 bg-foreground/10 rounded w-3/4"></div>
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
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">AI Insights</h2>
        </div>
      </CardHeader>
      <CardBody className="pt-0">
        <div className="space-y-4">
          {insights.map(insight => {
            const Icon = getInsightIcon(insight.type);
            return (
              <div
                key={insight.id}
                className={`p-4 rounded-lg ${getInsightBgColor(insight.type)} border border-foreground/10`}
              >
                <div className="flex items-start gap-3">
                  <Icon
                    className={`h-5 w-5 mt-0.5 ${getInsightColor(insight.type)}`}
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground mb-1">
                      {insight.title}
                    </h3>
                    <p className="text-sm text-foreground/70 mb-3">
                      {insight.description}
                    </p>
                    {insight.action && (
                      <button
                        onClick={insight.action.onClick}
                        className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        {insight.action.label} →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardBody>
    </Card>
  );
}
