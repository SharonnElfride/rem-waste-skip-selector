// module.exports = {
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 0.4s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(6deg)" },
          "50%": { transform: "rotate(8deg)" },
        },
      },
    },
  },
};
