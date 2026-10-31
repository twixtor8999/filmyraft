const { neon } = require("@neondatabase/serverless");
require("dotenv").config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL);

async function run() {
  console.log("Updating Ant-Man sequels in Neon DB...");

  // 1. ANT-MAN AND THE WASP (2018)
  console.log("Updating Ant-Man and the Wasp (2018)...");
  const amwVariants = [
    {
      id: "amw-480p-bluray",
      resolution: "480p",
      fileSize: "562 MB",
      formatLabel: "480p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD2.0/5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-amw-480p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/3k3ngndt13slglh",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "amw-720p-bluray",
      resolution: "720p",
      fileSize: "1.2 GB",
      formatLabel: "720p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English DD5.1",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-amw-720p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/fwzrz4svtsl9f3b",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "amw-1080p-bluray",
      resolution: "1080p",
      fileSize: "2 GB",
      formatLabel: "1080p BluRay x264 [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
      codec: "x264 / BluRay",
      mirrors: [
        {
          id: "m-amw-1080p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/tznhe1vhgpgwsqq",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "amw-1080p-60fps-bluray",
      resolution: "1080p",
      fileSize: "3.75 GB",
      formatLabel: "1080p 10-Bit 60FPS High-Frame-Rate [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
      codec: "HEVC / 60FPS 10-Bit",
      mirrors: [
        {
          id: "m-amw-1080p-60fps-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/tdhz1u3-s6-tukw",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "amw-4k-bluray",
      resolution: "4K UHD",
      fileSize: "5.64 GB",
      formatLabel: "2160p 4K UHD BluRay Remux [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English TrueHD 7.1 Atmos",
      codec: "HEVC / 4K UHD BluRay",
      mirrors: [
        {
          id: "m-amw-4k-vcloud",
          name: "Fast V-Cloud Direct VIP [Resumable]",
          url: "https://vcloud.beer/9qodzpq2bxp7sqb",
          type: "download",
          isFast: true
        }
      ]
    }
  ];

  const amwTags = ["Marvel", "Hollywood", "Trending", "Dual Audio", "BluRay", "4K UHD", "MCU Phase 3", "Ant-Man"];

  await sql`
    UPDATE media_items
    SET 
      variants = ${JSON.stringify(amwVariants)}::jsonb,
      tags = ${JSON.stringify(amwTags)}::jsonb,
      languages = ${JSON.stringify(["Hindi (Org 5.1)", "English (Dolby Atmos)"])}::jsonb
    WHERE slug = 'ant-man-and-the-wasp' OR id = 'ant-man-and-the-wasp';
  `;
  console.log("Ant-Man and the Wasp (2018) updated.");

  // 2. ANT-MAN AND THE WASP: QUANTUMANIA (2023)
  console.log("Updating Ant-Man and the Wasp: Quantumania (2023)...");
  const qmVariants = [
    {
      id: "quantumania-480p-imax",
      resolution: "480p",
      fileSize: "560 MB",
      formatLabel: "480p IMAX WEB-DL [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD2.0/5.1 + English DD5.1",
      codec: "x264 / IMAX WEB-DL",
      mirrors: [
        {
          id: "m-qm-480p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/1efqxbq8nw6wfeb",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "quantumania-720p-10bit-imax",
      resolution: "720p",
      fileSize: "900 MB",
      formatLabel: "720p 10-Bit HEVC IMAX WEB-DL [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English DD5.1",
      codec: "HEVC / 10-Bit IMAX",
      mirrors: [
        {
          id: "m-qm-720p-10bit-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/ivej_r92gr7avre",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "quantumania-720p-imax",
      resolution: "720p",
      fileSize: "1.4 GB",
      formatLabel: "720p IMAX WEB-DL [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Org DD5.1 + English DD5.1",
      codec: "x264 / IMAX WEB-DL",
      mirrors: [
        {
          id: "m-qm-720p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/wuoxcgajtqdtecj",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "quantumania-1080p-10bit-imax",
      resolution: "1080p",
      fileSize: "2 GB",
      formatLabel: "1080p 10-Bit HEVC IMAX WEB-DL [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
      codec: "HEVC / 10-Bit IMAX",
      mirrors: [
        {
          id: "m-qm-1080p-10bit-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/rphnipzd9klpr1d",
          type: "download",
          isFast: true
        }
      ]
    },
    {
      id: "quantumania-1080p-imax",
      resolution: "1080p",
      fileSize: "3.4 GB",
      formatLabel: "1080p IMAX WEB-DL Enhanced [Dual Audio Hindi-English]",
      audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
      codec: "x264 / IMAX WEB-DL",
      mirrors: [
        {
          id: "m-qm-1080p-vcloud",
          name: "Fast V-Cloud Direct [Resumable]",
          url: "https://vcloud.beer/fwfy8ffbww5o5wp",
          type: "download",
          isFast: true
        }
      ]
    }
  ];

  const qmTags = ["Marvel", "Hollywood", "Trending", "Dual Audio", "IMAX", "4K UHD", "MCU Phase 5", "Ant-Man"];

  await sql`
    UPDATE media_items
    SET 
      variants = ${JSON.stringify(qmVariants)}::jsonb,
      tags = ${JSON.stringify(qmTags)}::jsonb,
      languages = ${JSON.stringify(["Hindi (Org 5.1)", "English (Dolby Atmos)"])}::jsonb
    WHERE slug = 'ant-man-and-the-wasp-quantumania' OR id = 'ant-man-and-the-wasp-quantumania';
  `;
  console.log("Ant-Man and the Wasp: Quantumania (2023) updated.");

  // Also tag Ant-Man 1 with "Ant-Man"
  await sql`
    UPDATE media_items
    SET tags = (
      SELECT jsonb_agg(DISTINCT elem)
      FROM jsonb_array_elements_text(tags || '["Ant-Man"]'::jsonb) AS elem
    )
    WHERE slug = 'ant-man' OR id = 'ant-man';
  `;

  // Also tag Iron Man 1, 2, 3 with "Iron Man"
  await sql`
    UPDATE media_items
    SET tags = (
      SELECT jsonb_agg(DISTINCT elem)
      FROM jsonb_array_elements_text(tags || '["Iron Man"]'::jsonb) AS elem
    )
    WHERE slug IN ('iron-man', 'iron-man-2', 'iron-man-3');
  `;

  // Also tag Deadpool 1, 2, 3 with "Deadpool"
  await sql`
    UPDATE media_items
    SET tags = (
      SELECT jsonb_agg(DISTINCT elem)
      FROM jsonb_array_elements_text(tags || '["Deadpool"]'::jsonb) AS elem
    )
    WHERE slug IN ('deadpool-2016', 'deadpool-2-2018', 'deadpool-and-wolverine-2024');
  `;

  console.log("All Ant-Man, Iron Man, and Deadpool franchise tags synced!");
}

run().catch((err) => {
  console.error("DB update error:", err);
  process.exit(1);
});
