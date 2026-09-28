import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { DiaryPageData } from "@/types/diaryPageData";

export async function GET(_req: NextRequest) {
  const base = path.join(process.cwd(), "src", "app", "(subpages)", "days");

  if (!fs.existsSync(base)) {
    return NextResponse.json({ data: [] });
  }

  const entries: { filePath: string; data: DiaryPageData }[] = [];

  const folders = fs.readdirSync(base).filter((name) => {
    try {
      return fs.statSync(path.join(base, name)).isDirectory();
    } catch {
      return false;
    }
  });

  for (const folder of folders) {
    const metaPath = path.join(base, folder, "meta.json");
    if (!fs.existsSync(metaPath)) continue;

    try {
      const raw = fs.readFileSync(metaPath, "utf8");
      const data = JSON.parse(raw) as DiaryPageData;
      if (data && data.featured) {
        entries.push({ filePath: `/days/${data.id}`, data: data });
      }
    } catch (err) {
      // swallow parse errors but log on server side for debugging
      console.error(`Failed to read/parse meta for ${folder}:`, err);
    }
  }

  return NextResponse.json({ data: entries });
}
