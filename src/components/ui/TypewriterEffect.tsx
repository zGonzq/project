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
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const word = words[wordIndex];
    let currentIndex = isDeleting ? word.length : 0;

    const intervalId = setInterval(() => {
      if (!isDeleting && currentIndex <= word.length) {
        setCurrentText(word.slice(0, currentIndex));
        currentIndex++;
      } else if (isDeleting && currentIndex >= 0) {
        setCurrentText(word.slice(0, currentIndex));
        currentIndex--;
      } else {
        if (!isDeleting) {
          setIsDeleting(true);
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [words, wordIndex, isDeleting]);

  return (
    <div className="inline-flex items-center">
      <span className={`${className} text-gray-900`}>{currentText}</span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className={`block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-primary ${cursorClassName}`}
      />
    </div>
  );
};