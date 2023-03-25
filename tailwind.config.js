/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        dark: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
        light: "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"
      },
      backgroundImage: {
        "light-gradient": "linear-gradient(145deg, #e2e8ec, #ffffff)",
        "dark": "linear-gradient(#212428, #212428)",
        "light": "linear-gradient(#18181a, #18181a)",
        "box-gradient": "linear-gradient(145deg, #6a67ce, #fc636b)"
      },
      backgroundColor: {
        
      }
    },
  },
  plugins: [],
};
