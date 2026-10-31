const { neon } = require("@neondatabase/serverless");
require("dotenv").config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL);

async function run() {
  console.log("Updating X-Men: Days of Future Past, X-Men: Apocalypse, and X-Men: Dark Phoenix...");

  // 1. X-MEN: DAYS OF FUTURE PAST (2014)
  console.log("Updating X-Men: Days of Future Past...");
  const dofpVariants = [
    {
      id: "xmen-dofp-480p-bluray",
      resolution: "480p",
      fileSize: "500 MB",
      formatLabel: "480p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD2.0/5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-dofp-480p-fastdl",
          name: "Fast Direct Download [Resumable]",
          url: "https://fastdl.beer/dl.php?link=https://video-downloads.googleusercontent.com/ADGPM2kqycYYbj_WnIkYNU1YVG-_PGZfE19zSu1aQ1lHkz35SyzmGe350NXneNVMHLKMpq3hScJz7-C2SCrtiadNnkOUL4Ot8xt2_DX-wcUFtA948GwAKa0KtcxP8QWOKKnMuCjYryUJqvOUyhluMpcpCYA_O3KWWxg3Bt0xx0_5g_hhJMKAb4gTswcYOzU2oFfoHNBtdqHbE_OwHmFL-t9Pl-Jr7ZrG-OQcXpPblC2tTsCb-rzZsTmSYCFQ9SQfQhL5uC6krRPpPKrrLsIr1GWRj6utxMTFBQ",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "xmen-dofp-720p-bluray",
      resolution: "720p",
      fileSize: "894 MB",
      formatLabel: "720p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-dofp-720p-fastdl",
          name: "Fast Direct Download [Resumable]",
          url: "https://fastdl.beer/dl.php?link=https://video-downloads.googleusercontent.com/ADGPM2mgpbAtRip-93yJLWiKtm7eT-LNNOvlFrYz2x51NrU8JUCeONii0NDm2A7j9J7fyDMfBaJ6Wq-w2Ub6PiXpeR17MIeZkZcgpEC2DnxvWFpAnuRBP-qqY8_8z-zTACm0s13NMjaoNjonQjEpLQMY8pdtCvuafIW8mSJ0Q4cI5Hy5MfWrBCMm_1t6apYpqsZukkCSITuc3HZqMZRjDtUgFvMuXkxadVzKxloECWe5ugBZLUBNfGMK7wooWl75_v1mXTsbzy6gf9EGrCxDTcSIU-DqS1Bcdw",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "xmen-dofp-1080p-bluray",
      resolution: "1080p",
      fileSize: "2 GB",
      formatLabel: "1080p BluRay FHD Remastered [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-dofp-1080p-fastdl",
          name: "Fast Direct Download [Resumable]",
          url: "https://fastdl.beer/dl.php?link=https://video-downloads.googleusercontent.com/ADGPM2kAtwDCkj9C62sIGT7w975buKiLfmJdP7GdseRtXVjJC2bTlFZa7GGHUjOXOC-yh_TFZ_exCk-hL0BO-fBSkq9GL3GEpV5Il__RIWBtPtIruC9bUsaJ_1b3HjpuCUih_Mk6XMbWIeGaJEWRXsZh9bearyaWlIFZeKZHUdQpVJ-g1fhN_IjiDbwh-0oKk-Dib0ZQ80DORyuFGeq5GsT2g1fK5iAznFwb4marD8QqLID7ALAyzsGI9DOojicwkjqjuRnJP51FTOBIQJdTDuQg69XOqzYYvA",
          type: "download",
          isFast: true
        }
      ]
    }
  ];

  const dofpTags = ["Marvel", "Hollywood", "Dual Audio", "BluRay", "X-Men", "Trending"];

  await sql`
    UPDATE media_items
    SET 
      variants = ${JSON.stringify(dofpVariants)}::jsonb,
      tags = ${JSON.stringify(dofpTags)}::jsonb,
      languages = ${JSON.stringify(["Hindi (Org 5.1)", "English (Dolby Atmos)"])}::jsonb
    WHERE slug = 'x-men-days-of-future-past' OR id = 'x-men-days-of-future-past';
  `;
  console.log("X-Men: Days of Future Past updated.");

  // 2. X-MEN: APOCALYPSE (2016)
  console.log("Upserting X-Men: Apocalypse...");
  const apocalypseVariants = [
    {
      id: "xmen-apocalypse-480p-bluray",
      resolution: "480p",
      fileSize: "436 MB",
      formatLabel: "480p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD2.0/5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-xma-480p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/p3sc1epmyye5xje",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "xmen-apocalypse-720p-bluray",
      resolution: "720p",
      fileSize: "1.5 GB",
      formatLabel: "720p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-xma-720p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/u4u4uiis9fys40a",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "xmen-apocalypse-1080p-bluray",
      resolution: "1080p",
      fileSize: "2.9 GB",
      formatLabel: "1080p BluRay FHD [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-xma-1080p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/mhmqfzm1wwtuwfg",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "xmen-apocalypse-1080p-hq-bluray",
      resolution: "1080p",
      fileSize: "3.86 GB",
      formatLabel: "1080p BluRay High-Bitrate FHD [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-xma-1080p-hq-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/77a48w_o1xc4acc",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "xmen-apocalypse-4k-bluray",
      resolution: "4K UHD",
      fileSize: "14.21 GB",
      formatLabel: "2160p 4K UHD BluRay Remux [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English TrueHD 7.1 Atmos",
      codec: "HEVC / 4K UHD BluRay",
      mirrors: [
        {
          id: "m-xma-4k-vcloud",
          name: "Fast V-Cloud Direct VIP [Resumable]",
          url: "https://vcloud.beer/1b9d_ddwabcdxh-",
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
      'x-men-apocalypse',
      'x-men-apocalypse',
      'X-Men: Apocalypse',
      'movie',
      2016,
      6.9,
      '144 min',
      ${JSON.stringify(["Action", "Sci-Fi", "Adventure"])}::jsonb,
      ${JSON.stringify(["Hindi (Org 5.1)", "English (Dolby Atmos)"])}::jsonb,
      ${JSON.stringify(["English (ESub)", "Hindi"])}::jsonb,
      'In the 1980s, the emergence of the worlds first mutant, Apocalypse, brings destruction. The X-Men must unite to stop his world-ending plan.',
      'https://images.metahub.space/poster/medium/tt3385516/img',
      'https://images.metahub.space/background/large/tt3385516/img',
      ${JSON.stringify(["https://images.metahub.space/background/large/tt3385516/img"])}::jsonb,
      ${JSON.stringify(["Marvel", "Hollywood", "Dual Audio", "BluRay", "X-Men", "4K UHD"])}::jsonb,
      'Bryan Singer',
      ${JSON.stringify(["James McAvoy", "Michael Fassbender", "Jennifer Lawrence", "Oscar Isaac", "Nicholas Hoult", "Sophie Turner"])}::jsonb,
      ${JSON.stringify(apocalypseVariants)}::jsonb,
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
  console.log("X-Men: Apocalypse upserted.");

  // 3. X-MEN: DARK PHOENIX (2019)
  console.log("Updating X-Men: Dark Phoenix...");
  const darkPhoenixVariants = [
    {
      id: "dark-phoenix-480p-bluray",
      resolution: "480p",
      fileSize: "339 MB",
      formatLabel: "480p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD2.0/5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-dp-480p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/kbfwiwxhytyw6kp",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "dark-phoenix-720p-bluray",
      resolution: "720p",
      fileSize: "1.14 GB",
      formatLabel: "720p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-dp-720p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/uotuxm16apjxmpt",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "dark-phoenix-1080p-bluray",
      resolution: "1080p",
      fileSize: "3.21 GB",
      formatLabel: "1080p BluRay FHD [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-dp-1080p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/njun8sx5s1j1u1i",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "dark-phoenix-1080p-10bit-bluray",
      resolution: "1080p",
      fileSize: "3.05 GB",
      formatLabel: "1080p 10-Bit HEVC BluRay [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
      codec: "HEVC / 10-Bit x265",
      mirrors: [
        {
          id: "m-dp-1080p-10bit-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/appsxsexysrmsss",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "dark-phoenix-4k-bluray",
      resolution: "4K UHD",
      fileSize: "8.07 GB",
      formatLabel: "2160p 4K UHD BluRay HDR [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English TrueHD 7.1 Atmos",
      codec: "HEVC / 4K UHD BluRay",
      mirrors: [
        {
          id: "m-dp-4k-vcloud",
          name: "Fast V-Cloud Direct VIP [Resumable]",
          url: "https://vcloud.beer/p1z-smqnr6oy1cf",
          type: "download",
          isFast: true
        }
      ]
    }
  ];

  const dpTags = ["Marvel", "Hollywood", "Dual Audio", "BluRay", "X-Men", "4K UHD"];

  await sql`
    UPDATE media_items
    SET 
      title = 'X-Men: Dark Phoenix',
      slug = 'x-men-dark-phoenix',
      variants = ${JSON.stringify(darkPhoenixVariants)}::jsonb,
      tags = ${JSON.stringify(dpTags)}::jsonb,
      languages = ${JSON.stringify(["Hindi (Org 5.1)", "English (Dolby Atmos)"])}::jsonb
    WHERE slug = 'dark-phoenix-2019' OR id = 'dark-phoenix-2019';
  `;
  console.log("X-Men: Dark Phoenix updated.");

  // Also make sure X-Men: First Class has tag 'X-Men'
  await sql`
    UPDATE media_items
    SET tags = (
      SELECT jsonb_agg(DISTINCT elem)
      FROM jsonb_array_elements_text(tags || '["X-Men", "BluRay"]'::jsonb) AS elem
    )
    WHERE slug = 'x-men-first-class' OR id = 'x-men-first-class';
  `;
  console.log("X-Men: First Class tag updated.");

  console.log("All X-Men titles successfully updated in DB!");
}

run().catch((err) => {
  console.error("DB update error:", err);
  process.exit(1);
});
