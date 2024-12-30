import { defineConfig } from "@pandacss/dev"
import { defaultPreset } from "./preset"

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: ["@pandacss/preset-panda", defaultPreset],
  // Where to look for your css declarations
  include: ["./src/components/*.{js,jsx,ts,tsx}", "./src/app/**/*.{js,jsx,ts,tsx}"],
  jsxFramework: "react",
  // Files to exclude
  exclude: [],
  theme: {
    extend: {
      tokens: {
        fonts: {
          "pretendard-gov": { value: "var(--font-pretendard)" },
        },
      },
    },
  },
  globalVars: {
    "--font-pretendard":
      "Pretendard GOV Variable, Pretendard GOV, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif",
  },

  // The output directory for your css system
  outdir: "styled-system",
})
