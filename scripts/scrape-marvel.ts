import { scrapeImdb } from "../src/lib/imdbScraper";
import { neon } from "@neondatabase/serverless";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);

// 1. Marvel Movies Catalog
export const MARVEL_MOVIES = [
  { id: "tt6263850", title: "Deadpool & Wolverine" },
  { id: "tt4154796", title: "Avengers: Endgame" },
  { id: "tt4154756", title: "Avengers: Infinity War" },
  { id: "tt0848228", title: "The Avengers" },
  { id: "tt2395427", title: "Avengers: Age of Ultron" },
  { id: "tt10872600", title: "Spider-Man: No Way Home" },
  { id: "tt6320628", title: "Spider-Man: Far From Home" },
  { id: "tt2250912", title: "Spider-Man: Homecoming" },
  { id: "tt0371746", title: "Iron Man" },
  { id: "tt1228705", title: "Iron Man 2" },
  { id: "tt1300854", title: "Iron Man 3" },
  { id: "tt3498820", title: "Captain America: Civil War" },
  { id: "tt1843866", title: "Captain America: The Winter Soldier" },
  { id: "tt0458339", title: "Captain America: The First Avenger" },
  { id: "tt3501632", title: "Thor: Ragnarok" },
  { id: "tt10648342", title: "Thor: Love and Thunder" },
  { id: "tt0800369", title: "Thor" },
  { id: "tt1981115", title: "Thor: The Dark World" },
  { id: "tt2015381", title: "Guardians of the Galaxy" },
  { id: "tt3896198", title: "Guardians of the Galaxy Vol. 2" },
  { id: "tt6791350", title: "Guardians of the Galaxy Vol. 3" },
  { id: "tt1825683", title: "Black Panther" },
  { id: "tt9114286", title: "Black Panther: Wakanda Forever" },
  { id: "tt1211837", title: "Doctor Strange" },
  { id: "tt9419884", title: "Doctor Strange in the Multiverse of Madness" },
  { id: "tt0478970", title: "Ant-Man" },
  { id: "tt5095030", title: "Ant-Man and the Wasp" },
  { id: "tt10954600", title: "Ant-Man and the Wasp: Quantumania" },
  { id: "tt4154664", title: "Captain Marvel" },
  { id: "tt3480822", title: "Black Widow" },
  { id: "tt9376612", title: "Shang-Chi and the Legend of the Ten Rings" },
  { id: "tt9032400", title: "Eternals" },
];

// 2. Marvel TV Shows / Web Series Catalog
export const MARVEL_SERIES = [
  { id: "tt9140554", title: "Loki" },
  { id: "tt8595519", title: "WandaVision" },
  { id: "tt2357547", title: "Daredevil" },
  { id: "tt10234724", title: "Moon Knight" },
  { id: "tt10168312", title: "What If...?" },
  { id: "tt8899838", title: "The Falcon and the Winter Soldier" },
  { id: "tt10160804", title: "Hawkeye" },
  { id: "tt10857164", title: "Ms. Marvel" },
  { id: "tt10857160", title: "She-Hulk: Attorney at Law" },
  { id: "tt13623148", title: "Secret Invasion" },
  { id: "tt14208870", title: "Echo" },
  { id: "tt13623632", title: "Agatha All Along" },
  { id: "tt2364582", title: "Agents of S.H.I.E.L.D." },
  { id: "tt2357548", title: "Jessica Jones" },
  { id: "tt3322310", title: "Luke Cage" },
  { id: "tt3322312", title: "Iron Fist" },
  { id: "tt5675620", title: "The Punisher" },
];

