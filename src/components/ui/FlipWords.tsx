import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const FlipWords = ({
  words,
  className = "",
}: {
  words: string[];
  className?: string;
}) => {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    // Pre-calculate maximum width
    const tempDiv = document.createElement('div');
    tempDiv.style.visibility = 'hidden';
    tempDiv.style.position = 'absolute';
    tempDiv.style.fontSize = window.getComputedStyle(document.body).fontSize;
    tempDiv.style.fontWeight = "700";
    document.body.appendChild(tempDiv);

    const maxWidth = Math.max(...words.map(word => {
      tempDiv.textContent = word;
      return tempDiv.offsetWidth;
    }));

    document.body.removeChild(tempDiv);
    setWidth(maxWidth);

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words]);

  return (
    <div style={{ width: `${width}px` }} className="inline-flex items-center relative h-[1.2em]">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`absolute left-0 ${className}`}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};