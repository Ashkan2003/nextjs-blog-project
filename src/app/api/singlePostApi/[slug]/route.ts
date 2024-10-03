import { createClient } from "@/utils/supabase/server";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("Posts")
    .select("*")
    .eq("slug", params.slug!)
    .single();

  if (error) {
    console.error(error);
    throw new Error("cant found post with the given slug");
  }

  return NextResponse.json(data);
}
