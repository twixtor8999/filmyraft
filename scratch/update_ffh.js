const { neon } = require("@neondatabase/serverless");
require("dotenv").config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL);

async function run() {
  const variants = [
    {
      id: "spm-ffh-480p-bluray",
      resolution: "480p",
      fileSize: "422 MB",
      formatLabel: "480p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-ffh-480p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/dgsskkn9dcib09w",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "spm-ffh-720p-bluray-656mb",
      resolution: "720p",
      fileSize: "656 MB",
      formatLabel: "720p BluRay HEVC [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English DD5.1",
      codec: "HEVC / x265",
      mirrors: [
        {
          id: "m-ffh-720p-hevc-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/tlpgusffwk1xgok",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "spm-ffh-720p-bluray-15gb",
      resolution: "720p",
      fileSize: "1.5 GB",
      formatLabel: "720p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English DD5.1",
      codec: "x264 / AVC",
      mirrors: [
        {
          id: "m-ffh-720p-15-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/xpoppb97qsbq5fh",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "spm-ffh-1080p-bluray-35gb",
      resolution: "1080p",
      fileSize: "3.47 GB",
      formatLabel: "1080p BluRay HEVC [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English Atmos",
      codec: "HEVC / x265",
      mirrors: [
        {
          id: "m-ffh-1080p-35-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/zfm0ixnys3do3bx",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "spm-ffh-1080p-10bit-45gb",
      resolution: "1080p",
      fileSize: "4.55 GB",
      formatLabel: "1080p 10-Bit BluRay x265 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English Atmos",
      codec: "HEVC 10-Bit",
      mirrors: [
        {
          id: "m-ffh-1080p-10bit-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/vup41mn51tyfubq",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "spm-ffh-1080p-x264-89gb",
      resolution: "1080p",
      fileSize: "8.91 GB",
      formatLabel: "1080p BluRay x264 High Bitrate [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English TrueHD 7.1 Atmos",
      codec: "AVC / x264 Remux",
      mirrors: [
        {
          id: "m-ffh-1080p-x264-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/rxrrqvfwyoyuf44",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "spm-ffh-4k-bluray-64gb",
      resolution: "4K UHD",
      fileSize: "6.4 GB",
      formatLabel: "2160p 4K UHD BluRay HDR [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English TrueHD 7.1 Atmos",
      codec: "HEVC 10-Bit / HDR10",
      mirrors: [
        {
          id: "m-ffh-4k-64gb-vcloud",
          name: "Fast V-Cloud Direct VIP [Resumable]",
          url: "https://vcloud.beer/djjyydbhlttor_y",
          type: "download",
          isFast: true
        }
      ]
    }
  ];

  const variantsJson = JSON.stringify(variants);
  const languagesJson = JSON.stringify(["Hindi (Org DD5.1)", "English (Dolby Atmos)"]);
  const tagsJson = JSON.stringify(["Marvel", "Hollywood", "Trending", "Dual Audio", "BluRay", "4K UHD"]);

  await sql`
    UPDATE media_items 
    SET 
      title = 'Spider-Man: Far From Home',
      variants = ${variantsJson}::jsonb,
      languages = ${languagesJson}::jsonb,
      tags = ${tagsJson}::jsonb
    WHERE id = 'spider-man-far-from-home'
  `;

  console.log("Successfully updated Spider-Man: Far From Home with 7 V-Cloud download tiers!");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
