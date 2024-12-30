import {
  cardRoot,
  cardHeader,
  cardTitle,
  cardDescription,
  cardContent,
  cardFooter,
} from "@styled-system/recipes"
import { styled } from "@styled-system/jsx"

export const Root = styled("div", cardRoot)
export const Header = styled("div", cardHeader)
export const Title = styled("h3", cardTitle)
export const Description = styled("p", cardDescription)
export const Content = styled("div", cardContent)
export const Footer = styled("div", cardFooter)
