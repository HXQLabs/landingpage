"use client";

import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Dot } from "recharts";
import { motion } from "motion/react";

interface DataPoint {
  name: string;
  value: number;
  users?: number;
}

interface AnimatedLineChartProps {
  data: DataPoint[];
  height?: number;
  color?: string;
  strokeWidth?: number;
  animationDelay?: number;
  showDots?: boolean;
}

export function AnimatedLineChart({ 
  data, 
  height = 200, 
  color = "#3b82f6",
  strokeWidth = 3,
  animationDelay = 0,
  showDots = true
}: AnimatedLineChartProps) {
  const [animatedData, setAnimatedData] = useState<DataPoint[]>(
    data.map(item => ({ ...item, value: 0, users: 0 }))
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedData(data);
    }, animationDelay);

    return () => clearTimeout(timer);
  }, [data, animationDelay]);

  const CustomDot = (props: any) => {
    const { cx, cy } = props;
    return (
      <motion.g
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: animationDelay / 1000 + 0.5, duration: 0.3 }}
      >
        <Dot cx={cx} cy={cy} r={4} fill={color} stroke="#fff" strokeWidth={2} />
      </motion.g>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: animationDelay / 1000, duration: 0.5 }}
      className="w-full"
    >
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={animatedData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-20" />
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            className="text-xs fill-gray-600 dark:fill-gray-400"
          />
          <YAxis hide />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke={color}
            strokeWidth={strokeWidth}
            dot={showDots ? <CustomDot /> : false}
            activeDot={{ r: 6, fill: color }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}