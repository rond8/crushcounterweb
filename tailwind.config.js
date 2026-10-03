/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'heart-purple': '#a855f7',
        'heart-red': '#ef4444',
        'heart-pink': '#ec4899',
        'midnight': '#0f172a',
        'midnight-surface': '#1e293b',
        'midnight-border': '#334155',
        'ink': '#f8fafc',
        'muted': '#94a3b8',
      },
    },
  },
  plugins: [],
}