async function ingestMarvelCollection() {
  console.log("==========================================================");
  console.log(`Starting Scrape & Ingestion for Marvel Universe into Neon`);
  console.log(`Total Movies: ${MARVEL_MOVIES.length} | Total Series: ${MARVEL_SERIES.length}`);
  console.log("==========================================================");

  // 1. Ingest Movies
  for (const item of MARVEL_MOVIES) {
    try {
      const data = await scrapeImdb(item.id, "movie");
      const slug = data.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");

      const baseId = slug;
      const variants = [
        {
          id: `${baseId}-480p`,
          resolution: "480p",
          formatLabel: `480p SD [Hindi Org + English]`,
          fileSize: "480 MB",
          codec: "x264",
          audioSpecs: "Hindi 2.0 Org + English 2.0",
          mirrors: [
            { id: "m1", name: "Fast Cloud Direct", url: `https://hubcloud.club/drive/${baseId}-480`, isFast: true, type: "download" },
            { id: "m2", name: "PixelDrain Mirror", url: `https://pixeldrain.com/u/${baseId}-480`, type: "download" },
            { id: "m3", name: "Stream Online", url: `https://streamwish.to/e/${baseId}`, type: "stream" },
          ],
        },
        {
          id: `${baseId}-720p`,
          resolution: "720p",
          formatLabel: `720p 10-Bit HEVC [Hindi Org 5.1 + English]`,
          fileSize: "1.25 GB",
          codec: "HEVC / x265",
          audioSpecs: "Hindi Org 5.1 + English 5.1",
          mirrors: [
            { id: "m4", name: "Fast Cloud Direct", url: `https://hubcloud.club/drive/${baseId}-720`, isFast: true, type: "download" },
            { id: "m5", name: "PixelDrain Mirror", url: `https://pixeldrain.com/u/${baseId}-720`, type: "download" },
            { id: "m6", name: "Stream Online (HD)", url: `https://streamwish.to/e/${baseId}-hd`, type: "stream" },
          ],
        },
        {
          id: `${baseId}-1080p`,
          resolution: "1080p",
          formatLabel: `1080p FHD IMAX [Hindi Clean Org + English Atmos]`,
          fileSize: "3.20 GB",
          codec: "x264 / AVC",
          audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
          mirrors: [
            { id: "m7", name: "Fast Cloud Direct", url: `https://hubcloud.club/drive/${baseId}-1080`, isFast: true, type: "download" },
            { id: "m8", name: "PixelDrain Mirror", url: `https://pixeldrain.com/u/${baseId}-1080`, type: "download" },
          ],
        },
        {
          id: `${baseId}-4k`,
          resolution: "4K UHD",
          formatLabel: `2160p 4K UHD IMAX HDR10+ [Hindi Org 5.1 + English TrueHD 7.1]`,
          fileSize: "7.90 GB",
          codec: "HEVC / HDR10",
          audioSpecs: "Hindi Org 5.1 + English TrueHD 7.1 Atmos",
          mirrors: [
            { id: "m9", name: "Fast Cloud Direct (VIP)", url: `https://hubcloud.club/drive/${baseId}-4k`, isFast: true, type: "download" },
          ],
        },
      ];

      await sql`
        INSERT INTO media_items (
          id, slug, title, type, release_year, imdb_rating, runtime,
          genres, languages, subtitles, storyline, poster_url, backdrop_url,
          screenshots, tags, director, cast_members, variants, seasons
        ) VALUES (
          ${slug},
          ${slug},
          ${data.title},
          ${data.type},
          ${data.releaseYear},
          ${data.imdbRating},
          ${data.runtime},
          ${JSON.stringify(data.genres)}::jsonb,
          ${JSON.stringify(["Hindi (Org 5.1)", "English (Dolby Atmos)"])}::jsonb,
          ${JSON.stringify(["English (ESub)", "Hindi"])}::jsonb,
          ${data.storyline},
          ${data.posterUrl},
          ${data.backdropUrl},
          ${JSON.stringify([data.posterUrl, data.backdropUrl])}::jsonb,
          ${JSON.stringify(["Marvel", "Hollywood", "Trending", "Dual Audio", "4K UHD"])}::jsonb,
          ${data.director},
          ${JSON.stringify(data.cast)}::jsonb,
          ${JSON.stringify(variants)}::jsonb,
          ${JSON.stringify([])}::jsonb
        )
        ON CONFLICT (id) DO UPDATE SET
          title = EXCLUDED.title,
          slug = EXCLUDED.slug,
          type = EXCLUDED.type,
          release_year = EXCLUDED.release_year,
          imdb_rating = EXCLUDED.imdb_rating,
          runtime = EXCLUDED.runtime,
          genres = EXCLUDED.genres,
          storyline = EXCLUDED.storyline,
          poster_url = EXCLUDED.poster_url,
          backdrop_url = EXCLUDED.backdrop_url,
          tags = EXCLUDED.tags,
          director = EXCLUDED.director,
          cast_members = EXCLUDED.cast_members,
          variants = EXCLUDED.variants;
      `;

      console.log(`✓ [Movie] Ingested: ${data.title} (${data.releaseYear}) | ⭐ ${data.imdbRating}`);
    } catch (err: any) {
      console.error(`✗ Failed Movie: ${item.title} (${err.message})`);
    }
  }

  // 2. Ingest Series
  for (const item of MARVEL_SERIES) {
    try {
      const data = await scrapeImdb(item.id, "series");
      const slug = data.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");

      const baseId = slug;
      const seasons = [
        {
          seasonNumber: 1,
          seasonTitle: "Season 1 (Complete)",
          totalEpisodes: 6,
          batchPacks: [
            {
              id: `${baseId}-s1-zip-720p`,
              resolution: "720p" as const,
              formatLabel: `Complete Season 1 [720p 10-Bit HEVC]`,
              fileSize: "2.8 GB (Zip)",
              codec: "HEVC / x265",
              audioSpecs: "Hindi Org 5.1 + English 5.1",
              mirrors: [
                { id: "sb1", name: "Fast Cloud Direct", url: `https://hubcloud.club/drive/${baseId}-s1-zip`, isFast: true, type: "download" },
                { id: "sb2", name: "PixelDrain [Zip]", url: `https://pixeldrain.com/u/${baseId}-s1-zip`, type: "download" },
              ],
            },
          ],
          episodes: [
            {
              episodeNumber: 1,
              title: "Episode 1: Glorious Purpose",
              variants: [
                {
                  id: `${baseId}-s1e01-720p`,
                  resolution: "720p" as const,
                  formatLabel: "720p HEVC Dual Audio",
                  fileSize: "450 MB",
                  codec: "HEVC / x265",
                  audioSpecs: "Hindi + English",
                  mirrors: [
                    { id: "e1m1", name: "Fast Cloud", url: `https://hubcloud.club/drive/${baseId}-e1`, isFast: true, type: "download" },
                  ],
                },
              ],
            },
          ],
        },
      ];

      await sql`
        INSERT INTO media_items (
          id, slug, title, type, release_year, imdb_rating, runtime,
          genres, languages, subtitles, storyline, poster_url, backdrop_url,
          screenshots, tags, director, cast_members, variants, seasons
        ) VALUES (
          ${slug},
          ${slug},
          ${data.title},
          ${data.type},
          ${data.releaseYear},
          ${data.imdbRating},
          ${data.runtime},
          ${JSON.stringify(data.genres)}::jsonb,
          ${JSON.stringify(["Hindi (Org 5.1)", "English (Dolby Atmos)"])}::jsonb,
          ${JSON.stringify(["English (ESub)", "Hindi"])}::jsonb,
          ${data.storyline},
          ${data.posterUrl},
          ${data.backdropUrl},
          ${JSON.stringify([data.posterUrl, data.backdropUrl])}::jsonb,
          ${JSON.stringify(["Marvel", "Web Series", "Trending", "Dual Audio", "Complete"])}::jsonb,
          ${data.director},
          ${JSON.stringify(data.cast)}::jsonb,
          ${JSON.stringify([])}::jsonb,
          ${JSON.stringify(seasons)}::jsonb
        )
        ON CONFLICT (id) DO UPDATE SET
          title = EXCLUDED.title,
          slug = EXCLUDED.slug,
          type = EXCLUDED.type,
          release_year = EXCLUDED.release_year,
          imdb_rating = EXCLUDED.imdb_rating,
          runtime = EXCLUDED.runtime,
          genres = EXCLUDED.genres,
          storyline = EXCLUDED.storyline,
          poster_url = EXCLUDED.poster_url,
          backdrop_url = EXCLUDED.backdrop_url,
          tags = EXCLUDED.tags,
          director = EXCLUDED.director,
          cast_members = EXCLUDED.cast_members,
          seasons = EXCLUDED.seasons;
      `;

      console.log(`✓ [Series] Ingested: ${data.title} (${data.releaseYear}) | ⭐ ${data.imdbRating}`);
    } catch (err: any) {
      console.error(`✗ Failed Series: ${item.title} (${err.message})`);
    }
  }

  const countRes = await sql`SELECT count(*) FROM media_items;`;
  console.log(`\n🎉 INGESTION COMPLETE! Total items now stored in Neon: ${countRes[0].count}`);
}

ingestMarvelCollection().catch((err) => {
  console.error("Execution error:", err);
  process.exit(1);
});
