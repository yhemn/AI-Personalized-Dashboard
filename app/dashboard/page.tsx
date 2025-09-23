'use client';

import AdvancedChart from '@/components/dashboard/AdvancedChart';
import AIInsights from '@/components/dashboard/AIInsights';
import ChartCard from '@/components/dashboard/ChartCard';
import MetricCard from '@/components/dashboard/MetricCard';
import QuickActions from '@/components/dashboard/QuickActions';
import SimpleChart from '@/components/dashboard/SimpleChart';
import { useAuth } from '@/hooks/useAuth';
import { Button, Select, SelectItem } from '@heroui/react';
import {
  Activity,
  Calendar,
  DollarSign,
  Filter,
  TrendingUp,
  Users,
} from 'lucide-react';
import { useState } from 'react';

export default function DashboardPage() {
  const { profile, userAuth } = useAuth();
  const [isLoading] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  if (!userAuth) return null;

  // Mock data - in a real app, this would come from your API
  const metrics = [
    {
      title: 'Total Revenue',
      value: '$124,532',
      change: { value: 12.5, type: 'increase' as const },
      icon: DollarSign,
      description: 'This month',
    },
    {
      title: 'Active Users',
      value: '2,847',
      change: { value: 8.2, type: 'increase' as const },
      icon: Users,
      description: 'Last 30 days',
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      change: { value: 2.1, type: 'increase' as const },
      icon: TrendingUp,
      description: 'This week',
    },
    {
      title: 'Tasks Completed',
      value: '1,429',
      change: { value: 15.3, type: 'increase' as const },
      icon: Activity,
      description: 'Today',
    },
  ];

  const chartData = [
    { label: 'Mon', value: 1200 },
    { label: 'Tue', value: 1900 },
    { label: 'Wed', value: 3000 },
    { label: 'Thu', value: 5000 },
    { label: 'Fri', value: 4500 },
    { label: 'Sat', value: 3200 },
    { label: 'Sun', value: 2800 },
  ];

  const pieData = [
    { label: 'Desktop', value: 45, color: 'hsl(var(--heroui-primary))' },
    { label: 'Mobile', value: 35, color: 'hsl(var(--heroui-secondary))' },
    { label: 'Tablet', value: 20, color: 'hsl(var(--heroui-success))' },
  ];

  // Additional chart data for more variety
  const areaChartData = [
    { name: 'Jan', revenue: 4000, users: 2400, conversion: 2.4 },
    { name: 'Feb', revenue: 3000, users: 1398, conversion: 2.1 },
    { name: 'Mar', revenue: 2000, users: 9800, conversion: 2.8 },
    { name: 'Apr', revenue: 2780, users: 3908, conversion: 3.2 },
    { name: 'May', revenue: 1890, users: 4800, conversion: 2.9 },
    { name: 'Jun', revenue: 2390, users: 3800, conversion: 3.1 },
  ];

  const barChartData = [
    { name: 'Q1', sales: 4000, marketing: 2400, support: 2000 },
    { name: 'Q2', sales: 3000, marketing: 1398, support: 1800 },
    { name: 'Q3', sales: 2000, marketing: 9800, support: 2200 },
    { name: 'Q4', sales: 2780, marketing: 3908, support: 1900 },
  ];

  const aiInsights = [
    {
      id: '1',
      type: 'success' as const,
      title: 'Revenue Growth Trend',
      description:
        'Your revenue has increased by 12.5% this month. This trend is expected to continue based on current user engagement patterns.',
      action: {
        label: 'View Details',
        onClick: () => console.log('View revenue details'),
      },
    },
    {
      id: '2',
      type: 'warning' as const,
      title: 'User Engagement Dip',
      description:
        'Mobile user engagement dropped 3% this week. Consider optimizing your mobile experience.',
      action: {
        label: 'Optimize Mobile',
        onClick: () => console.log('Optimize mobile'),
      },
    },
    {
      id: '3',
      type: 'action' as const,
      title: 'New Feature Opportunity',
      description:
        'Data shows high demand for advanced analytics. Consider implementing the analytics dashboard feature.',
      action: {
        label: 'Plan Feature',
        onClick: () => console.log('Plan feature'),
      },
    },
  ];

  const periodOptions = [
    { key: '7d', label: 'Last 7 days' },
    { key: '30d', label: 'Last 30 days' },
    { key: '90d', label: 'Last 90 days' },
    { key: '1y', label: 'Last year' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-foreground/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Overview</h1>
              <p className="text-foreground/70 mt-1">
                Welcome back, {profile?.full_name || 'User'}! Here&apos;s
                what&apos;s happening with your data.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Select
                size="sm"
                placeholder="Select period"
                selectedKeys={[selectedPeriod]}
                onSelectionChange={keys =>
                  setSelectedPeriod(Array.from(keys)[0] as string)
                }
                className="w-40"
                startContent={<Calendar className="h-4 w-4" />}
              >
                {periodOptions.map(option => (
                  <SelectItem key={option.key}>{option.label}</SelectItem>
                ))}
              </Select>

              <Button
                size="sm"
                variant="bordered"
                startContent={<Filter className="h-4 w-4" />}
              >
                Filters
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} loading={isLoading} />
          ))}
        </div>

        {/* Charts and Insights Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Revenue Trend Chart */}
          <div className="lg:col-span-2">
            <ChartCard
              title="Revenue Trend"
              description="Daily revenue over the selected period"
              icon={TrendingUp}
              loading={isLoading}
            >
              <SimpleChart data={chartData} type="line" height={300} />
            </ChartCard>
          </div>

          {/* Device Usage Pie Chart */}
          <div>
            <ChartCard
              title="Device Usage"
              description="Traffic by device type"
              loading={isLoading}
            >
              <SimpleChart data={pieData} type="pie" height={300} />
            </ChartCard>
          </div>
        </div>

        {/* Additional Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Area Chart - Revenue vs Users */}
          <ChartCard
            title="Revenue & Users Growth"
            description="Monthly comparison of revenue and user growth"
            icon={Activity}
            loading={isLoading}
          >
            <AdvancedChart
              data={areaChartData}
              type="area"
              height={300}
              dataKeys={['revenue', 'users']}
              showLegend={true}
              showGrid={true}
            />
          </ChartCard>

          {/* Bar Chart - Department Performance */}
          <ChartCard
            title="Department Performance"
            description="Quarterly performance by department"
            icon={Users}
            loading={isLoading}
          >
            <AdvancedChart
              data={barChartData}
              type="bar"
              height={300}
              dataKeys={['sales', 'marketing', 'support']}
              showLegend={true}
              showGrid={true}
            />
          </ChartCard>
        </div>

        {/* AI Insights and Quick Actions Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* AI Insights */}
          <AIInsights insights={aiInsights} loading={isLoading} />

          {/* Quick Actions */}
          <QuickActions />
        </div>
      </div>
    </div>
  );
}
