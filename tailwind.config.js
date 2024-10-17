module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        console: ['"Courier New"', 'monospace'],
      },
      colors: {
        valentine: {
          light: '#FF8FAB',
          DEFAULT: '#FF0066',
          dark: '#C70039',
        },
      },
      animation: {
        blink: 'blink 1.5s step-start infinite',
        float: 'float 3s ease-in-out infinite',
        pulse: 'pulse 1.5s infinite',
        glow: 'glow 2s infinite',
        fadeIn: 'fadeIn 2s ease-out forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px #FF0066' },
          '50%': { boxShadow: '0 0 50px #FF0066' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
