module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  plugins: [
    // ...
  ],
  corePlugins: {
    // ...
    outline: false,
  },
  theme: {
    extend: {
      colors: {
        black: {
          100: "#827382",
          500: "#564D56",
          900: "#221E22",
        },
        violet: {
          100: "#7D66A3",
          300: "#69548C",
          500: "#564573",
          700: "#44355B",
          900: "#302640",
        },
        gold: {
          100: "#F3C77C",
          300: "#EFB857",
          500: "#ECA72C",
          700: "#E09515",
          900: "#BB7D11",
        },
      },
    },
    variants: {},
  },
}
