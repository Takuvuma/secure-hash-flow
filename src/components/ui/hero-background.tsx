import * as React from "react";
import { cn } from "@/lib/utils";

interface HeroBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const HeroBackground = ({ children, className }: HeroBackgroundProps) => {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-background opacity-20" />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating circles */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 floating" />
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-accent/10 floating-delayed" />
        <div className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full bg-primary/15 floating" />
        
        {/* Geometric lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          
          {/* Animated lines */}
          <line 
            x1="0" y1="30%" x2="100%" y2="20%" 
            stroke="url(#lineGradient)" 
            strokeWidth="1"
            className="animate-pulse-glow"
          />
          <line 
            x1="20%" y1="0" x2="80%" y2="100%" 
            stroke="url(#lineGradient)" 
            strokeWidth="1"
            className="animate-pulse-glow"
            style={{ animationDelay: "1s" }}
          />
          <line 
            x1="100%" y1="70%" x2="0%" y2="80%" 
            stroke="url(#lineGradient)" 
            strokeWidth="1"
            className="animate-pulse-glow"
            style={{ animationDelay: "2s" }}
          />
        </svg>

        {/* Hexagon patterns */}
        <div className="absolute top-1/4 right-1/3 opacity-20">
          <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
            <polygon 
              points="30,5 50,17.5 50,42.5 30,55 10,42.5 10,17.5" 
              fill="none" 
              stroke="hsl(var(--primary))" 
              strokeWidth="1"
              className="floating"
            />
          </svg>
        </div>
        
        <div className="absolute bottom-1/4 left-1/3 opacity-15">
          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <polygon 
              points="20,3 33,11 33,29 20,37 7,29 7,11" 
              fill="none" 
              stroke="hsl(var(--accent))" 
              strokeWidth="1"
              className="floating-delayed"
            />
          </svg>
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export { HeroBackground };