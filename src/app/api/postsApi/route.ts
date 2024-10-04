import { createClient } from "@/utils/supabase/server";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const supabase = createClient();

  // fetch all posts from supabase
  const { data, error } = await supabase.from("Posts").select("*");

  if (error) {
    console.error(error);
    throw new Error("posts coud not be load");
  }

  return NextResponse.json(data);
}
