import { flex } from "@styled-system/patterns"

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={flex({ direction: "column", gap: 4 })}>{children}</div>
}
