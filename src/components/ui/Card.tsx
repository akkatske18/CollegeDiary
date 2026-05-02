import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  const hoverClasses = hover
    ? "hover:-translate-y-1 hover:shadow-cloud-hover"
    : "";

  return (
    <div
      className={`bg-white/90 rounded-2xl shadow-cloud border border-sky-100/60 backdrop-blur-sm transition-all duration-300 ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
}
