"use client";

import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { motion } from "motion/react";

interface DataPoint {
  name: string;
  value: number;
  color: string;
  [key: string]: any;
}

interface AnimatedPieChartProps {
  data: DataPoint[];
  height?: number;
  innerRadius?: number;
  outerRadius?: number;
  animationDelay?: number;
}

export function AnimatedPieChart({ 
  data, 
  height = 200, 
  innerRadius = 40,
  outerRadius = 80,
  animationDelay = 0 
}: AnimatedPieChartProps) {
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
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: animationDelay / 1000, duration: 0.6 }}
      className="w-full flex items-center justify-center"
    >
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={animatedData}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            paddingAngle={2}
            dataKey="value"
          >
            {animatedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
}