import { defineSlotRecipe } from "@pandacss/dev"

export const select = defineSlotRecipe({
  className: "select",
  slots: [
    "root",
    "content",
    "control",
    "label",
    "trigger",
    "indicator",
    "item",
    "itemGroup",
    "itemGroupLabel",
    "itemText",
    "itemIndicator",
    "clearTrigger",
    "list",
    "positioner",
    "valueText",
  ],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
      width: "full",
      backgroundColor: "background",
    },
    content: {
      background: "background",
      borderRadius: "5px",
      boxShadow: "lg",
      display: "flex",
      flexDirection: "column",
      zIndex: "dropdown",
    },
    control: {
      width: "full",
    },
    item: {
      alignItems: "center",
      borderRadius: "5px",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",

      _hover: {
        color: "red",
      },
      _highlighted: {
        background: "gray.a3",
        color: "black",
      },
      _selected: {
        color: "black",
      },
      _disabled: {
        color: "fg.disabled",
        cursor: "not-allowed",
        _hover: {
          background: "transparent",
          color: "fg.disabled",
        },
      },
    },
    itemGroup: {
      width: "full",
      border: "1px solid black",
    },
    itemGroupLabel: {
      fontSize: "1.5rem",
    },
    itemIndicator: {
      color: "black",
    },
    label: {
      color: "black",
      fontSize: "2rem",
      fontWeight: "medium",
    },
    trigger: {
      appearance: "none",
      alignItems: "center",
      borderColor: "border.default",
      borderRadius: "l2",
      cursor: "pointer",
      color: "black",
      display: "inline-flex",
      justifyContent: "space-between",
      outline: 0,
      position: "relative",
      transitionDuration: "normal",
      transitionProperty: "background, box-shadow, border-color",
      transitionTimingFunction: "default",
      width: "full",
      _placeholderShown: {
        color: "primary",
      },
      _disabled: {
        color: "fg.disabled",
        cursor: "not-allowed",
        "& :where(svg)": {
          color: "fg.disabled",
        },
      },
      "& :where(svg)": {
        color: "primary",
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "outline",
  },
  variants: {
    variant: {
      outline: {
        trigger: {
          borderWidth: "1px",
          _focus: {
            borderColor: "black",
            boxShadow: "0 0 0 1px var(--colors-color-palette-default)",
          },
        },
      },
      ghost: {
        trigger: {
          _hover: {
            background: "gray.a3",
          },
          _focus: {
            background: "gray.a3",
          },
        },
      },
    },
    size: {
      sm: {
        content: { p: "0.5", gap: "1" },
        item: { textStyle: "sm", px: "2", height: "9" },
        itemIndicator: {
          "& :where(svg)": {
            width: "4",
            height: "4",
          },
        },
        itemGroupLabel: {
          px: "2",
          py: "1.5",
        },
        label: { textStyle: "sm" },
        trigger: {
          px: "2.5",
          h: "9",
          minW: "9",
          fontSize: "sm",
          gap: "2",
          "& :where(svg)": {
            width: "4",
            height: "4",
          },
        },
      },
      md: {
        content: { p: "1", gap: "1" },
        item: { textStyle: "md", px: "2", height: "10" },
        itemIndicator: {
          "& :where(svg)": {
            width: "4",
            height: "4",
          },
        },
        itemGroupLabel: {
          px: "2",
          py: "1.5",
        },
        label: { textStyle: "sm" },
        trigger: {
          px: "3",
          h: "10",
          minW: "10",
          fontSize: "md",
          gap: "2",
          "& :where(svg)": {
            width: "4",
            height: "4",
          },
        },
      },
      lg: {
        content: { p: "1.5", gap: "1" },
        item: { textStyle: "md", px: "2", height: "11" },
        itemIndicator: {
          "& :where(svg)": {
            width: "5",
            height: "5",
          },
        },
        itemGroupLabel: {
          px: "2",
          py: "1.5",
        },
        label: { textStyle: "sm" },
        trigger: {
          px: "3.5",
          h: "11",
          minW: "11",
          fontSize: "md",
          gap: "2",
          "& :where(svg)": {
            width: "5",
            height: "5",
          },
        },
      },
    },
  },
})
