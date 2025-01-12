import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ZoomProps {
  children: React.ReactNode;
  delay?: number;
}

export default function ZoomSection({ children, delay = 0 }: ZoomProps) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"] 
  });

  const scale = useTransform(scrollYProgress, 
    [0, 0.5, 1], 
    [0.95, 0.97, 1],
    {
      clamp: false
    }
  );
  
  const opacity = useTransform(scrollYProgress,
    [0, 0.3, 1],
    [0.8, 0.9, 1],
    {
      clamp: false
    }
  );

  return (
    <div ref={ref} className="relative w-full overflow-hidden">
      <motion.div
        style={{ scale, opacity }}
        initial={{ scale: 0.95, opacity: 0.8 }}
        transition={{ 
          type: "spring",
          stiffness: 50, 
          damping: 20, 
          duration: 0.8,
          delay
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}