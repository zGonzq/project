import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "../ThemeToggle";
import { Logo } from "./Logo";
import { FlipWords } from "./FlipWords";

export const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    {
      name: "Inicio",
      link: "/",
    },
    {
      name: "Proyectos",
      link: "/projects",
    },
    {
      name: "Sobre mí",
      link: "/about",
    },
  ];

  return (
    <nav className="fixed top-4 inset-x-4 max-w-2xl mx-auto z-50">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative flex items-center justify-between px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-md backdrop-blur-md"
      >
        {/* Logo and Brand */}
        <a href="/" className="flex items-center gap-2">
          <Logo className="w-8 h-8" />
            <FlipWords words={["Gonzalo Leal", "Web developer", "Graphic designer"]} className="text-md font-semibold" />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <span className="sr-only">Open menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </motion.div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg sm:hidden"
          >
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="px-4 py-2">
                <ThemeToggle />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};