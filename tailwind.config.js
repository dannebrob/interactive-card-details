/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'active-gradient': 'hsl(249, 99%, 64%) to hsl(278, 94%, 30%)',
        red: ' hsl(0, 100%, 66%)',
        white: 'hsl(0, 0%, 100%)',
        'light-grayish-violet': 'hsl(270, 3%, 87%)',
        'dark-grayish-violet': 'hsl(279, 6%, 55%)',
        'very-dark-violet': ' hsl(278, 68%, 11%)',
      },
    },
    backgroundImage: {
      'mobile-bg': 'url("./assets/images/bg-main-mobile.png")',
      'desktop-bg': 'url("./assets/images/bg-main-desktop.png")',
    },
  },
  plugins: [],
};