import { neon } from "@neondatabase/serverless";
import * as dotenv from "dotenv";
import { MOCK_MEDIA } from "../src/data/mockMedia";

dotenv.config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);

async function setupAndSeed() {
  console.log("Setting up tables in Neon PostgreSQL...");

  // Create table for media items
  await sql`
    CREATE TABLE IF NOT EXISTS media_items (
      id TEXT PRIMARY KEY,
      slug TEXT UNIQUE NOT NULL,
      title TEXT NOT NULL,
      type TEXT NOT NULL,
      release_year INT NOT NULL,
      imdb_rating NUMERIC(3,1) NOT NULL,
      runtime TEXT NOT NULL,
      genres JSONB NOT NULL DEFAULT '[]'::jsonb,
      languages JSONB NOT NULL DEFAULT '[]'::jsonb,
      subtitles JSONB NOT NULL DEFAULT '[]'::jsonb,
      storyline TEXT NOT NULL,
      poster_url TEXT NOT NULL,
      backdrop_url TEXT NOT NULL,
      screenshots JSONB NOT NULL DEFAULT '[]'::jsonb,
      tags JSONB NOT NULL DEFAULT '[]'::jsonb,
      director TEXT,
      cast_members JSONB DEFAULT '[]'::jsonb,
      variants JSONB DEFAULT '[]'::jsonb,
      seasons JSONB DEFAULT '[]'::jsonb,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
  `;

  // Create index on slug, type, and tags for lightning-fast queries
  await sql`CREATE INDEX IF NOT EXISTS idx_media_slug ON media_items (slug);`;
  await sql`CREATE INDEX IF NOT EXISTS idx_media_type ON media_items (type);`;

  console.log("Table 'media_items' ready. Seeding movies and web series...");

  for (const item of MOCK_MEDIA) {
    await sql`
      INSERT INTO media_items (
        id, slug, title, type, release_year, imdb_rating, runtime,
        genres, languages, subtitles, storyline, poster_url, backdrop_url,
        screenshots, tags, director, cast_members, variants, seasons
      ) VALUES (
        ${item.id},
        ${item.slug},
        ${item.title},
        ${item.type},
        ${item.releaseYear},
        ${item.imdbRating},
        ${item.runtime},
        ${JSON.stringify(item.genres)}::jsonb,
        ${JSON.stringify(item.languages)}::jsonb,
        ${JSON.stringify(item.subtitles)}::jsonb,
        ${item.storyline},
        ${item.posterUrl},
        ${item.backdropUrl},
        ${JSON.stringify(item.screenshots)}::jsonb,
        ${JSON.stringify(item.tags)}::jsonb,
        ${item.director || null},
        ${JSON.stringify(item.cast || [])}::jsonb,
        ${JSON.stringify(item.variants || [])}::jsonb,
        ${JSON.stringify(item.seasons || [])}::jsonb
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
    console.log(`✓ Seeded: ${item.title}`);
  }

  const countRes = await sql`SELECT count(*) FROM media_items;`;
  console.log(`\nAll done! Total media records in Neon: ${countRes[0].count}`);
}

setupAndSeed().catch((err) => {
  console.error("Migration/Seed error:", err);
  process.exit(1);
});
