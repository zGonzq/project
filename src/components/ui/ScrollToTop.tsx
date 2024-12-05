import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <motion.div
      className={`fixed bottom-4 right-4 z-50 ${isVisible ? 'block' : 'hidden'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={scrollToTop}
        className="p-2 size-10 items-center rounded-full bg-primary text-white hover:bg-primary-light hover:dark:bg-primary-dark transition-all duration-300"
      >
        ↑
      </button>
    </motion.div>
  );
};

export default ScrollToTop;