import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ day: string }> }
) {
  const { day } = await params;
  if (!day) return NextResponse.json({ data: [] });

  const imagesDir = path.join(process.cwd(), "public", "media", day);

  if (!fs.existsSync(imagesDir)) {
    return NextResponse.json({ data: [] });
  }

  try {
    const files = fs
      .readdirSync(imagesDir)
      .filter((f) => /\.(jpe?g|png|gif|webp|avif|mp4)$/i.test(f));
    const images = files.sort().map((f) => `/media/${day}/${f}`);
    return NextResponse.json({ data: images });
  } catch (err) {
    console.error(`Failed to read images for day=${day}:`, err);
    return NextResponse.json({ data: [] });
  }
}
