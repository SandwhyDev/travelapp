module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        nunito: ["nunito", "sans-serif"],
      },
      colors: {
        white: "#ffffff",
        second_white: "#F3F5F6",
        black: "#191C32",
        green: "#1BBA85",
        gray: "#B3B2B2",
        second_gray: "#F4F4F5",
      },
    },
  },
  plugins: [],
};
