/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./pages/*.{js,ts,jsx,tsx}", "./components/*.{js,ts,jsx,tsx}"],
  content: ["./pages/*.{js,ts,jsx,tsx}", "./components/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-header": "url('/public/bg-header-mobile.svg')",
        "desktop-header": "url('/public/bg-header-desktop.svg')",
      },
      colors: {
        headerColor: "hsl(180, 29%, 50%)",
        bodyColor: "hsl(180, 52%, 96%)",
        filterTablets: "hsl(180, 31%, 95%)",
        smallTextColors: "hsl(180, 8%, 52%)",
        featured: "hsl(180, 14%, 20%)",
      },
    },
  },
  plugins: [],
};
