const { neon } = require("@neondatabase/serverless");
require("dotenv").config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL);

async function run() {
  console.log("Updating Moon Knight Season 1...");

  const mkEpisodes = [
    {
      episodeNumber: 1,
      title: "Episode 1",
      variants: [
        {
          id: "mk-s01-e01-480p",
          resolution: "480p",
          fileSize: "150 MB",
          codec: "x264 / WEB-DL",
          formatLabel: "Episode 1 [480p WEB-DL Dual Audio]",
          audioSpecs: "Hindi Org DD5.1 + English Atmos",
          mirrors: [
            {
              id: "m-mk-e01-480p",
              name: "Fast V-Cloud Direct [Resumable]",
              url: "https://vcloud.beer/yicm1xr1xitw43o",
              type: "download",
              isFast: true
            }
          ]
        },
        {
          id: "mk-s01-e01-720p",
          resolution: "720p",
          fileSize: "500 MB",
          codec: "x264 / WEB-DL DD5.1",
          formatLabel: "Episode 1 [720p WEB-DL Dual Audio]",
          audioSpecs: "Hindi Org DD5.1 + English Atmos",
          mirrors: [
            {
              id: "m-mk-e01-720p",
              name: "Fast V-Cloud Direct [Resumable]",
              url: "https://vcloud.beer/_m6u9nujivii966",
              type: "download",
              isFast: true
            }
          ]
        },
        {
          id: "mk-s01-e01-1080p",
          resolution: "1080p",
          fileSize: "1.34 GB",
          codec: "x264 / WEB-DL DD5.1",
          formatLabel: "Episode 1 [1080p WEB-DL Dual Audio]",
          audioSpecs: "Hindi Org DD5.1 + English Atmos",
          mirrors: [
            {
              id: "m-mk-e01-1080p",
              name: "Fast V-Cloud Direct [Resumable]",
              url: "https://vcloud.beer/bbkjsmjhzbvqqkh",
              type: "download",
              isFast: true
            }
          ]
        },
        {
          id: "mk-s01-e01-4k",
          resolution: "4K UHD",
          fileSize: "6.74 GB",
          codec: "HEVC / 4K WEB-DL HDR",
          formatLabel: "Episode 1 [2160p 4K UHD WEB-DL Dual Audio]",
          audioSpecs: "Hindi Org DDP5.1 + English Atmos",
          mirrors: [
            {
              id: "m-mk-e01-4k",
              name: "Fast V-Cloud Direct VIP [Resumable]",
              url: "https://vcloud.beer/-448uh8t-duc1l7",
              type: "download",
              isFast: true
            }
          ]
        }
      ]
    },
    {
      episodeNumber: 2,
      title: "Episode 2",
      variants: [
        {
          id: "mk-s01-e02-480p",
          resolution: "480p",
          fileSize: "183 MB",
          codec: "x264 / WEB-DL",
          formatLabel: "Episode 2 [480p WEB-DL Dual Audio]",
          audioSpecs: "Hindi Org DD5.1 + English Atmos",
          mirrors: [
            {
              id: "m-mk-e02-480p",
              name: "Fast V-Cloud Direct [Resumable]",
              url: "https://vcloud.beer/paggptj1omgrmom",
              type: "download",
              isFast: true
            }
          ]
        },
        {
          id: "mk-s01-e02-720p",
          resolution: "720p",
          fileSize: "451 MB",
          codec: "x264 / WEB-DL DD5.1",
          formatLabel: "Episode 2 [720p WEB-DL Dual Audio]",
          audioSpecs: "Hindi Org DD5.1 + English Atmos",
          mirrors: [
            {
              id: "m-mk-e02-720p",
              name: "Fast V-Cloud Direct [Resumable]",
              url: "https://vcloud.beer/idsdr5nss5olnir",
              type: "download",
              isFast: true
            }
          ]
        },
        {
          id: "mk-s01-e02-1080p",
          resolution: "1080p",
          fileSize: "1.48 GB",
          codec: "x264 / WEB-DL DD5.1",
          formatLabel: "Episode 2 [1080p WEB-DL Dual Audio]",
          audioSpecs: "Hindi Org DD5.1 + English Atmos",
          mirrors: [
            {
              id: "m-mk-e02-1080p",
              name: "Fast V-Cloud Direct [Resumable]",
              url: "https://vcloud.beer/a1nhacdvadq7cfa",
              type: "download",
              isFast: true
            }
          ]
        },
        {
          id: "mk-s01-e02-4k",
          resolution: "4K UHD",
          fileSize: "7.25 GB",
          codec: "HEVC / 4K WEB-DL HDR",
          formatLabel: "Episode 2 [2160p 4K UHD WEB-DL Dual Audio]",
          audioSpecs: "Hindi Org DDP5.1 + English Atmos",
          mirrors: [
            {
              id: "m-mk-e02-4k",
              name: "Fast V-Cloud Direct VIP [Resumable]",
              url: "https://vcloud.beer/q-vddpab33tvads",
              type: "download",
              isFast: true
            }
          ]
        }
      ]
    },
    {
      episodeNumber: 3,
      title: "Episode 3",
      variants: [
        {
          id: "mk-s01-e03-480p",
          resolution: "480p",
          fileSize: "227 MB",
          codec: "x264 / WEB-DL",
          formatLabel: "Episode 3 [480p WEB-DL Dual Audio]",
          audioSpecs: "Hindi Org DD5.1 + English Atmos",
          mirrors: [
            {
              id: "m-mk-e03-480p",
              name: "Fast V-Cloud Direct [Resumable]",
              url: "https://vcloud.beer/xcxnelb9qetd22n",
              type: "download",
              isFast: true
            }
          ]
        },
        {
          id: "mk-s01-e03-720p",
          resolution: "720p",
          fileSize: "490 MB",
          codec: "x264 / WEB-DL DD5.1",
          formatLabel: "Episode 3 [720p WEB-DL Dual Audio]",
          audioSpecs: "Hindi Org DD5.1 + English Atmos",
          mirrors: [
            {
              id: "m-mk-e03-720p",
              name: "Fast V-Cloud Direct [Resumable]",
              url: "https://vcloud.beer/warfyjb2tomf4rt",
              type: "download",
              isFast: true
            }
          ]
        },
        {
          id: "mk-s01-e03-1080p",
          resolution: "1080p",
          fileSize: "1.69 GB",
          codec: "x264 / WEB-DL DD5.1",
          formatLabel: "Episode 3 [1080p WEB-DL Dual Audio]",
          audioSpecs: "Hindi Org DD5.1 + English Atmos",
          mirrors: [
            {
              id: "m-mk-e03-1080p",
              name: "Fast V-Cloud Direct [Resumable]",
              url: "https://vcloud.beer/skslhlslmlsvhee",
              type: "download",
              isFast: true
            }
          ]
        },
        {
          id: "mk-s01-e03-4k",
          resolution: "4K UHD",
          fileSize: "7.19 GB",
          codec: "HEVC / 4K WEB-DL HDR",
          formatLabel: "Episode 3 [2160p 4K UHD WEB-DL Dual Audio]",
          audioSpecs: "Hindi Org DDP5.1 + English Atmos",
          mirrors: [
            {
              id: "m-mk-e03-4k",
              name: "Fast V-Cloud Direct VIP [Resumable]",
              url: "https://vcloud.beer/8wgw1dtawctny68",
              type: "download",
              isFast: true
            }
          ]
        }
      ]
    },
    {
      episodeNumber: 4,
      title: "Episode 4",
      variants: [
        {
          id: "mk-s01-e04-480p",
          resolution: "480p",
          fileSize: "185 MB",
          codec: "x264 / WEB-DL",
          formatLabel: "Episode 4 [480p WEB-DL Dual Audio]",
          audioSpecs: "Hindi Org DD5.1 + English Atmos",
          mirrors: [
            {
              id: "m-mk-e04-480p",
              name: "Fast V-Cloud Direct [Resumable]",
              url: "https://vcloud.beer/yvj6lwvp0sjr06m",
              type: "download",
              isFast: true
            }
          ]
        },
        {
          id: "mk-s01-e04-720p",
          resolution: "720p",
          fileSize: "534 MB",
          codec: "x264 / WEB-DL DD5.1",
          formatLabel: "Episode 4 [720p WEB-DL Dual Audio]",
          audioSpecs: "Hindi Org DD5.1 + English Atmos",
          mirrors: [
            {
              id: "m-mk-e04-720p",
              name: "Fast V-Cloud Direct [Resumable]",
              url: "https://vcloud.beer/ftssstfgqq50tt5",
              type: "download",
              isFast: true
            }
          ]
        },
        {
          id: "mk-s01-e04-1080p",
          resolution: "1080p",
          fileSize: "1.71 GB",
          codec: "x264 / WEB-DL DD5.1",
          formatLabel: "Episode 4 [1080p WEB-DL Dual Audio]",
          audioSpecs: "Hindi Org DD5.1 + English Atmos",
          mirrors: [
            {
              id: "m-mk-e04-1080p",
              name: "Fast V-Cloud Direct [Resumable]",
              url: "https://vcloud.beer/btvw3mwowzbwa10",
              type: "download",
              isFast: true
            }
          ]
        },
        {
          id: "mk-s01-e04-4k",
          resolution: "4K UHD",
          fileSize: "7.47 GB",
          codec: "HEVC / 4K WEB-DL HDR",
          formatLabel: "Episode 4 [2160p 4K UHD WEB-DL Dual Audio]",
          audioSpecs: "Hindi Org DDP5.1 + English Atmos",
          mirrors: [
            {
              id: "m-mk-e04-4k",
              name: "Fast V-Cloud Direct VIP [Resumable]",
              url: "https://vcloud.beer/tipac8ayaw6ajlc",
              type: "download",
              isFast: true
            }
          ]
        }
      ]
    },
    {
      episodeNumber: 5,
      title: "Episode 5",
      variants: [
        {
          id: "mk-s01-e05-480p",
          resolution: "480p",
          fileSize: "168 MB",
          codec: "x264 / WEB-DL",
          formatLabel: "Episode 5 [480p WEB-DL Dual Audio]",
          audioSpecs: "Hindi Org DD5.1 + English Atmos",
          mirrors: [
            {
              id: "m-mk-e05-480p",
              name: "Fast V-Cloud Direct [Resumable]",
              url: "https://vcloud.beer/9cfvoazna1az1av",
              type: "download",
              isFast: true
            }
          ]
        },
        {
          id: "mk-s01-e05-720p",
          resolution: "720p",
          fileSize: "554 MB",
          codec: "x264 / WEB-DL DD5.1",
          formatLabel: "Episode 5 [720p WEB-DL Dual Audio]",
          audioSpecs: "Hindi Org DD5.1 + English Atmos",
          mirrors: [
            {
              id: "m-mk-e05-720p",
              name: "Fast V-Cloud Direct [Resumable]",
              url: "https://vcloud.beer/xmm9dwcfl-9dxmj",
              type: "download",
              isFast: true
            }
          ]
        },
        {
          id: "mk-s01-e05-1080p",
          resolution: "1080p",
          fileSize: "1.57 GB",
          codec: "x264 / WEB-DL DD5.1",
          formatLabel: "Episode 5 [1080p WEB-DL Dual Audio]",
          audioSpecs: "Hindi Org DD5.1 + English Atmos",
          mirrors: [
            {
              id: "m-mk-e05-1080p",
              name: "Fast V-Cloud Direct [Resumable]",
              url: "https://vcloud.beer/m1mbv3mjeemjmcm",
              type: "download",
              isFast: true
            }
          ]
        },
        {
          id: "mk-s01-e05-4k",
          resolution: "4K UHD",
          fileSize: "6.72 GB",
          codec: "HEVC / 4K WEB-DL HDR",
          formatLabel: "Episode 5 [2160p 4K UHD WEB-DL Dual Audio]",
          audioSpecs: "Hindi Org DDP5.1 + English Atmos",
          mirrors: [
            {
              id: "m-mk-e05-4k",
              name: "Fast V-Cloud Direct VIP [Resumable]",
              url: "https://vcloud.beer/zoptzlpulzfdtxc",
              type: "download",
              isFast: true
            }
          ]
        }
      ]
    },
    {
      episodeNumber: 6,
      title: "Episode 6",
      variants: [
        {
          id: "mk-s01-e06-480p",
          resolution: "480p",
          fileSize: "230.43 MB",
          codec: "x264 / WEB-DL",
          formatLabel: "Episode 6 [480p WEB-DL Dual Audio]",
          audioSpecs: "Hindi Org DD5.1 + English Atmos",
          mirrors: [
            {
              id: "m-mk-e06-480p",
              name: "Fast V-Cloud Direct [Resumable]",
              url: "https://vcloud.beer/ab6d96yd1pfoftc",
              type: "download",
              isFast: true
            }
          ]
        },
        {
          id: "mk-s01-e06-720p",
          resolution: "720p",
          fileSize: "522 MB",
          codec: "x264 / WEB-DL DD5.1",
          formatLabel: "Episode 6 [720p WEB-DL Dual Audio]",
          audioSpecs: "Hindi Org DD5.1 + English Atmos",
          mirrors: [
            {
              id: "m-mk-e06-720p",
              name: "Fast V-Cloud Direct [Resumable]",
              url: "https://vcloud.beer/phcmmcm1caeh00j",
              type: "download",
              isFast: true
            }
          ]
        },
        {
          id: "mk-s01-e06-1080p",
          resolution: "1080p",
          fileSize: "1.41 GB",
          codec: "x264 / WEB-DL DD5.1",
          formatLabel: "Episode 6 [1080p WEB-DL Dual Audio]",
          audioSpecs: "Hindi Org DD5.1 + English Atmos",
          mirrors: [
            {
              id: "m-mk-e06-1080p",
              name: "Fast V-Cloud Direct [Resumable]",
              url: "https://vcloud.beer/uucdh007e55yh0u",
              type: "download",
              isFast: true
            }
          ]
        },
        {
          id: "mk-s01-e06-4k",
          resolution: "4K UHD",
          fileSize: "6.04 GB",
          codec: "HEVC / 4K WEB-DL HDR",
          formatLabel: "Episode 6 [2160p 4K UHD WEB-DL Dual Audio]",
          audioSpecs: "Hindi Org DDP5.1 + English Atmos",
          mirrors: [
            {
              id: "m-mk-e06-4k",
              name: "Fast V-Cloud Direct VIP [Resumable]",
              url: "https://vcloud.beer/kmmca1maj3anmo_",
              type: "download",
              isFast: true
            }
          ]
        }
      ]
    }
  ];

  const mkBatchPacks = [
    {
      id: "mk-s01-zip-480p",
      resolution: "480p",
      fileSize: "1.12 GB (Zip)",
      formatLabel: "Complete Season 1 [480p WEB-DL Zip]",
      codec: "x264 / WEB-DL",
      audioSpecs: "Hindi DD5.1 + English Atmos",
      mirrors: [
        {
          id: "m-mk-zip-480p",
          name: "Fast V-Cloud Direct [Zip]",
          url: "https://vcloud.beer/hcifmelbnslafef",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "mk-s01-zip-720p",
      resolution: "720p",
      fileSize: "2.89 GB (Zip)",
      formatLabel: "Complete Season 1 [720p WEB-DL Zip]",
      codec: "x264 / WEB-DL DD5.1",
      audioSpecs: "Hindi DD5.1 + English Atmos",
      mirrors: [
        {
          id: "m-mk-zip-720p",
          name: "Fast V-Cloud Direct [Zip]",
          url: "https://vcloud.beer/obdsux11qhk71eh",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "mk-s01-zip-1080p",
      resolution: "1080p",
      fileSize: "9.21 GB (Zip)",
      formatLabel: "Complete Season 1 [1080p WEB-DL Zip]",
      codec: "x264 / WEB-DL DD5.1",
      audioSpecs: "Hindi DD5.1 + English Atmos",
      mirrors: [
        {
          id: "m-mk-zip-1080p",
          name: "Fast V-Cloud Direct [Zip]",
          url: "https://vcloud.beer/rzrvpiihuhsuhui",
          type: "download",
          isFast: true
        }
      ]
    }
  ];

  const mkSeasons = [
    {
      seasonNumber: 1,
      seasonTitle: "Season 1",
      totalEpisodes: 6,
      batchPacks: mkBatchPacks,
      episodes: mkEpisodes
    }
  ];

  const mkTags = ["Marvel", "Disney+", "Trending", "Dual Audio", "Complete Season 1", "4K UHD"];
  const mkLanguages = ["Hindi (Org DD5.1)", "English (Dolby Atmos)"];

  await sql`
    UPDATE media_items
    SET 
      title = 'Moon Knight',
      seasons = ${JSON.stringify(mkSeasons)}::jsonb,
      tags = ${JSON.stringify(mkTags)}::jsonb,
      languages = ${JSON.stringify(mkLanguages)}::jsonb
    WHERE slug = 'moon-knight' OR id = 'moon-knight';
  `;

  console.log("Successfully updated Moon Knight Season 1 in Neon DB!");

  console.log("Updating Iron Man (2008)...");

  const imVariants = [
    {
      id: "iron-man-480p-bluray",
      resolution: "480p",
      fileSize: "406 MB",
      formatLabel: "480p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-im-480p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/gef1sp2ss1mo5h_",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "iron-man-720p-bluray",
      resolution: "720p",
      fileSize: "1.15 GB",
      formatLabel: "720p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-im-720p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/jhdsp1gcx0rg1cl",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "iron-man-1080p-bluray",
      resolution: "1080p",
      fileSize: "2.69 GB",
      formatLabel: "1080p BluRay FHD [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English Atmos",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-im-1080p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/uisukeniu1kqq8h",
          type: "download",
          isFast: true
        }
      ]
    }
  ];

  const imTags = ["Marvel", "Hollywood", "Trending", "Dual Audio", "BluRay", "MCU Phase 1"];
  const imLanguages = ["Hindi (Org DD5.1)", "English (Dolby Atmos)"];

  await sql`
    UPDATE media_items
    SET 
      title = 'Iron Man',
      variants = ${JSON.stringify(imVariants)}::jsonb,
      tags = ${JSON.stringify(imTags)}::jsonb,
      languages = ${JSON.stringify(imLanguages)}::jsonb
    WHERE slug = 'iron-man' OR id = 'iron-man';
  `;

  console.log("Successfully updated Iron Man (2008) in Neon DB!");
}

run().catch((err) => {
  console.error("Error updating DB:", err);
  process.exit(1);
});
