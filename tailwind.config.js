module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    // Use *.tsx if using TypeScript
    "./pages/**/*.js",
    "./components/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Maragsa"],
        body: ["Poppins"],
      },
    },
  },
  variants: {
    borderWidth: ["hover"],
  },
  plugins: [],
};
