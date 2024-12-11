import { defineConfig } from "@pandacss/dev"
import { blue } from "./blue"
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
  globalCss: {
    html: {
      colorPalette: blue.name,
    },
    body: {
      _dark: {
        colorScheme: "dark",
      },
    },
  },
  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: { [blue.name]: blue.tokens },
      },
      semanticTokens: {
        colors: {
          primary: { ...blue.tokens },
          secondary: {},
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
})
