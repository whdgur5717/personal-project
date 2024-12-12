import { createClient } from "@/utils/server"

import Image from "next/image"

export default async function Home() {
  const supabase = await createClient()
  const { data } = await supabase.from("mp").select("*")

  return (
    <main>
      <div>안녕하세요</div>
      <div>
        {data?.map(item => {
          return (
            <Image
              width={100}
              height={100}
              style={{
                width: "100px",
                height: "100px",
              }}
              quality={100}
              key={item.id}
              alt={item.name}
              src={item.signed_url || ""}></Image>
          )
        })}
      </div>
    </main>
  )
}
