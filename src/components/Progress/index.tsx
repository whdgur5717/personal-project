import * as ProgressPrimitive from "@radix-ui/react-progress"
import { styled } from "@styled-system/jsx"
import { cx } from "@styled-system/css"
import { progress } from "@styled-system/recipes"
import type { ComponentProps } from "react"

const BaseProgress = ({
  className,
  value,
  ref,
  ...props
}: ComponentProps<typeof ProgressPrimitive.Root>) => {
  const styles = progress()
  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cx(styles.root, className)}
      {...props}>
      <ProgressPrimitive.Indicator
        className={styles.indicator}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export const Progress = styled(BaseProgress)
