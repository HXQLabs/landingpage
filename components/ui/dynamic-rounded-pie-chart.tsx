"use client";

import { LabelList, Pie, PieChart } from "recharts";

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
  browser: string;
  visitors: number;
  fill: string;
}

interface DynamicRoundedPieChartProps {
  data?: ChartData[];
  title?: string;
  description?: string;
  trend?: number;
}

const chartConfig = {
  visitors: {
    label: "Downloads",
  },
  chrome: {
    label: "NPM",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Yarn",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "PNPM",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Bun",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export function DynamicRoundedPieChart({ 
  data,
  title = "Package Manager Distribution",
  description = "January - June 2024",
  trend = 5.2
}: DynamicRoundedPieChartProps) {
  const defaultData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 90, fill: "var(--color-other)" },
  ];

  const chartData = data || defaultData;
  const isPositiveTrend = trend > 0;

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
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
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="visitors" hideLabel />}
            />
            <Pie
              data={chartData}
              innerRadius={30}
              dataKey="visitors"
              radius={10}
              cornerRadius={8}
              paddingAngle={4}
            >
              <LabelList
                dataKey="visitors"
                stroke="none"
                fontSize={12}
                fontWeight={500}
                fill="currentColor"
                formatter={(value: number) => {
                  if (value >= 1000000) {
                    return (value / 1000000).toFixed(1) + "M";
                  } else if (value >= 1000) {
                    return (value / 1000).toFixed(0) + "K";
                  }
                  return value.toString();
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
