"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";

interface ChartData {
  month: string;
  desktop: number;
  mobile: number;
}

interface DynamicDottedMultiLineChartProps {
  data?: ChartData[];
  title?: string;
  description?: string;
  className?: string;
}

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-2)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export function DynamicDottedMultiLineChart({ 
  data,
  title = "Downloads Trend",
  description = "January - June 2024",
  className,
}: DynamicDottedMultiLineChartProps) {
  const defaultData = [
    { month: "January", desktop: 186, mobile: 87 },
    { month: "February", desktop: 305, mobile: 163 },
    { month: "March", desktop: 237, mobile: 142 },
    { month: "April", desktop: 73, mobile: 195 },
    { month: "May", desktop: 209, mobile: 118 },
    { month: "June", desktop: 214, mobile: 231 },
  ];

  const chartData = data || defaultData;

  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="linear"
              stroke="var(--color-desktop)"
              dot={false}
              strokeDasharray="4 4"
            />
            <Line dataKey="mobile" type="linear" stroke="var(--color-mobile)" />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
