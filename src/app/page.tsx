import { Button } from "@/components/Button"
import Card from "@/components/Card"
import { Input } from "@/components/Input"
import { createClient } from "@/utils/server"
import { css } from "@styled-system/css"
import { container, flex, grid } from "@styled-system/patterns"

export default async function Home() {
  const supabase = await createClient()
  const { data: politicians } = await supabase.from("mp").select("*")

  return (
    <div className={css({ minH: "100vh", bg: "background" })}>
      <main className={container({ maxW: "6xl", py: 8 })}>
        <div className={flex({ direction: "column", gap: 8 })}>
          <div className={flex({ columns: ["column", "row"], gap: 4 })}>
            <Input placeholder="이름으로 검색" />
            <Input placeholder="지역구로 검색" />
          </div>

          <Button
            size="full"
            className={css({ minHeight: "48px" })}>
            검색
          </Button>

          <div
            className={grid({
              columns: [1, 2, 3, 4, 5],
              gap: [4, 6],
            })}>
            {politicians?.map(politician => (
              <Card key={politician.id}>
                <Card.Image
                  src={politician.signed_url}
                  alt={politician.name}
                />
                <Card.Content>
                  <Card.Title>{politician.name}</Card.Title>
                </Card.Content>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
