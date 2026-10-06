import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function BentoCard({ children, className, delay = 0 }: BentoCardProps) {
  return (
    <div 
      className={cn(
        "glass-panel glass-panel-hover rounded-3xl overflow-hidden relative group animate-fade-in-up opacity-0",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Subtle background glow effect */}
      <div className="absolute -inset-px bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl z-0 pointer-events-none" />
      
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
}
