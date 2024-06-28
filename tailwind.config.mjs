/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      "gridTemplateColumns": {
        Cardgrid: "repeat(auto-fit, minmax(150px, 1fr))",
        Cardgrid2: "repeat(auto-fit, minmax(200px, 1fr))",
        Cardgrid3: "repeat(5, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [],
};
