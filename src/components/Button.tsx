import { ComponentProps, type ReactNode } from "react"
import { button, type ButtonVariant } from "@styled-system/recipes"
import { Slot } from "@radix-ui/react-slot"
import { cx } from "@styled-system/css"

export type ButtonProps = ComponentProps<"button"> & {
  children: ReactNode
  as?: boolean
  disabled?: boolean
} & Partial<ButtonVariant>

export const Button = ({
  as,
  disabled,
  id,
  onClick,
  children,
  className,
  ref,
  ...rest
}: ButtonProps) => {
  const [buttonProps] = button.splitVariantProps(rest)

  const Comp = as ? Slot : "button"

  return (
    <Comp
      role="button"
      ref={ref}
      disabled={disabled}
      id={id}
      onClick={onClick}
      className={cx(button(buttonProps), className)}
      {...rest}>
      {children}
    </Comp>
  )
}
