import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ day: string }> }
) {
  const { day } = await params;
  if (!day) return NextResponse.json({ data: null });

  const metaPath = path.join(
    process.cwd(),
    "src",
    "app",
    "(subpages)",
    "days",
    day,
    "meta.json"
  );
  if (!fs.existsSync(metaPath)) return NextResponse.json({ data: null });

  try {
    const raw = fs.readFileSync(metaPath, "utf8");
    const data = JSON.parse(raw);
    return NextResponse.json({ data });
  } catch (err) {
    console.error(`Failed to read meta for ${day}:`, err);
    return NextResponse.json({ data: null });
  }
}
