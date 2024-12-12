import { defineConfig } from "@pandacss/dev"
import { preset } from "@jongh/panda-preset"

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: ["@pandacss/preset-panda", preset()],
  // Where to look for your css declarations
  include: ["./src/components/*.{js,jsx,ts,tsx}", "./src/app/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: "styled-system",
})
