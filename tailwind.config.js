/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
         screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1200px',
            '2xl': '1366px',
        },
    },
  },
  plugins: [],
};
