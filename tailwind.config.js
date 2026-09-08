/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        onyx: '#0E0E10',
        bone: '#EDE6D6',
        brass: '#B9945C',
        graphite: '#3A3A3D',
        ash: '#6E6E72',
        hairline: '#2A2A2C',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['"General Sans"', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.03em',
        wider: '0.18em',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
