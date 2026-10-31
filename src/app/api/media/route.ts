import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { MediaItem } from "@/types/media";

export async function POST(request: Request) {
  try {
    const body: MediaItem = await request.json();

    if (!body.title || !body.slug) {
      return NextResponse.json({ error: "Missing required fields: title and slug" }, { status: 400 });
    }

    const id = body.id || body.slug;

    await sql`
      INSERT INTO media_items (
        id, slug, title, type, release_year, imdb_rating, runtime,
        genres, languages, subtitles, storyline, poster_url, backdrop_url,
        screenshots, tags, director, cast_members, variants, seasons
      ) VALUES (
        ${id},
        ${body.slug},
        ${body.title},
        ${body.type || "movie"},
        ${body.releaseYear || new Date().getFullYear()},
        ${body.imdbRating || 7.0},
        ${body.runtime || "2h 00min"},
        ${JSON.stringify(body.genres || ["Action"])}::jsonb,
        ${JSON.stringify(body.languages || ["Hindi (Org 5.1)", "English"])}::jsonb,
        ${JSON.stringify(body.subtitles || ["English (ESub)"])}::jsonb,
        ${body.storyline || ""},
        ${body.posterUrl || ""},
        ${body.backdropUrl || ""},
        ${JSON.stringify(body.screenshots || [])}::jsonb,
        ${JSON.stringify(body.tags || ["Trending", "Dual Audio"])}::jsonb,
        ${body.director || null},
        ${JSON.stringify(body.cast || [])}::jsonb,
        ${JSON.stringify(body.variants || [])}::jsonb,
        ${JSON.stringify(body.seasons || [])}::jsonb
      )
      ON CONFLICT (id) DO UPDATE SET
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        type = EXCLUDED.type,
        release_year = EXCLUDED.release_year,
        imdb_rating = EXCLUDED.imdb_rating,
        runtime = EXCLUDED.runtime,
        genres = EXCLUDED.genres,
        languages = EXCLUDED.languages,
        subtitles = EXCLUDED.subtitles,
        storyline = EXCLUDED.storyline,
        poster_url = EXCLUDED.poster_url,
        backdrop_url = EXCLUDED.backdrop_url,
        screenshots = EXCLUDED.screenshots,
        tags = EXCLUDED.tags,
        director = EXCLUDED.director,
        cast_members = EXCLUDED.cast_members,
        variants = EXCLUDED.variants,
        seasons = EXCLUDED.seasons;
    `;

    return NextResponse.json({ success: true, message: `Successfully published ${body.title} to Neon!` });
  } catch (error: any) {
    console.error("Failed to add media item:", error);
    return NextResponse.json({ error: error.message || "Failed to publish media" }, { status: 500 });
  }
}
