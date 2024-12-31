import { defineSafe } from "@/utils/defineSafe"

export const tabsRecipe = defineSafe.slotRecipe({
  className: "tabs",
  description: "Styles for the Tabs component",
  slots: ["root", "list", "trigger", "content"],
  base: {
    list: {
      display: "inline-flex",
      h: "10",
      alignItems: "center",
      justifyContent: "center",
      rounded: "md",
      bg: "muted",
      p: "1",
      color: "muted.foreground",
    },
    trigger: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      whiteSpace: "nowrap",
      rounded: "sm",
      px: "3",
      py: "1.5",
      textStyle: "sm",
      fontWeight: "medium",
      transition: "all",
      cursor: "pointer",
      ringColor: "background",

      _focusVisible: {
        outlineWidth: "2px",
        outlineOffset: "2",
        ringWidth: "2",
        ringColor: "ring",
        offset: "2",
      },

      _disabled: {
        pointerEvents: "none",
        opacity: "50%",
      },

      "&[data-state=active]": {
        bg: "background",
        color: "foreground",
        shadow: "sm",
      },
    },
    content: {
      mt: "2",
      ringColor: "background",

      _focusVisible: {
        outlineWidth: "2",
        outlineOffset: "2",
        ringWidth: "2",
        ringColor: "ring",
      },
    },
  },
})
