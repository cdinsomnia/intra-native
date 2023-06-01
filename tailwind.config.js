/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}",
  "./screens/**/*.{js,jsx,ts,tsx}",
  "./components/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      main: [
        'FuturaPT, Arial, sans-serif'
      ],
      main_medium: [
        'FuturaPTMedium, Arial, sans-serif'
      ],
      main_semibold: [
        'FuturaPTSemiBold, Arial, sans-serif'
      ],
    },
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-180px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 1.0s ease-out'
      }
    },
  },
  plugins: [],
}
