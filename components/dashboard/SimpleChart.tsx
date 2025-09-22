'use client';

import {
  Bar,
  BarChart,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface DataPoint {
  label: string;
  value: number;
  color?: string;
}

interface SimpleChartProps {
  data: DataPoint[];
  type: 'bar' | 'line' | 'pie';
  height?: number;
  className?: string;
}

export default function SimpleChart({
  data,
  type,
  height = 200,
  className = '',
}: SimpleChartProps) {
  const colors = [
    'hsl(var(--heroui-primary))',
    'hsl(var(--heroui-secondary))',
    'hsl(var(--heroui-success))',
    'hsl(var(--heroui-warning))',
    'hsl(var(--heroui-danger))',
  ];

  // Transform data for Recharts
  const chartData = data.map((point, index) => ({
    name: point.label,
    value: point.value,
    fill: point.color || colors[index % colors.length],
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-foreground text-background text-xs px-2 py-1 rounded shadow-lg">
          <p className="font-medium">{label}</p>
          <p>{payload[0].value.toLocaleString()}</p>
        </div>
      );
    }
    return null;
  };

  const renderBarChart = () => (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart
        data={chartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: 'hsl(var(--heroui-foreground) / 0.7)' }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: 'hsl(var(--heroui-foreground) / 0.7)' }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="value"
          radius={[4, 4, 0, 0]}
          className="hover:opacity-80 transition-opacity"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );

  const renderLineChart = () => (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart
        data={chartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: 'hsl(var(--heroui-foreground) / 0.7)' }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: 'hsl(var(--heroui-foreground) / 0.7)' }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="value"
          stroke={colors[0]}
          strokeWidth={2}
          dot={{ fill: colors[0], strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6, stroke: colors[0], strokeWidth: 2 }}
          className="hover:opacity-80 transition-opacity"
        />
      </LineChart>
    </ResponsiveContainer>
  );

  const renderPieChart = () => (
    <div className="flex items-center justify-center h-full">
      <div className="w-3/5">
        <ResponsiveContainer width="100%" height={height}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="w-2/5 ml-4 space-y-2">
        {chartData.map((entry, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div
              className="w-3 h-3 rounded"
              style={{ backgroundColor: entry.fill }}
            />
            <span className="text-foreground/70">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`w-full ${className}`}>
      {type === 'bar' && renderBarChart()}
      {type === 'line' && renderLineChart()}
      {type === 'pie' && renderPieChart()}
    </div>
  );
}
