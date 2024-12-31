import type { Database } from "./database.types"

type Tables = Database["public"]["Tables"]
type TableNames = keyof Tables

export type TableRow<T extends TableNames> = Database["public"]["Tables"][T]["Row"]
