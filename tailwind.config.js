/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "nx-",
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./theme.config.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

