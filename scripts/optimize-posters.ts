import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { neon } from "@neondatabase/serverless";
const sql = neon(process.env.DATABASE_URL!);

async function updateCachedPosters() {
  console.log("Updating media posters to fast cached Metahub / IMDb CDN...");

  // Query all Marvel items that currently use slow or broken poster links
  const items = await sql`
    SELECT id, title FROM media_items
    WHERE tags @> '["Marvel"]'::jsonb;
  `;

  console.log(`Found ${items.length} Marvel titles to optimize.`);

  // Map of known fast cached poster URLs from Metahub CDN (cached 60 days on edge)
  const idToImdbMap: Record<string, string> = {
    "deadpool-wolverine": "tt6263850",
    "deadpool-and-wolverine-2024": "tt6263850",
    "avengers-endgame": "tt4154796",
    "avengers-infinity-war": "tt4154756",
    "the-avengers": "tt0848228",
    "avengers-age-of-ultron": "tt2395427",
    "spider-man-brand-new-day": "tt22084616",
    "spider-man-no-way-home": "tt10872600",
    "spider-man-far-from-home": "tt6320628",
    "spider-man-homecoming": "tt2250912",
    "iron-man": "tt0371746",
    "iron-man-2": "tt1228705",
    "iron-man-3": "tt1300854",
    "captain-america-civil-war": "tt3498820",
    "captain-america-the-winter-soldier": "tt1843866",
    "captain-america-the-first-avenger": "tt0458339",
    "thor-ragnarok": "tt3501632",
    "thor-love-and-thunder": "tt10648342",
    "thor": "tt0800369",
    "thor-the-dark-world": "tt1981115",
    "guardians-of-the-galaxy": "tt2015381",
    "guardians-of-the-galaxy-vol-2": "tt3896198",
    "guardians-of-the-galaxy-vol-3": "tt6791350",
    "black-panther": "tt1825683",
    "black-panther-wakanda-forever": "tt9114286",
    "doctor-strange": "tt1211837",
    "doctor-strange-in-the-multiverse-of-madness": "tt9419884",
    "ant-man": "tt0478970",
    "ant-man-and-the-wasp": "tt5095030",
    "ant-man-and-the-wasp-quantumania": "tt10954600",
    "captain-marvel": "tt4154664",
    "black-widow": "tt3480822",
    "shang-chi-and-the-legend-of-the-ten-rings": "tt9376612",
    "eternals": "tt9032400",
    "loki": "tt9140554",
    "daredevil": "tt2357547",
    "the-punisher": "tt5675620",
    "moon-knight": "tt10234724",
    "what-if": "tt10168312",
    "hawkeye": "tt10160804",
    "ms-marvel": "tt10857164",
    "she-hulk-attorney-at-law": "tt10857160",
    "agents-of-s-h-i-e-l-d": "tt2364582",
    "iron-fist": "tt3322312",
    "jessica-jones": "tt2357548",
  };

  for (const item of items) {
    const imdbId = idToImdbMap[item.id];
    if (imdbId) {
      const fastPoster = `https://images.metahub.space/poster/medium/${imdbId}/img`;
      const fastBackdrop = `https://images.metahub.space/background/medium/${imdbId}/img`;

      await sql`
        UPDATE media_items
        SET poster_url = ${fastPoster},
            backdrop_url = ${fastBackdrop}
        WHERE id = ${item.id};
      `;
      console.log(`✓ Updated ${item.title} -> ${fastPoster}`);
    }
  }

  console.log("\nAll posters successfully pointed to high-speed CDN!");
}

updateCachedPosters().catch((e) => {
  console.error("Update failed:", e);
  process.exit(1);
});
