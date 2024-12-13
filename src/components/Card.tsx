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
        width: "100%",
        aspectRatio: "1/1",
        position: "relative",
        p: 5,
        gap: 5,
        "&:hover": { transform: "translateY(-4px)", boxShadow: "lg" },
      })}>
      {children}
    </div>
  )
}

function CardImage({ src, alt }: ComponentProps<typeof Image>) {
  return (
    <Image
      src={src}
      alt={alt}
      sizes="100px"
      fill
    />
  )
}

function CardContent({ children }: { children?: ReactNode }) {
  return (
    <div className={css({ display: "flex", alignItems: "center", flexDir: "column" })}>
      {children}
    </div>
  )
}

function CardTitle({ children }: { children?: ReactNode }) {
  return (
    <h3 className={css({ fontSize: "lg", fontWeight: "semibold", mb: 1, color: "foreground" })}>
      {children}
    </h3>
  )
}

function CardSubtitle({ children }: { children?: ReactNode }) {
  return (
    <p
      className={css({ fontSize: "sm", color: "foreground", lineClamp: "2", textAlign: "center" })}>
      {children}
    </p>
  )
}

Card.Image = CardImage
Card.Content = CardContent
Card.Title = CardTitle
Card.Subtitle = CardSubtitle

export default Card
