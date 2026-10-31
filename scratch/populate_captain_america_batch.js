const { neon } = require("@neondatabase/serverless");
require("dotenv").config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL);

async function run() {
  console.log("Updating Captain America franchise in Neon DB...");

  // 1. CAPTAIN AMERICA: THE FIRST AVENGER (2011)
  console.log("Updating Captain America: The First Avenger (2011)...");
  const ca1Variants = [
    {
      id: "ca1-480p-bluray",
      resolution: "480p",
      fileSize: "387.8 MB",
      formatLabel: "480p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD2.0/5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-ca1-480p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/f3djp3q_8qeqquy",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "ca1-720p-bluray",
      resolution: "720p",
      fileSize: "1.25 GB",
      formatLabel: "720p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-ca1-720p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/pcdjpjmpx4gjbfj",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "ca1-1080p-bluray",
      resolution: "1080p",
      fileSize: "2.46 GB",
      formatLabel: "1080p BluRay FHD [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-ca1-1080p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/99lhahduhtmhyit",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "ca1-1080p-10bit-bluray",
      resolution: "1080p",
      fileSize: "3.99 GB",
      formatLabel: "1080p 10-Bit HEVC BluRay [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
      codec: "HEVC / 10-Bit x265",
      mirrors: [
        {
          id: "m-ca1-1080p-10bit-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/1uyiduy0adumd0d",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "ca1-4k-bluray",
      resolution: "4K UHD",
      fileSize: "6.61 GB",
      formatLabel: "2160p 4K UHD BluRay Remux [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English TrueHD 7.1 Atmos",
      codec: "HEVC / 4K UHD BluRay",
      mirrors: [
        {
          id: "m-ca1-4k-vcloud",
          name: "Fast V-Cloud Direct VIP [Resumable]",
          url: "https://vcloud.beer/gjhdbb92nz9ddo5",
          type: "download",
          isFast: true
        }
      ]
    }
  ];

  const caTags = ["Marvel", "Hollywood", "Trending", "Dual Audio", "BluRay", "4K UHD", "Captain America", "MCU Phase 1"];

  await sql`
    UPDATE media_items
    SET 
      variants = ${JSON.stringify(ca1Variants)}::jsonb,
      tags = ${JSON.stringify(caTags)}::jsonb,
      languages = ${JSON.stringify(["Hindi (Org 5.1)", "English (Dolby Atmos)"])}::jsonb
    WHERE slug = 'captain-america-the-first-avenger' OR id = 'captain-america-the-first-avenger';
  `;
  console.log("Captain America: The First Avenger (2011) updated.");

  // 2. CAPTAIN AMERICA: THE WINTER SOLDIER (2014)
  console.log("Updating Captain America: The Winter Soldier (2014)...");
  const ca2Variants = [
    {
      id: "ca2-480p-bluray",
      resolution: "480p",
      fileSize: "406 MB",
      formatLabel: "480p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD2.0/5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-ca2-480p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/ohc7pqj8xw_pp7s",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "ca2-720p-bluray",
      resolution: "720p",
      fileSize: "1.11 GB",
      formatLabel: "720p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-ca2-720p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/bb9b_bwq9c__qww",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "ca2-1080p-bluray",
      resolution: "1080p",
      fileSize: "4.4 GB",
      formatLabel: "1080p BluRay FHD [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-ca2-1080p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/k7ccl8psnovllpg",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "ca2-1080p-60fps-bluray",
      resolution: "1080p",
      fileSize: "4.31 GB",
      formatLabel: "1080p 60FPS High-Frame-Rate BluRay [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
      codec: "HEVC / 60FPS x265",
      mirrors: [
        {
          id: "m-ca2-1080p-60fps-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/2xmx1kutu1kkssq",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "ca2-4k-bluray",
      resolution: "4K UHD",
      fileSize: "4.27 GB",
      formatLabel: "2160p 4K UHD BluRay Remux [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English TrueHD 7.1 Atmos",
      codec: "HEVC / 4K UHD BluRay",
      mirrors: [
        {
          id: "m-ca2-4k-vcloud",
          name: "Fast V-Cloud Direct VIP [Resumable]",
          url: "https://vcloud.beer/c4wqcsjz5zhjohk",
          type: "download",
          isFast: true
        }
      ]
    }
  ];

  await sql`
    UPDATE media_items
    SET 
      variants = ${JSON.stringify(ca2Variants)}::jsonb,
      tags = ${JSON.stringify(["Marvel", "Hollywood", "Trending", "Dual Audio", "BluRay", "4K UHD", "Captain America", "MCU Phase 2"])}::jsonb,
      languages = ${JSON.stringify(["Hindi (Org 5.1)", "English (Dolby Atmos)"])}::jsonb
    WHERE slug = 'captain-america-the-winter-soldier' OR id = 'captain-america-the-winter-soldier';
  `;
  console.log("Captain America: The Winter Soldier (2014) updated.");

  // 3. CAPTAIN AMERICA: CIVIL WAR (2016)
  console.log("Updating Captain America: Civil War (2016)...");
  const ca3Variants = [
    {
      id: "ca3-480p-bluray",
      resolution: "480p",
      fileSize: "460.31 MB",
      formatLabel: "480p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD2.0/5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-ca3-480p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/x6a34v6qp6imise",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "ca3-720p-bluray",
      resolution: "720p",
      fileSize: "1.48 GB",
      formatLabel: "720p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-ca3-720p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/vcp3lqpcqm34ivg",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "ca3-1080p-bluray",
      resolution: "1080p",
      fileSize: "4.38 GB",
      formatLabel: "1080p BluRay FHD [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-ca3-1080p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/tyymworog-orgyy",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "ca3-1080p-10bit-bluray",
      resolution: "1080p",
      fileSize: "4.68 GB",
      formatLabel: "1080p 10-Bit HEVC BluRay [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
      codec: "HEVC / 10-Bit x265",
      mirrors: [
        {
          id: "m-ca3-1080p-10bit-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/mhise4s9ed7ih78",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "ca3-4k-bluray",
      resolution: "4K UHD",
      fileSize: "7.26 GB",
      formatLabel: "2160p 4K UHD BluRay Remux [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English TrueHD 7.1 Atmos",
      codec: "HEVC / 4K UHD BluRay",
      mirrors: [
        {
          id: "m-ca3-4k-vcloud",
          name: "Fast V-Cloud Direct VIP [Resumable]",
          url: "https://vcloud.beer/-shyttl6azhh29k",
          type: "download",
          isFast: true
        }
      ]
    }
  ];

  await sql`
    UPDATE media_items
    SET 
      variants = ${JSON.stringify(ca3Variants)}::jsonb,
      tags = ${JSON.stringify(["Marvel", "Hollywood", "Trending", "Dual Audio", "BluRay", "4K UHD", "Captain America", "MCU Phase 3"])}::jsonb,
      languages = ${JSON.stringify(["Hindi (Org 5.1)", "English (Dolby Atmos)"])}::jsonb
    WHERE slug = 'captain-america-civil-war' OR id = 'captain-america-civil-war';
  `;
  console.log("Captain America: Civil War (2016) updated.");

  // 4. CAPTAIN AMERICA: BRAVE NEW WORLD (2025)
  console.log("Upserting Captain America: Brave New World (2025)...");
  const ca4Variants = [
    {
      id: "ca4-480p-bluray",
      resolution: "480p",
      fileSize: "512 MB",
      formatLabel: "480p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD2.0/5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-ca4-480p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/pwb0rjpwhwdepsp",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "ca4-720p-10bit-bluray",
      resolution: "720p",
      fileSize: "853 MB",
      formatLabel: "720p 10-Bit HEVC BluRay [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English DD5.1",
      codec: "HEVC / 10-Bit x265",
      mirrors: [
        {
          id: "m-ca4-720p-10bit-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/wzrdzfnb0zrwgnz",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "ca4-720p-bluray",
      resolution: "720p",
      fileSize: "1.3 GB",
      formatLabel: "720p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-ca4-720p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/uvq66xzniwq3nuz",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "ca4-1080p-bluray",
      resolution: "1080p",
      fileSize: "2.9 GB",
      formatLabel: "1080p BluRay FHD [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-ca4-1080p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/yn0tey9qrxrt099",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "ca4-1080p-highbitrate",
      resolution: "1080p",
      fileSize: "9.3 GB",
      formatLabel: "1080p BluRay High-Bitrate Remux [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English Dolby TrueHD 7.1 Atmos",
      codec: "x264 / BluRay High-Bitrate",
      mirrors: [
        {
          id: "m-ca4-1080p-hb-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/wepwhlkjwst6utd",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "ca4-4k-bluray",
      resolution: "4K UHD",
      fileSize: "20.94 GB",
      formatLabel: "2160p 4K UHD BluRay Remux [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English Dolby TrueHD 7.1 Atmos",
      codec: "HEVC / 4K UHD BluRay",
      mirrors: [
        {
          id: "m-ca4-4k-vcloud",
          name: "Fast V-Cloud Direct VIP [Resumable]",
          url: "https://vcloud.beer/pr1hgb0gv7csivv",
          type: "download",
          isFast: true
        }
      ]
    }
  ];

  await sql`
    INSERT INTO media_items (
      id, slug, title, type, release_year, imdb_rating, runtime,
      genres, languages, subtitles, storyline,
      poster_url, backdrop_url, screenshots, tags,
      director, cast_members, variants, seasons
    ) VALUES (
      'captain-america-brave-new-world',
      'captain-america-brave-new-world',
      'Captain America: Brave New World',
      'movie',
      2025,
      7.2,
      '118 min',
      ${JSON.stringify(["Action", "Sci-Fi", "Adventure"])}::jsonb,
      ${JSON.stringify(["Hindi (Org 5.1)", "English (Dolby Atmos)"])}::jsonb,
      ${JSON.stringify(["English (ESub)", "Hindi"])}::jsonb,
      'After meeting with newly elected U.S. President Thaddeus Ross, Sam Wilson finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before the true mastermind has the entire world seeing red.',
      'https://images.metahub.space/poster/medium/tt14513804/img',
      'https://images.metahub.space/background/large/tt14513804/img',
      ${JSON.stringify(["https://images.metahub.space/background/large/tt14513804/img"])}::jsonb,
      ${JSON.stringify(["Marvel", "Hollywood", "Trending", "Dual Audio", "BluRay", "4K UHD", "Captain America", "MCU Phase 5"])}::jsonb,
      'Julius Onah',
      ${JSON.stringify(["Anthony Mackie", "Harrison Ford", "Danny Ramirez", "Shira Haas", "Giancarlo Esposito"])}::jsonb,
      ${JSON.stringify(ca4Variants)}::jsonb,
      '[]'::jsonb
    )
    ON CONFLICT (id) DO UPDATE SET
      slug = EXCLUDED.slug,
      title = EXCLUDED.title,
      variants = EXCLUDED.variants,
      tags = EXCLUDED.tags,
      poster_url = EXCLUDED.poster_url,
      backdrop_url = EXCLUDED.backdrop_url,
      imdb_rating = EXCLUDED.imdb_rating;
  `;
  console.log("Captain America: Brave New World (2025) upserted.");

  console.log("ALL 4 CAPTAIN AMERICA MOVIES SUCCESSFULLY POPULATED IN DATABASE!");
}

run().catch((err) => {
  console.error("DB update error:", err);
  process.exit(1);
});
