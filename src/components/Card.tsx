import { css } from "@styled-system/css"
import Image from "next/image"

import { ReactNode, type ComponentProps } from "react"

function Card({ children }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={css({
        bg: "card",
        borderRadius: "lg",
        overflow: "hidden",
        boxShadow: "md",
        transition: "all 0.3s",
        bgColor: "background",
        "&:hover": { transform: "translateY(-4px)", boxShadow: "lg" },
      })}>
      {children}
    </div>
  )
}

function CardImage({ src, alt, width = 100, height = 100 }: ComponentProps<typeof Image>) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={css({ w: "full", h: "auto", objectFit: "cover" })}
    />
  )
}

function CardContent({ children }: { children?: ReactNode }) {
  return <div className={css({ p: 4 })}>{children}</div>
}

function CardTitle({ children }: { children?: ReactNode }) {
  return <h3 className={css({ fontSize: "lg", fontWeight: "semibold", mb: 1 })}>{children}</h3>
}

function CardSubtitle({ children }: { children?: ReactNode }) {
  return <p className={css({ fontSize: "sm", color: "gray.600" })}>{children}</p>
}

Card.Image = CardImage
Card.Content = CardContent
Card.Title = CardTitle
Card.Subtitle = CardSubtitle

export default Card
