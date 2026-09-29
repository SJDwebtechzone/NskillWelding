/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        niw: {
          orange: '#0066FF',
          'orange-dark': '#0B2545',
          navy: '#0B2545',
          blue: '#0066FF',
          'blue-light': '#EBF3FE',
          purple: '#9333EA',
          ink: '#0F172A',
          coal: '#1E293B',
          steel: '#334155',
          slate: '#64748B',
          mist: '#F8FAFC',
          line: '#E2E8F0',
        },
      },
      fontFamily: {
        display: ['"Chakra Petch"', '"Rajdhani"', '"Outfit"', 'sans-serif'],
        tech: ['"Chakra Petch"', '"Rajdhani"', 'sans-serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
      maxWidth: { site: '1200px' },
      screens: { wide: '1480px' },
      boxShadow: { card: '0 1px 2px rgba(14,17,22,.06), 0 4px 14px rgba(14,17,22,.05)' },
    },
  },
  plugins: [],
};
