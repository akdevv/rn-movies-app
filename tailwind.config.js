/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "background-primary": "#0D0D0F",
        "surface-dark": "#1A1A1C",
        "surface-medium": "#252529",
        "surface-light": "#2D2D30",
        "accent-primary": "#A4E635",
        "accent-medium": "#8FD135",
        "accent-dark": "#7BC142",
        "primary-text": "#E8E8E8",
        "secondary-text": "#A0A0A0",
        "muted-text": "#8A8A8A",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        "inter": ["Inter", "sans-serif"],
        "plus-jakarta": ["Plus Jakarta Sans", "sans-serif"],
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
