import { css, cx } from "@styled-system/css"
import * as React from "react"

const inputStyle = css.raw({
  display: "flex",
  h: "9",
  w: "full",
  rounded: "md",
  border: "1px solid token(colors.input)",
  bg: "transparent",
  px: "3",
  py: "1",
  fontSize: { base: "md", md: "sm" },
  shadow: "sm",
  transition: "colors",

  // file 선택자
  "& file": {
    border: "none",
    bg: "transparent",
    fontSize: "sm",
    fontWeight: "medium",
    color: "foreground",
  },

  // placeholder
  _placeholder: {
    color: "muted.foreground",
  },

  // focus-visible
  _focusVisible: {
    outline: "none",
    ring: "1px",
    ringColor: "ring",
  },

  // disabled
  _disabled: {
    cursor: "not-allowed",
    opacity: "50",
  },
})

const Input = ({ className, type, ref, ...props }: React.ComponentProps<"input">) => {
  return (
    <input
      type={type}
      className={cx(css(inputStyle), className)}
      ref={ref}
      {...props}
    />
  )
}

export { Input }
