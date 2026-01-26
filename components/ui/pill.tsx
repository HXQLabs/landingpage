import React from "react";

// Reusable Pill Component
interface PillProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "primary";
}

const Pill = ({ children, className = "", variant = "default" }: PillProps) => {
  const baseClasses =
    "w-fit relative mx-auto flex gap-2 items-center justify-center font-medium border dark:[background:radial-gradient(125%_125%_at_0%_80%,#000_40%,#3346ee_100%)] [background:radial-gradient(125%_125%_at_0%_80%,#ffffff_40%,#c2c8ff_100%)] dark:border-[#1b1b1b] border-gray-200 p-1.5 px-3 rounded-full overflow-hidden text-sm";
  const variantClasses = {
    default: "",
    primary: "",
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      <span className="relative flex gap-1.5 items-center justify-center">
        {children}
      </span>
    </div>
  );
};

export default Pill;
