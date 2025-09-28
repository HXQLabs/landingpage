"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
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
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

interface ChartData {
  month: string;
  desktop: number;
  mobile: number;
}

interface DynamicStrokeMultipleRadarChartProps {
  data?: ChartData[];
  title?: string;
  description?: string;
  trend?: number;
}

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

export function DynamicStrokeMultipleRadarChart({ 
  data,
  title = "Performance Metrics",
  description = "Showing total visitors for the last 6 months",
  trend = 5.2
}: DynamicStrokeMultipleRadarChartProps) {
  const defaultData = [
    { month: "January", desktop: 186, mobile: 92 },
    { month: "February", desktop: 305, mobile: 178 },
    { month: "March", desktop: 237, mobile: 145 },
    { month: "April", desktop: 273, mobile: 203 },
    { month: "May", desktop: 209, mobile: 167 },
    { month: "June", desktop: 298, mobile: 132 },
  ];

  const chartData = data || defaultData;
  const isPositiveTrend = trend > 0;

  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>
          {title}
          <Badge
            variant="outline"
            className={`${
              isPositiveTrend 
                ? "text-green-500 bg-green-500/10" 
                : "text-red-500 bg-red-500/10"
            } border-none ml-2`}
          >
            {isPositiveTrend ? (
              <TrendingUp className="h-4 w-4" />
            ) : (
              <TrendingDown className="h-4 w-4" />
            )}
            <span>{isPositiveTrend ? '+' : ''}{trend}%</span>
          </Badge>
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid strokeDasharray="3 3" />
            <Radar
              stroke="var(--color-desktop)"
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.1}
            />
            <Radar
              stroke="var(--color-mobile)"
              dataKey="mobile"
              fill="var(--color-mobile)"
              fillOpacity={0.1}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
