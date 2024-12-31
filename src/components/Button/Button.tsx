import { type ComponentProps } from "react"
import { Slot } from "@radix-ui/react-slot"

export type ButtonProps = ComponentProps<"button"> & {
  asChild?: boolean
}

export const Button = ({ asChild, ref, ...props }: ButtonProps) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      role="button"
      ref={ref}
      {...props}></Comp>
  )
}
