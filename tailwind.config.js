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
    extend: {},
    variants: {},
  },
}
