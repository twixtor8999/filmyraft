import { NextResponse } from "next/server";
import { searchTMDB, fetchTMDBDetails, getTMDBApiKey } from "@/lib/tmdb";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q");
  const tmdbId = searchParams.get("id");
  const type = (searchParams.get("type") || "movie") as "movie" | "series";

  const apiKey = getTMDBApiKey();
  if (!apiKey) {
    return NextResponse.json(
      {
        error: "TMDB_API_KEY is not configured.",
        needsKey: true,
      },
      { status: 400 }
    );
  }

  try {
    // If fetching full details by ID
    if (tmdbId) {
      const details = await fetchTMDBDetails(tmdbId, type);
      return NextResponse.json({ success: true, data: details });
    }

    // If searching by query
    if (q) {
      const results = await searchTMDB(q);
      return NextResponse.json({ success: true, results });
    }

    return NextResponse.json({ error: "Missing query parameter 'q' or 'id'" }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "TMDB request failed" }, { status: 500 });
  }
}
