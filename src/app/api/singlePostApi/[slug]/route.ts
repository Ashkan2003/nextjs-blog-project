import { createClient } from "@/utils/supabase/server";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const supabase = createClient();

  // fetch a single-post with its slug
  const { data, error } = await supabase
    .from("Posts")
    .select("*")
    .eq("slug", params.slug!)
    .single();

  if (!data) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  if (error) {
    console.error(error);
    throw new Error("cant found post with the given slug");
  }

  return NextResponse.json(data);
}
