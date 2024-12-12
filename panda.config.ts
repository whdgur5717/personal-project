import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: ["@pandacss/preset-base"],
  // Where to look for your css declarations
  include: ["./src/components/*.{js,jsx,ts,tsx}", "./src/app/**/*.{js,jsx,ts,tsx}"],
  conditions: {
    dark: ".dark &",
    light: ":root &, .light &",
  },
  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: "styled-system",
})
