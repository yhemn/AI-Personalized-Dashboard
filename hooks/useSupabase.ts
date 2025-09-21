import { createClient } from "@/lib/supabase/client"
import { useMemo } from "react"

export default function useSupabase () {
  const supabase = useMemo(() => createClient(), [])
  return supabase
}
