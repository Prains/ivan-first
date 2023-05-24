/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      text: "Cera Pro, sans-serif",
    },
    extend: {
      backgroundImage: {
        "bgAuth-mobile": "url('../images/Login/bgAuth.svg')",
        "bgAuth-desktop": "url('../images/Login/bgAuthDesktop.png')",
      },
    },
  },
  plugins: [],
};
