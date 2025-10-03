"use client";

import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts";
import { motion } from "motion/react";

interface DataPoint {
  name: string;
  value: number;
  color: string;
}

interface AnimatedBarChartProps {
  data: DataPoint[];
  height?: number;
  showGrid?: boolean;
  animationDelay?: number;
}

export function AnimatedBarChart({ 
  data, 
  height = 200, 
  showGrid = true,
  animationDelay = 0 
}: AnimatedBarChartProps) {
  const [animatedData, setAnimatedData] = useState<DataPoint[]>(
    data.map(item => ({ ...item, value: 0 }))
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedData(data);
    }, animationDelay);

    return () => clearTimeout(timer);
  }, [data, animationDelay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: animationDelay / 1000, duration: 0.5 }}
      className="w-full"
    >
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={animatedData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
          {showGrid && (
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          )}
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            className="text-xs fill-gray-600 dark:fill-gray-400"
          />
          <YAxis hide />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {animatedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}