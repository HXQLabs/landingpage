"use client";

import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import NumberFlow from "@number-flow/react";

interface MetricCardProps {
  title: string;
  value: number;
  subtitle?: string;
  icon?: LucideIcon;
  color?: string;
  animationDelay?: number;
  format?: "number" | "percentage" | "currency";
  prefix?: string;
  suffix?: string;
  trend?: {
    direction: "up" | "down";
    value: number;
  };
}

export function MetricCard({
  title,
  value,
  subtitle,
  icon: Icon,
  color = "blue",
  animationDelay = 0,
  format = "number",
  prefix,
  suffix,
  trend
}: MetricCardProps) {
  const colorClasses = {
    blue: "from-blue-500 to-blue-600 shadow-blue-500/20",
    green: "from-green-500 to-green-600 shadow-green-500/20",
    purple: "from-purple-500 to-purple-600 shadow-purple-500/20",
    orange: "from-orange-500 to-orange-600 shadow-orange-500/20",
    red: "from-red-500 to-red-600 shadow-red-500/20",
  };

  const resolvedPrefix = prefix ?? (format === "currency" ? "$" : "");
  const resolvedSuffix = suffix ?? (format === "percentage" ? "%" : "");

  const formatValue = (val: number) => {
    switch (format) {
      case "percentage":
        return `${val}%`;
      case "currency":
        return `$${val.toLocaleString()}`;
      default:
        return val.toLocaleString();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay: animationDelay / 1000, 
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }}
      className="relative group"
    >
      <div className="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {title}
            </h3>
            {Icon && (
              <div className={`p-2 rounded-lg bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} text-white`}>
                <Icon className="w-4 h-4" />
              </div>
            )}
          </div>
          
          <div className="space-y-1">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {resolvedPrefix}
              <NumberFlow 
                value={value} 
                format={{ notation: format === "currency" ? "compact" : "standard" }}
                transformTiming={{
                  duration: 1000,
                  easing: "ease-out",
                }}
              />
              {resolvedSuffix}
            </div>
            
            {subtitle && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {subtitle}
              </p>
            )}
            
            {trend && (
              <div className={`flex items-center text-xs ${
                trend.direction === "up" 
                  ? "text-green-600 dark:text-green-400" 
                  : "text-red-600 dark:text-red-400"
              }`}>
                <span className="mr-1">
                  {trend.direction === "up" ? "↗" : "↘"}
                </span>
                {trend.value}% vs last period
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}