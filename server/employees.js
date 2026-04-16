import "server-only";
import { getSupabaseAdminClient } from "./supabase";

export async function getEmployees(company) {
  const companySlug = company?.trim().toLowerCase();

  if (!companySlug) {
    throw new Error("A company slug is required to load employees.");
  }

  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("employees")
    .select("*")
    .eq("team_members", companySlug)
    .eq("company", companySlug)
    .eq("view", "list")
    .order("sort_order", { ascending: true, nullsFirst: false })
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Supabase employees query failed: ${error.message}`);
  }

  return Array.isArray(data) ? data : [];
}
