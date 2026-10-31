import { sql } from "@/lib/db";
import { MediaItem, QualityVariant, Season } from "@/types/media";
import { MOCK_MEDIA } from "@/data/mockMedia";

// Interface for DB row returned by Neon
interface MediaRow {
  id: string;
  slug: string;
  title: string;
  type: string;
  release_year: number;
  imdb_rating: string | number;
  runtime: string;
  genres: string[];
  languages: string[];
  subtitles: string[];
  storyline: string;
  poster_url: string;
  backdrop_url: string;
  screenshots: string[];
  tags: string[];
  director: string | null;
  cast_members: string[];
  variants: QualityVariant[];
  seasons: Season[];
}

function optimizeImageUrl(url: string, isBackdrop = false): string {
  if (!url) {
    return isBackdrop
      ? "https://images.metahub.space/background/large/tt4154796/img"
      : "https://images.metahub.space/poster/medium/tt4154796/img";
  }

  // Handle local legacy image paths by mapping to official 1080p Metahub landscape backdrops
  if (url.startsWith("/")) {
    if (url.includes("visionquest")) return url;
    if (isBackdrop) {
      if (url.includes("strangerthings")) return "https://images.metahub.space/background/large/tt4574334/img";
      if (url.includes("dpw")) return "https://images.metahub.space/background/large/tt6263850/img";
      if (url.includes("oppenheimer")) return "https://images.metahub.space/background/large/tt15398776/img";
      if (url.includes("stree2")) return "https://images.metahub.space/background/large/tt28343719/img";
      if (url.includes("mirzapur")) return "https://images.metahub.space/background/large/tt6473300/img";
      return url;
    } else {
      if (url.includes("strangerthings")) return "https://images.metahub.space/poster/medium/tt4574334/img";
      if (url.includes("dpw")) return "https://images.metahub.space/poster/medium/tt6263850/img";
      if (url.includes("oppenheimer")) return "https://images.metahub.space/poster/medium/tt15398776/img";
      if (url.includes("stree2")) return "https://images.metahub.space/poster/medium/tt28343719/img";
      if (url.includes("mirzapur")) return "https://images.metahub.space/poster/medium/tt6473300/img";
      return url;
    }
  }

  // Extract IMDb tt id and serve full 1080p uncompressed backdrop
  const ttMatch = url.match(/tt\d{7,8}/);
  if (ttMatch) {
    if (isBackdrop) {
      return `https://images.metahub.space/background/large/${ttMatch[0]}/img`;
    } else if (url.includes("metahub.space")) {
      return `https://images.metahub.space/poster/medium/${ttMatch[0]}/img`;
    }
  }

  // If image is an Amazon S3 IMDb link, serve crisp unblurred quality
  if (url.includes("m.media-amazon.com")) {
    return url.replace(/\._V1_.*(\.[a-z]+)$/i, isBackdrop ? "._V1_QL90_UX1920_$1" : "._V1_QL80_UX400_$1");
  }
  return url;
}

function mapRowToMediaItem(row: MediaRow): MediaItem {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    type: row.type as "movie" | "series",
    releaseYear: row.release_year,
    imdbRating: Number(row.imdb_rating),
    runtime: row.runtime,
    genres: row.genres || [],
    languages: row.languages || [],
    subtitles: row.subtitles || [],
    storyline: row.storyline,
    posterUrl: optimizeImageUrl(row.poster_url, false),
    backdropUrl: optimizeImageUrl(row.backdrop_url || row.poster_url, true),
    screenshots: (row.screenshots || []).map((s) => optimizeImageUrl(s, true)),
    tags: row.tags || [],
    director: row.director || undefined,
    cast: row.cast_members || undefined,
    variants: row.variants && row.variants.length > 0 ? row.variants : undefined,
    seasons: row.seasons && row.seasons.length > 0 ? row.seasons : undefined,
  };
}

/**
 * Fetch all media items from Neon database with graceful local fallback
 */
export async function getAllMedia(): Promise<MediaItem[]> {
  try {
    if (!process.env.DATABASE_URL) {
      return MOCK_MEDIA;
    }
    const rows = (await sql`
      SELECT * FROM media_items
      ORDER BY release_year DESC, imdb_rating DESC
    `) as MediaRow[];

    if (!rows || rows.length === 0) {
      return MOCK_MEDIA;
    }

    return rows.map(mapRowToMediaItem);
  } catch (err) {
    console.error("Neon DB fetch failed, using local fallback:", err);
    return MOCK_MEDIA;
  }
}

/**
 * Fetch a single media item by its slug from Neon database
 */
export async function getMediaBySlug(slug: string): Promise<MediaItem | undefined> {
  try {
    if (!process.env.DATABASE_URL) {
      return MOCK_MEDIA.find((m) => m.slug === slug);
    }
    const cleanSlug = slug.replace(/-\d{4}$/, "");
    const rows = (await sql`
      SELECT * FROM media_items
      WHERE slug = ${slug} OR slug = ${cleanSlug}
      LIMIT 1
    `) as MediaRow[];

    if (rows && rows.length > 0) {
      return mapRowToMediaItem(rows[0]);
    }
    return MOCK_MEDIA.find((m) => m.slug === slug);
  } catch (err) {
    console.error("Neon DB fetch by slug failed, using local fallback:", err);
    return MOCK_MEDIA.find((m) => m.slug === slug);
  }
}

/**
 * Find download variant by ID for the gateway page
 */
export async function findVariantById(variantId: string): Promise<{
  media: MediaItem;
  variant: QualityVariant;
  episodeTitle?: string;
} | undefined> {
  const allMedia = await getAllMedia();

  for (const media of allMedia) {
    if (media.variants) {
      const found = media.variants.find((v) => v.id === variantId);
      if (found) return { media, variant: found };
    }
    if (media.seasons) {
      for (const season of media.seasons) {
        if (season.batchPacks) {
          const foundBatch = season.batchPacks.find((v) => v.id === variantId);
          if (foundBatch) return { media, variant: foundBatch, episodeTitle: season.seasonTitle };
        }
        for (const ep of season.episodes) {
          const foundEp = ep.variants.find((v) => v.id === variantId);
          if (foundEp) return { media, variant: foundEp, episodeTitle: `Episode ${ep.episodeNumber}: ${ep.title}` };
        }
      }
    }
  }
  return undefined;
}
