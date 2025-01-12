import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqItemProps {
  question: string;
  answer: string;
  id: number;
  isOpen: boolean;
  onToggle: (id: number) => void;
}

export function FaqItem({ question, answer, id, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="border dark:border-gray-800 rounded-lg overflow-hidden">
      <button
        onClick={() => onToggle(id)}
        className="flex justify-between items-center w-full p-4 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <span className="font-medium">{question}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-4 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}