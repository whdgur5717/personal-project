import FilterList from "@/components/FilterList"
import { createClient } from "@/utils/server"

export default async function SearchPage() {
  const supabase = await createClient()
  const { data: politicians, error } = await supabase.from("mp").select("*")

  if (politicians == null && error) {
    throw new Error("Failed to fetch politicians")
  }

  return (
    <div>
      <FilterList initialData={politicians} />
    </div>
  )
}