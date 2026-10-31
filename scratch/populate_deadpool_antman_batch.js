const { neon } = require("@neondatabase/serverless");
require("dotenv").config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL);

async function run() {
  console.log("Updating Deadpool (2016), Deadpool 2 (2018), Deadpool & Wolverine (2024), and Ant-Man (2015)...");

  // 1. DEADPOOL (2016)
  console.log("Updating Deadpool (2016)...");
  const dp1Variants = [
    {
      id: "dp1-480p-bluray",
      resolution: "480p",
      fileSize: "352 MB",
      formatLabel: "480p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD2.0/5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-dp1-480p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/98b6pkeebp64e5i",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "dp1-720p-bluray",
      resolution: "720p",
      fileSize: "1.04 GB",
      formatLabel: "720p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-dp1-720p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/olomlcqr6zmanpq",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "dp1-1080p-bluray",
      resolution: "1080p",
      fileSize: "2.19 GB",
      formatLabel: "1080p BluRay FHD [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-dp1-1080p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/a3s4j1c43058ycc",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "dp1-1080p-10bit-bluray",
      resolution: "1080p",
      fileSize: "2.9 GB",
      formatLabel: "1080p 10-Bit HEVC BluRay [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
      codec: "HEVC / 10-Bit x265",
      mirrors: [
        {
          id: "m-dp1-1080p-10bit-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/p_8e6p7pl_sxvlg",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "dp1-4k-bluray",
      resolution: "4K UHD",
      fileSize: "8.14 GB",
      formatLabel: "2160p 4K UHD BluRay Remux [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English TrueHD 7.1 Atmos",
      codec: "HEVC / 4K UHD BluRay",
      mirrors: [
        {
          id: "m-dp1-4k-vcloud",
          name: "Fast V-Cloud Direct VIP [Resumable]",
          url: "https://vcloud.beer/b7xyemtl9_uir06",
          type: "download",
          isFast: true
        }
      ]
    }
  ];

  const dp1Tags = ["Marvel", "Hollywood", "Trending", "Dual Audio", "BluRay", "4K UHD", "X-Men"];

  await sql`
    UPDATE media_items
    SET 
      variants = ${JSON.stringify(dp1Variants)}::jsonb,
      tags = ${JSON.stringify(dp1Tags)}::jsonb,
      languages = ${JSON.stringify(["Hindi (Org 5.1)", "English (Dolby Atmos)"])}::jsonb
    WHERE slug = 'deadpool-2016' OR id = 'deadpool-2016';
  `;
  console.log("Deadpool (2016) updated.");

  // 2. DEADPOOL 2 (2018)
  console.log("Updating Deadpool 2 (2018)...");
  const dp2Variants = [
    {
      id: "dp2-480p-bluray",
      resolution: "480p",
      fileSize: "442 MB",
      formatLabel: "480p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD2.0/5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-dp2-480p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/om_hv4_hm1fmbqq",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "dp2-720p-bluray",
      resolution: "720p",
      fileSize: "1.14 GB",
      formatLabel: "720p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-dp2-720p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/twwfqmsszd7zkf6",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "dp2-1080p-bluray",
      resolution: "1080p",
      fileSize: "3.11 GB",
      formatLabel: "1080p BluRay FHD [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-dp2-1080p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/lvufmqkz1ukjqzq",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "dp2-1080p-60fps-bluray",
      resolution: "1080p",
      fileSize: "3.6 GB",
      formatLabel: "1080p BluRay 60FPS High-Frame-Rate [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
      codec: "x264 / 60FPS BluRay",
      mirrors: [
        {
          id: "m-dp2-1080p-60fps-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/yclz9yl6ybvzecy",
          type: "download",
          isFast: true
        }
      ]
    }
  ];

  const dp2Tags = ["Marvel", "Hollywood", "Trending", "Dual Audio", "BluRay", "4K UHD", "X-Men"];

  await sql`
    UPDATE media_items
    SET 
      variants = ${JSON.stringify(dp2Variants)}::jsonb,
      tags = ${JSON.stringify(dp2Tags)}::jsonb,
      languages = ${JSON.stringify(["Hindi (Org 5.1)", "English (Dolby Atmos)"])}::jsonb
    WHERE slug = 'deadpool-2-2018' OR id = 'deadpool-2-2018';
  `;
  console.log("Deadpool 2 (2018) updated.");

  // 3. DEADPOOL & WOLVERINE (2024)
  console.log("Updating Deadpool & Wolverine (2024)...");
  const dpwVariants = [
    {
      id: "dpw-480p-bluray",
      resolution: "480p",
      fileSize: "585 MB",
      formatLabel: "480p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org 5.1 + English Atmos",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-dpw-480p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/sdn0rn361cywds2",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "dpw-720p-10bit-compact",
      resolution: "720p",
      fileSize: "848 MB",
      formatLabel: "720p 10-Bit HEVC BluRay [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org 5.1 + English 5.1",
      codec: "HEVC / 10-Bit x265",
      mirrors: [
        {
          id: "m-dpw-720p-10bit-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/tljhndnjjhjqdfr",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "dpw-720p-10bit-std",
      resolution: "720p",
      fileSize: "1.23 GB",
      formatLabel: "720p 10-Bit HEVC HQ BluRay [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org 5.1 + English Atmos",
      codec: "HEVC / 10-Bit x265",
      mirrors: [
        {
          id: "m-dpw-720p-10bit-hq-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/pl0etwy0431r0rr",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "dpw-720p-x264",
      resolution: "720p",
      fileSize: "1.33 GB",
      formatLabel: "720p BluRay x264 AVC [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org 5.1 + English 5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-dpw-720p-x264-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/2g0wb5wwwz25iww",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "dpw-1080p-compact",
      resolution: "1080p",
      fileSize: "2.61 GB",
      formatLabel: "1080p BluRay FHD [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org 5.1 + English Atmos",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-dpw-1080p-compact-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/gshitqttqt2n223",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "dpw-1080p-std",
      resolution: "1080p",
      fileSize: "3.73 GB",
      formatLabel: "1080p BluRay FHD HQ [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org 5.1 + English Atmos",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-dpw-1080p-std-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/viynb-nnvip1xwp",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "dpw-1080p-highbitrate",
      resolution: "1080p",
      fileSize: "8.37 GB",
      formatLabel: "1080p BluRay High-Bitrate Remux [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org 5.1 + English Dolby TrueHD Atmos",
      codec: "x264 / BluRay High-Bitrate",
      mirrors: [
        {
          id: "m-dpw-1080p-hb-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/h9j3xjhyyf1fgit",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "dpw-1080p-uhd",
      resolution: "1080p",
      fileSize: "11.51 GB",
      formatLabel: "1080p UHD Premium BluRay [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org 5.1 + English Dolby TrueHD 7.1 Atmos",
      codec: "x264 / UHD Master",
      mirrors: [
        {
          id: "m-dpw-1080p-uhd-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/uxxjtuslyfuuixl",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "dpw-1080p-60fps-ds4k",
      resolution: "1080p",
      fileSize: "11.27 GB",
      formatLabel: "1080p DS4K 60FPS 10-Bit HEVC Atmos [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org 5.1 + English Atmos 7.1",
      codec: "HEVC / DS4K 60FPS",
      mirrors: [
        {
          id: "m-dpw-1080p-60fps-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/yll3wfhy1ql3yct",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "dpw-4k-sdr-hevc",
      resolution: "4K UHD",
      fileSize: "5.87 GB",
      formatLabel: "2160p 4K UHD SDR HEVC x265 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org 5.1 + English Atmos",
      codec: "HEVC / 4K UHD SDR",
      mirrors: [
        {
          id: "m-dpw-4k-sdr-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/zlltuce1eavll1z",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "dpw-4k-dovi-hdr10",
      resolution: "4K UHD",
      fileSize: "17.9 GB",
      formatLabel: "2160p 4K UHD BluRay Dolby Vision HDR10+ 10-Bit [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org 5.1 + English Dolby TrueHD 7.1 Atmos",
      codec: "HEVC / Dolby Vision & HDR10+",
      mirrors: [
        {
          id: "m-dpw-4k-dovi-vcloud",
          name: "Fast V-Cloud Direct VIP [Resumable]",
          url: "https://vcloud.beer/7o8r1m8ksst0rri",
          type: "download",
          isFast: true
        }
      ]
    }
  ];

  const dpwTags = ["Marvel", "Hollywood", "Trending", "Dual Audio", "BluRay", "4K UHD", "X-Men", "Wolverine"];

  await sql`
    UPDATE media_items
    SET 
      variants = ${JSON.stringify(dpwVariants)}::jsonb,
      tags = ${JSON.stringify(dpwTags)}::jsonb,
      languages = ${JSON.stringify(["Hindi (Clean 5.1 Org)", "English (Dolby Atmos)"])}::jsonb
    WHERE slug = 'deadpool-and-wolverine-2024' OR id = 'deadpool-and-wolverine-2024';
  `;
  console.log("Deadpool & Wolverine (2024) updated.");

  // 4. ANT-MAN (2015)
  console.log("Updating Ant-Man (2015)...");
  const antmanVariants = [
    {
      id: "antman-480p-bluray",
      resolution: "480p",
      fileSize: "365 MB",
      formatLabel: "480p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-am-480p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/yjrp88ayrjh888q",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "antman-720p-bluray",
      resolution: "720p",
      fileSize: "915 MB",
      formatLabel: "720p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-am-720p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/46ygyqprxqigy74",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "antman-1080p-bluray",
      resolution: "1080p",
      fileSize: "2.54 GB",
      formatLabel: "1080p BluRay FHD [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-am-1080p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/mrjrxl3kbxm8x8v",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "antman-1080p-60fps-hevc",
      resolution: "1080p",
      fileSize: "3.77 GB",
      formatLabel: "1080p BluRay 60FPS x265 HEVC [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
      codec: "HEVC / 60FPS x265",
      mirrors: [
        {
          id: "m-am-1080p-60fps-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/wea28wwggodeals",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "antman-4k-bluray",
      resolution: "4K UHD",
      fileSize: "6.81 GB",
      formatLabel: "2160p 4K UHD BluRay HDR [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English TrueHD 7.1 Atmos",
      codec: "HEVC / 4K UHD BluRay",
      mirrors: [
        {
          id: "m-am-4k-vcloud",
          name: "Fast V-Cloud Direct VIP [Resumable]",
          url: "https://vcloud.beer/vtybrayvr0vi3rn",
          type: "download",
          isFast: true
        }
      ]
    }
  ];

  const antmanTags = ["Marvel", "Hollywood", "Trending", "Dual Audio", "BluRay", "4K UHD", "MCU Phase 2"];

  await sql`
    UPDATE media_items
    SET 
      variants = ${JSON.stringify(antmanVariants)}::jsonb,
      tags = ${JSON.stringify(antmanTags)}::jsonb,
      languages = ${JSON.stringify(["Hindi (Org 5.1)", "English (Dolby Atmos)"])}::jsonb
    WHERE slug = 'ant-man' OR id = 'ant-man' OR slug = 'ant-man-2015';
  `;
  console.log("Ant-Man (2015) updated.");

  console.log("ALL 4 MOVIES SUCCESSFULLY UPDATED IN DATABASE!");
}

run().catch((err) => {
  console.error("DB update error:", err);
  process.exit(1);
});
