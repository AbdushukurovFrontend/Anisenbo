export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "16px", // 2rem (default)
          sm: "16px", // 2rem (for small screens)
          md: "24px", // 3rem (for medium screens)
          lg: "32px", // 4rem (for large screens)
          xl: "40px", // 5rem (for extra large screens)
          "2xl": "40px", // 5rem (for 2xl screens)
        },
      },
    },
  },
  plugins: [],
};
