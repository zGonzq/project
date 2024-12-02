/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F91362',
          light: '#FF8E44',
          dark: '#35126A'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scroll': 'scroll var(--duration) linear infinite',
        'scroll-reverse': 'scroll-reverse var(--duration) linear infinite',
        },
        keyframes: {
          'scroll': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(calc(-50%))' }
          },
          'scroll-reverse': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(calc(50%))' }
          },
      }
    },
  },

  plugins: [
    require('@tailwindcss/typography'),

  ],
}