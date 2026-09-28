import { NextRequest, NextResponse } from "next/server";
import fs from "fs";

export async function GET(req: NextRequest) {
  const daysFolders = fs.readdirSync("./src/app/(subpages)/days");
  const daysPages = daysFolders.map((folder) => fs.readFileSync(`./src/app/(subpages)/days/${folder}/meta.json`, "utf-8"));

  let daysData = daysPages.map((page) => JSON.parse(page));
  daysData = daysData.sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return NextResponse.json({ data: daysData });
}
