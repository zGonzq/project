import { useEffect, useState } from "react";
import { cn } from "../../utils/cn";

interface Technology {
  name: string;
  icon: string;
}

interface InfiniteMovingCardsProps {
  items: Technology[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  className?: string;
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  className,
}: InfiniteMovingCardsProps) => {
  const [duplicatedItems] = useState([...items, ...items]);

  return (
    <div
      className={cn(
        "relative overflow-hidden w-full",
        className
      )}
    >
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white dark:from-gray-900 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white dark:from-gray-900 to-transparent" />
      
      {/* Scrolling Content */}
      <div
        className={cn(
          "flex gap-4 py-4 w-max",
          direction === "left" ? "animate-scroll" : "animate-scroll-reverse",
          speed === "fast" ? "[--duration:20s]" : speed === "normal" ? "[--duration:30s]" : "[--duration:40s]"
        )}
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[150px] rounded-xl border border-slate-700/30 px-8 py-6 bg-white/5 backdrop-blur-sm hover:bg-primary transition-colors"  
          >
            <div className="flex justify-center text-4xl">
              <img src={item.icon} alt={item.name} className="h-12 w-12" />
            </div>
            <div className="text-center mt-4 text-sm font-medium text-black dark:text-white">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};