import { Button } from "@/components/Button"
import Card from "@/components/Card"
import { createClient } from "@/utils/server"
import { css } from "@styled-system/css"
import { flex, grid } from "@styled-system/patterns"
import Link from "next/link"

export default async function Home() {
  const supabase = await createClient()
  const { data: politicians } = await supabase.from("mp").select("*")

  return (
    <main>
      <div className={flex({ direction: "column", gap: 8 })}>
        <Link href="search">
          <Button
            size="full"
            className={css({ minHeight: "48px" })}>
            검색
          </Button>
        </Link>

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
                <Card.Subtitle>{politician.district}</Card.Subtitle>
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
