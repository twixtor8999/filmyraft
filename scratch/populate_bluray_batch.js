const { neon } = require("@neondatabase/serverless");
require("dotenv").config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL);

async function run() {
  console.log("Starting DB update for Iron Man 2, Iron Man 3, X-Men 1, X-Men 2, X-Men 3, and X-Men Origins: Wolverine...");

  // 1. IRON MAN 2 (2010)
  console.log("Updating Iron Man 2...");
  const im2Variants = [
    {
      id: "iron-man-2-480p-bluray",
      resolution: "480p",
      fileSize: "400 MB",
      formatLabel: "480p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-im2-480p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/oa6px6fhf1fohns",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "iron-man-2-720p-bluray",
      resolution: "720p",
      fileSize: "1.14 GB",
      formatLabel: "720p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-im2-720p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/dwhbzr66oswrehn",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "iron-man-2-1080p-bluray",
      resolution: "1080p",
      fileSize: "4.27 GB",
      formatLabel: "1080p BluRay FHD [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English Atmos",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-im2-1080p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/1nmciynguyuuund",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "iron-man-2-4k-bluray",
      resolution: "4K UHD",
      fileSize: "20.1 GB",
      formatLabel: "2160p 4K UHD BluRay Remux [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English TrueHD 7.1 Atmos",
      codec: "HEVC / 4K UHD BluRay",
      mirrors: [
        {
          id: "m-im2-4k-vcloud",
          name: "Fast V-Cloud Direct VIP [Resumable]",
          url: "https://vcloud.beer/_qupprc7vnpxs1v",
          type: "download",
          isFast: true
        }
      ]
    }
  ];

  const im2Tags = ["Marvel", "Hollywood", "Trending", "Dual Audio", "BluRay", "MCU Phase 1"];
  const im2Languages = ["Hindi (Org DD5.1)", "English (Dolby Atmos)"];

  await sql`
    UPDATE media_items
    SET 
      variants = ${JSON.stringify(im2Variants)}::jsonb,
      tags = ${JSON.stringify(im2Tags)}::jsonb,
      languages = ${JSON.stringify(im2Languages)}::jsonb
    WHERE slug = 'iron-man-2' OR id = 'iron-man-2';
  `;
  console.log("Iron Man 2 updated.");

  // 2. IRON MAN 3 (2013)
  console.log("Updating Iron Man 3...");
  const im3Variants = [
    {
      id: "iron-man-3-480p-bluray",
      resolution: "480p",
      fileSize: "421 MB",
      formatLabel: "480p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-im3-480p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/33h3a0oey5xh0xk",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "iron-man-3-720p-bluray",
      resolution: "720p",
      fileSize: "1.28 GB",
      formatLabel: "720p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-im3-720p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/iddidcydyizgy_a",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "iron-man-3-1080p-bluray",
      resolution: "1080p",
      fileSize: "3.02 GB",
      formatLabel: "1080p BluRay FHD [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English Atmos",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-im3-1080p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/kctrac888mtyx0q",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "iron-man-3-4k-bluray",
      resolution: "4K UHD",
      fileSize: "7.21 GB",
      formatLabel: "2160p 4K UHD BluRay HDR [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English TrueHD 7.1 Atmos",
      codec: "HEVC / 4K UHD BluRay",
      mirrors: [
        {
          id: "m-im3-4k-vcloud",
          name: "Fast V-Cloud Direct VIP [Resumable]",
          url: "https://vcloud.beer/taiubnwb01cfmc1",
          type: "download",
          isFast: true
        }
      ]
    }
  ];

  const im3Tags = ["Marvel", "Hollywood", "Trending", "Dual Audio", "BluRay", "MCU Phase 2"];
  const im3Languages = ["Hindi (Org DD5.1)", "English (Dolby Atmos)"];

  await sql`
    UPDATE media_items
    SET 
      variants = ${JSON.stringify(im3Variants)}::jsonb,
      tags = ${JSON.stringify(im3Tags)}::jsonb,
      languages = ${JSON.stringify(im3Languages)}::jsonb
    WHERE slug = 'iron-man-3' OR id = 'iron-man-3';
  `;
  console.log("Iron Man 3 updated.");

  // 3. X-MEN (2000)
  console.log("Updating X-Men (2000)...");
  const xm1Variants = [
    {
      id: "xmen-1-480p-bluray",
      resolution: "480p",
      fileSize: "312.3 MB",
      formatLabel: "480p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD2.0/5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-xm1-480p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/kphiwrnndpgd6i1",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "xmen-1-720p-bluray",
      resolution: "720p",
      fileSize: "760 MB",
      formatLabel: "720p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-xm1-720p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/q-f8d-qj888dgq5",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "xmen-1-1080p-bluray",
      resolution: "1080p",
      fileSize: "2.09 GB",
      formatLabel: "1080p BluRay FHD Remastered [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-xm1-1080p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/mwykbi7iatjd_kk",
          type: "download",
          isFast: true
        }
      ]
    }
  ];

  const xm1Tags = ["Marvel", "Hollywood", "Dual Audio", "BluRay", "X-Men"];
  const xm1Languages = ["Hindi (Org 5.1)", "English (Dolby Atmos)"];

  await sql`
    UPDATE media_items
    SET 
      variants = ${JSON.stringify(xm1Variants)}::jsonb,
      tags = ${JSON.stringify(xm1Tags)}::jsonb,
      languages = ${JSON.stringify(xm1Languages)}::jsonb
    WHERE slug = 'x-men-2000' OR id = 'x-men-2000';
  `;
  console.log("X-Men (2000) updated.");

  // 4. X-MEN 2 (2003)
  console.log("Upserting X-Men 2 (2003)...");
  const xm2Variants = [
    {
      id: "xmen-2-480p-bluray",
      resolution: "480p",
      fileSize: "400 MB",
      formatLabel: "480p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD2.0/5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-xm2-480p-fastdl",
          name: "Fast Direct Download [Resumable]",
          url: "https://fastdl.beer/dl.php?link=https://video-downloads.googleusercontent.com/ADGPM2mg1e7ZXnpum7pou4CRHhM8eOOVpJzfg5788_R4BUtJ8P9F01h7lNdMXMBv3UVA44pGK7VnnGaL3n-DxcgNL--ft3_qp53qHqqswPjdEA6Ccfp57Fq61VQGtHNxaWionGgcs3E_Lg-2DMHRd-M_PX0J6jNSUglR-QpXUb2nHL8PrdAyyWELGcVxyIb8sMHD8_rFj9ym_MEClHNgglj2MM4yuMJFzj9h9sFKPIT-H2k2RrXm6Rkpm7uqhio_vw9vUgilOHhr8a77b65OlBamniA3xaaRGw",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "xmen-2-720p-bluray",
      resolution: "720p",
      fileSize: "740 MB",
      formatLabel: "720p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-xm2-720p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/lomol71-vbzqhsv",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "xmen-2-1080p-bluray",
      resolution: "1080p",
      fileSize: "2.70 GB",
      formatLabel: "1080p BluRay FHD Remastered [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-xm2-1080p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/f3v8j6yy6a1xoyw",
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
      'x-men-2',
      'x-men-2',
      'X-Men 2',
      'movie',
      2003,
      7.4,
      '134 min',
      ${JSON.stringify(["Action", "Sci-Fi", "Thriller"])}::jsonb,
      ${JSON.stringify(["Hindi (Org 5.1)", "English (Dolby Atmos)"])}::jsonb,
      ${JSON.stringify(["English (ESub)", "Hindi"])}::jsonb,
      'When the anti-mutant Colonel William Stryker kidnaps Professor X and attacks his school, the X-Men must ally with their former enemy, Magneto, to stop him.',
      'https://images.metahub.space/poster/medium/tt0290334/img',
      'https://images.metahub.space/background/large/tt0290334/img',
      ${JSON.stringify(["https://images.metahub.space/background/large/tt0290334/img"])}::jsonb,
      ${JSON.stringify(["Marvel", "Hollywood", "Dual Audio", "BluRay", "X-Men"])}::jsonb,
      'Bryan Singer',
      ${JSON.stringify(["Patrick Stewart", "Hugh Jackman", "Ian McKellen", "Halle Berry", "Famke Janssen"])}::jsonb,
      ${JSON.stringify(xm2Variants)}::jsonb,
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
  console.log("X-Men 2 upserted.");

  // 5. X-MEN 3: THE LAST STAND (2006)
  console.log("Upserting X-Men: The Last Stand (2006)...");
  const xm3Variants = [
    {
      id: "xmen-3-480p-bluray",
      resolution: "480p",
      fileSize: "313 MB",
      formatLabel: "480p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD2.0/5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-xm3-480p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/7gonqxx8q8k7bn1",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "xmen-3-720p-bluray",
      resolution: "720p",
      fileSize: "713 MB",
      formatLabel: "720p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-xm3-720p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/b-gh5kfu5rh-k5f",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "xmen-3-1080p-bluray",
      resolution: "1080p",
      fileSize: "3.19 GB",
      formatLabel: "1080p BluRay FHD Remastered [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-xm3-1080p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/xlbbwwbajm4afg8",
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
      'x-men-the-last-stand',
      'x-men-the-last-stand',
      'X-Men: The Last Stand',
      'movie',
      2006,
      6.6,
      '104 min',
      ${JSON.stringify(["Action", "Sci-Fi", "Adventure"])}::jsonb,
      ${JSON.stringify(["Hindi (Org 5.1)", "English (Dolby Atmos)"])}::jsonb,
      ${JSON.stringify(["English (ESub)", "Hindi"])}::jsonb,
      'The discovery of a cure for mutations leads to a clash between the X-Men and the Brotherhood of Mutants, while Jean Grey returns as the immensely powerful and destructive Phoenix.',
      'https://images.metahub.space/poster/medium/tt0376994/img',
      'https://images.metahub.space/background/large/tt0376994/img',
      ${JSON.stringify(["https://images.metahub.space/background/large/tt0376994/img"])}::jsonb,
      ${JSON.stringify(["Marvel", "Hollywood", "Dual Audio", "BluRay", "X-Men"])}::jsonb,
      'Brett Ratner',
      ${JSON.stringify(["Hugh Jackman", "Halle Berry", "Ian McKellen", "Patrick Stewart", "Famke Janssen"])}::jsonb,
      ${JSON.stringify(xm3Variants)}::jsonb,
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
  console.log("X-Men: The Last Stand upserted.");

  // 6. X-MEN ORIGINS: WOLVERINE (2009)
  console.log("Upserting X-Men Origins: Wolverine (2009)...");
  const xowVariants = [
    {
      id: "xmen-origins-wolverine-480p-bluray",
      resolution: "480p",
      fileSize: "321 MB",
      formatLabel: "480p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD2.0/5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-xow-480p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/7kktkni7kmndchk",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "xmen-origins-wolverine-720p-bluray",
      resolution: "720p",
      fileSize: "680.56 MB",
      formatLabel: "720p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-xow-720p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/uzo36usgkmvfw17",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "xmen-origins-wolverine-1080p-bluray",
      resolution: "1080p",
      fileSize: "2.16 GB",
      formatLabel: "1080p BluRay FHD Remastered [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-xow-1080p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/kvcea8zcvbarbba",
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
      'x-men-origins-wolverine',
      'x-men-origins-wolverine',
      'X-Men Origins: Wolverine',
      'movie',
      2009,
      6.5,
      '107 min',
      ${JSON.stringify(["Action", "Sci-Fi", "Adventure"])}::jsonb,
      ${JSON.stringify(["Hindi (Org 5.1)", "English (Dolby Atmos)"])}::jsonb,
      ${JSON.stringify(["English (ESub)", "Hindi"])}::jsonb,
      'The early years of James Logan, featuring his rivalry with his brother Victor Creed, his service in the special military Unit X, and his infusion with the indestructible metal adamantium.',
      'https://images.metahub.space/poster/medium/tt0458525/img',
      'https://images.metahub.space/background/large/tt0458525/img',
      ${JSON.stringify(["https://images.metahub.space/background/large/tt0458525/img"])}::jsonb,
      ${JSON.stringify(["Marvel", "Hollywood", "Dual Audio", "BluRay", "X-Men", "Wolverine"])}::jsonb,
      'Gavin Hood',
      ${JSON.stringify(["Hugh Jackman", "Liev Schreiber", "Ryan Reynolds", "Danny Huston", "Lynn Collins"])}::jsonb,
      ${JSON.stringify(xowVariants)}::jsonb,
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
  console.log("X-Men Origins: Wolverine upserted.");

  console.log("ALL 6 MOVIES SUCCESSFULLY POPULATED IN DATABASE!");
}

run().catch((err) => {
  console.error("Error executing populate script:", err);
  process.exit(1);
});
