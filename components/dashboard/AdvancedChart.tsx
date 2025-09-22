'use client';

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface ChartData {
  name: string;
  [key: string]: string | number;
}

interface AdvancedChartProps {
  data: ChartData[];
  type: 'area' | 'bar' | 'line' | 'pie' | 'composed';
  height?: number;
  className?: string;
  dataKeys?: string[];
  colors?: string[];
  showLegend?: boolean;
  showGrid?: boolean;
}

export default function AdvancedChart({
  data,
  type,
  height = 300,
  className = '',
  dataKeys = ['value'],
  colors = [
    'hsl(var(--heroui-primary))',
    'hsl(var(--heroui-secondary))',
    'hsl(var(--heroui-success))',
    'hsl(var(--heroui-warning))',
    'hsl(var(--heroui-danger))',
  ],
  showLegend = true,
  showGrid = true,
}: AdvancedChartProps) {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-foreground text-background text-xs px-3 py-2 rounded-lg shadow-lg border border-foreground/10">
          <p className="font-medium mb-1">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              {entry.dataKey}: {entry.value.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderAreaChart = () => (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        {showGrid && (
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="hsl(var(--heroui-foreground) / 0.1)"
          />
        )}
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
        {showLegend && <Legend />}
        {dataKeys.map((key, index) => (
          <Area
            key={key}
            type="monotone"
            dataKey={key}
            stackId="1"
            stroke={colors[index % colors.length]}
            fill={colors[index % colors.length]}
            fillOpacity={0.6}
            strokeWidth={2}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );

  const renderBarChart = () => (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        {showGrid && (
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="hsl(var(--heroui-foreground) / 0.1)"
          />
        )}
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
        {showLegend && <Legend />}
        {dataKeys.map((key, index) => (
          <Bar
            key={key}
            dataKey={key}
            fill={colors[index % colors.length]}
            radius={[4, 4, 0, 0]}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );

  const renderLineChart = () => (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        {showGrid && (
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="hsl(var(--heroui-foreground) / 0.1)"
          />
        )}
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
        {showLegend && <Legend />}
        {dataKeys.map((key, index) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={colors[index % colors.length]}
            strokeWidth={2}
            dot={{ fill: colors[index % colors.length], strokeWidth: 2, r: 4 }}
            activeDot={{
              r: 6,
              stroke: colors[index % colors.length],
              strokeWidth: 2,
            }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );

  const renderPieChart = () => (
    <div className="flex items-center justify-center h-full">
      <div className="w-3/5">
        <ResponsiveContainer width="100%" height={height}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey={dataKeys[0]}
            >
              {data.map((entry, index) => (
                <Pie
                  key={index}
                  data={[entry]}
                  dataKey={dataKeys[0]}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            {showLegend && <Legend />}
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="w-2/5 ml-4 space-y-2">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div
              className="w-3 h-3 rounded"
              style={{ backgroundColor: colors[index % colors.length] }}
            />
            <span className="text-foreground/70">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderComposedChart = () => (
    <ResponsiveContainer width="100%" height={height}>
      <ComposedChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        {showGrid && (
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="hsl(var(--heroui-foreground) / 0.1)"
          />
        )}
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
        {showLegend && <Legend />}
        {dataKeys.map((key, index) => {
          if (index === 0) {
            return (
              <Bar
                key={key}
                dataKey={key}
                fill={colors[index % colors.length]}
                radius={[4, 4, 0, 0]}
              />
            );
          } else {
            return (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={colors[index % colors.length]}
                strokeWidth={2}
                dot={{
                  fill: colors[index % colors.length],
                  strokeWidth: 2,
                  r: 4,
                }}
              />
            );
          }
        })}
      </ComposedChart>
    </ResponsiveContainer>
  );

  return (
    <div className={`w-full ${className}`}>
      {type === 'area' && renderAreaChart()}
      {type === 'bar' && renderBarChart()}
      {type === 'line' && renderLineChart()}
      {type === 'pie' && renderPieChart()}
      {type === 'composed' && renderComposedChart()}
    </div>
  );
}
