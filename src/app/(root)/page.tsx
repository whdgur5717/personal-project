import { Button } from "@/components/Button"
import * as Card from "@/components/Card"
import { createClient } from "@/utils/client"
import { flex, grid } from "@styled-system/patterns"
import Link from "next/link"
import { MemberModel } from "@/entities/member/model"
import { AttendanceProgress } from "./components/AttendanceProgress"

export default async function Home() {
  const supabase = createClient("force-cache")

  const { data: _politicians, error } = await supabase.from("member").select(`
  *,
  party_info:party!inner(*),
  attendance:attendance!inner(*,
  sessions:sessions!inner(*)
  )
`)

  if (error) {
    throw new Error("No politicians data")
  }
  const politicians = _politicians.map(_politician => new MemberModel(_politician))

  return (
    <main>
      <div className={flex({ direction: "column", gap: 8 })}>
        <Button asChild>
          <Link href="/search">검색</Link>
        </Button>
        <div
          className={grid({
            columns: [3, 4, 5],
            gap: [6, 8],
          })}>
          {politicians?.map(politician => (
            <Card.Root
              key={politician.id}
              style={{ borderColor: politician.party.brand_color }}>
              <Card.Header>
                <Card.Title>{politician.name}</Card.Title>
                <Card.Description style={{ color: politician.party.brand_color }}>
                  {politician.party.name}
                </Card.Description>
                <Card.Description>{politician.district}</Card.Description>
              </Card.Header>
              <Card.Content>
                {Object.keys(politician.result)?.map(_key => {
                  const key = _key as keyof typeof politician.result
                  return (
                    <AttendanceProgress
                      key={key}
                      label={key}
                      total={politician.result[key]}
                      value={Math.floor((politician.result[key] / politician.total) * 100)}
                    />
                  )
                })}
              </Card.Content>
            </Card.Root>
          ))}
        </div>
      </div>
    </main>
  )
}
