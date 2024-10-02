import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function DELETE(request: NextRequest) {
  const supabase = createClient();
  await supabase.auth.signOut();

  return NextResponse.json(200);
}
