import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TypewriterEffect = ({
  words,
  className = "",
  cursorClassName = "",
}: {
  words: string[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const word = words[0];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex <= word.length) {
        setCurrentText(word.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [words]);

  return (
    <div className="inline-flex items-center">
      <span className={className}>{currentText}</span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className={`block rounded-sm w-[4px]  h-4 sm:h-6 xl:h-12 bg-primary ${cursorClassName}`}
      />
    </div>
  );
};