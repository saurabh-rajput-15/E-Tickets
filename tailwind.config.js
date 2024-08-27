/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        slideRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        'slide-left': 'slideLeft 40s linear infinite',
        'slide-right': 'slideRight 40s linear infinite'
      }
    },
  },
  plugins: [],
};
