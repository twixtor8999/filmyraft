import { MediaItem, QualityVariant } from "@/types/media";

export const MOCK_MEDIA: MediaItem[] = [
  // 1. PRIMARY FEATURED HERO: Avengers: Endgame (Matches Reference Mockup exactly)
  {
    id: "avengers-endgame-2019",
    slug: "avengers-endgame-2019",
    title: "Avengers: Endgame (2019)",
    type: "movie",
    releaseYear: 2019,
    imdbRating: 8.4,
    runtime: "3h 01min",
    genres: ["Action", "Adventure", "Sci-Fi"],
    languages: ["Hindi (Org 5.1 Clean)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline:
      "The Avengers face their greatest challenge yet as they unite for a final stand to restore balance to the universe after the devastating events of Infinity War.",
    posterUrl: "https://images.metahub.space/poster/medium/tt4154796/img",
    backdropUrl: "https://images.metahub.space/background/large/tt4154796/img",
    screenshots: [
      "https://images.metahub.space/background/large/tt4154796/img",
      "https://images.metahub.space/background/large/tt4154756/img",
    ],
    tags: ["Marvel", "Hollywood", "Trending", "4K UHD", "Dual Audio"],
    director: "Anthony Russo, Joe Russo",
    cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth", "Scarlett Johansson"],
    variants: [
      {
        id: "endgame-480p",
        resolution: "480p",
        formatLabel: "480p SD [Hindi Org + English]",
        fileSize: "550 MB",
        codec: "x264",
        audioSpecs: "Hindi 2.0 Org + English 2.0",
        mirrors: [
          { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/endgame480", isFast: true, type: "download" },
          { id: "m2", name: "PixelDrain Mirror", url: "https://pixeldrain.com/u/endgame480", isFast: false, type: "download" },
          { id: "m3", name: "Buzzheavier Mirror", url: "https://buzzheavier.com/f/endgame480", isFast: false, type: "download" },
          { id: "m4", name: "Stream Online", url: "https://streamwish.to/e/endgame480", type: "stream" },
        ],
      },
      {
        id: "endgame-720p",
        resolution: "720p",
        formatLabel: "720p 10-Bit HEVC [Hindi Org 5.1 + English Atmos]",
        fileSize: "1.45 GB",
        codec: "HEVC / x265 (10-bit)",
        audioSpecs: "Hindi 5.1 Org + English 5.1",
        mirrors: [
          { id: "m5", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/endgame720", isFast: true, type: "download" },
          { id: "m6", name: "PixelDrain Mirror", url: "https://pixeldrain.com/u/endgame720", isFast: false, type: "download" },
          { id: "m7", name: "Buzzheavier Mirror", url: "https://buzzheavier.com/f/endgame720", isFast: false, type: "download" },
          { id: "m8", name: "Stream Online (HD)", url: "https://streamwish.to/e/endgame720", type: "stream" },
        ],
      },
      {
        id: "endgame-1080p",
        resolution: "1080p",
        formatLabel: "1080p FHD IMAX [Hindi Clean Org + English Atmos]",
        fileSize: "3.40 GB",
        codec: "x264 / AVC",
        audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
        mirrors: [
          { id: "m9", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/endgame1080", isFast: true, type: "download" },
          { id: "m10", name: "PixelDrain Mirror", url: "https://pixeldrain.com/u/endgame1080", isFast: false, type: "download" },
        ],
      },
      {
        id: "endgame-4k",
        resolution: "4K UHD",
        formatLabel: "2160p 4K UHD IMAX HDR10+ [Hindi Org 5.1 + English Atmos]",
        fileSize: "8.20 GB",
        codec: "HEVC / HDR10+",
        audioSpecs: "Hindi Org 5.1 + English Dolby Atmos TrueHD 7.1",
        mirrors: [
          { id: "m11", name: "Fast Cloud Direct (VIP)", url: "https://hubcloud.club/drive/endgame4k", isFast: true, type: "download" },
          { id: "m12", name: "PixelDrain Mirror", url: "https://pixeldrain.com/u/endgame4k", isFast: false, type: "download" },
        ],
      },
    ],
  },

  // 2. Deadpool & Wolverine (2024)
  {
    id: "deadpool-and-wolverine-2024",
    slug: "deadpool-and-wolverine-2024",
    title: "Deadpool & Wolverine (2024)",
    type: "movie",
    releaseYear: 2024,
    imdbRating: 7.8,
    runtime: "2h 08min",
    genres: ["Action", "Comedy", "Sci-Fi"],
    languages: ["Hindi (Clean 5.1 Org)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline:
      "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
    posterUrl: "https://images.metahub.space/poster/medium/tt6263850/img",
    backdropUrl: "https://images.metahub.space/background/large/tt6263850/img",
    screenshots: [
      "https://images.metahub.space/background/large/tt6263850/img",
    ],
    tags: ["Marvel", "Dual Audio", "Trending", "4K UHD", "Hollywood"],
    director: "Shawn Levy",
    cast: ["Ryan Reynolds", "Hugh Jackman", "Emma Corrin", "Matthew Macfadyen"],
    variants: [
      {
        id: "dpw-480p",
        resolution: "480p",
        formatLabel: "480p SD [Hindi Org + English]",
        fileSize: "480 MB",
        codec: "x264",
        audioSpecs: "Hindi 2.0 + English 2.0",
        mirrors: [
          { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/dpw480", isFast: true, type: "download" },
          { id: "m2", name: "PixelDrain Mirror", url: "https://pixeldrain.com/u/sample480", isFast: false, type: "download" },
          { id: "m3", name: "Buzzheavier Mirror", url: "https://buzzheavier.com/f/sample480", isFast: false, type: "download" },
          { id: "m4", name: "Stream Online", url: "https://streamwish.to/e/sample480", type: "stream" },
        ],
      },
      {
        id: "dpw-720p",
        resolution: "720p",
        formatLabel: "720p 10-Bit HEVC [Hindi Org 5.1 + English]",
        fileSize: "1.25 GB",
        codec: "HEVC / x265 (10-bit)",
        audioSpecs: "Hindi 5.1 Org + English 5.1",
        mirrors: [
          { id: "m5", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/dpw720", isFast: true, type: "download" },
          { id: "m6", name: "PixelDrain Mirror", url: "https://pixeldrain.com/u/sample720", isFast: false, type: "download" },
        ],
      },
      {
        id: "dpw-1080p",
        resolution: "1080p",
        formatLabel: "1080p FHD x264 [Hindi Clean Org 5.1 + English Atmos]",
        fileSize: "3.10 GB",
        codec: "x264",
        audioSpecs: "Hindi 5.1 Org + English Atmos",
        mirrors: [
          { id: "m7", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/dpw1080", isFast: true, type: "download" },
          { id: "m8", name: "PixelDrain Mirror", url: "https://pixeldrain.com/u/sample1080", isFast: false, type: "download" },
        ],
      },
      {
        id: "dpw-4k",
        resolution: "4K UHD",
        formatLabel: "2160p 4K UHD IMAX HDR10+ [Hindi Org 5.1 + English Atmos]",
        fileSize: "7.80 GB",
        codec: "HEVC / HDR10+",
        audioSpecs: "Hindi 5.1 Org + English TrueHD 7.1 Atmos",
        mirrors: [
          { id: "m9", name: "Fast Cloud Direct (VIP)", url: "https://hubcloud.club/drive/dpw4k", isFast: true, type: "download" },
          { id: "m10", name: "PixelDrain Mirror", url: "https://pixeldrain.com/u/sample4k", isFast: false, type: "download" },
        ],
      },
    ],
  },

  // 3. Spider-Man: No Way Home (2021)
  {
    id: "spider-man-no-way-home-2021",
    slug: "spider-man-no-way-home",
    title: "Spider-Man: No Way Home (2021)",
    type: "movie",
    releaseYear: 2021,
    imdbRating: 8.2,
    runtime: "2h 28min",
    genres: ["Action", "Adventure", "Sci-Fi"],
    languages: ["Hindi (Clean 5.1 Org)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline:
      "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
    posterUrl: "https://images.metahub.space/poster/medium/tt10872600/img",
    backdropUrl: "https://images.metahub.space/background/large/tt10872600/img",
    screenshots: [
      "https://images.metahub.space/background/large/tt10872600/img",
    ],
    tags: ["Marvel", "Hollywood", "Trending", "4K UHD", "Dual Audio"],
    director: "Jon Watts",
    cast: ["Tom Holland", "Zendaya", "Benedict Cumberbatch", "Willem Dafoe"],
    variants: [
      {
        id: "spm-nwh-480p-bluray",
        resolution: "480p",
        fileSize: "500 MB",
        codec: "x264 / BluRay",
        formatLabel: "480p BluRay x264 [Dual Audio Hindi-English]",
        audioSpecs: "Hindi Org DD5.1 + English DD5.1",
        mirrors: [
          {
            id: "m-nwh-480p-vcloud",
            name: "Fast V-Cloud Direct [Resumable]",
            url: "https://vcloud.beer/iczl96mztqmhdbf",
            type: "download",
            isFast: true
          }
        ]
      },
      {
        id: "spm-nwh-720p-bluray-900mb",
        resolution: "720p",
        fileSize: "900 MB",
        codec: "HEVC / x265",
        formatLabel: "720p BluRay HEVC [Dual Audio Hindi-English]",
        audioSpecs: "Hindi Org DD5.1 + English DD5.1",
        mirrors: [
          {
            id: "m-nwh-720p-900-vcloud",
            name: "Fast V-Cloud Direct [Resumable]",
            url: "https://vcloud.beer/ebkx7zfxeeetc1k",
            type: "download",
            isFast: true
          }
        ]
      },
      {
        id: "spm-nwh-720p-bluray-15gb",
        resolution: "720p",
        fileSize: "1.5 GB",
        codec: "x264 / AVC",
        formatLabel: "720p BluRay x264 [Dual Audio Hindi-English]",
        audioSpecs: "Hindi Org DD5.1 + English DD5.1",
        mirrors: [
          {
            id: "m-nwh-720p-15-vcloud",
            name: "Fast V-Cloud Direct [Resumable]",
            url: "https://vcloud.beer/o1gygmexe-5wegb",
            type: "download",
            isFast: true
          }
        ]
      },
      {
        id: "spm-nwh-720p-10bit-17gb",
        resolution: "720p",
        fileSize: "1.7 GB",
        codec: "HEVC 10-Bit",
        formatLabel: "720p 10-Bit BluRay x265 [Dual Audio Hindi-English]",
        audioSpecs: "Hindi Org DD5.1 + English Atmos",
        mirrors: [
          {
            id: "m-nwh-720p-17-vcloud",
            name: "Fast V-Cloud Direct [Resumable]",
            url: "https://vcloud.beer/psph-oqvqfy2zit",
            type: "download",
            isFast: true
          }
        ]
      },
      {
        id: "spm-nwh-1080p-bluray-3gb",
        resolution: "1080p",
        fileSize: "3.07 GB",
        codec: "HEVC / x265",
        formatLabel: "1080p BluRay HEVC [Dual Audio Hindi-English]",
        audioSpecs: "Hindi Org DD5.1 + English Atmos",
        mirrors: [
          {
            id: "m-nwh-1080p-3gb-vcloud",
            name: "Fast V-Cloud Direct [Resumable]",
            url: "https://vcloud.beer/be-pred-ki_kck_",
            type: "download",
            isFast: true
          }
        ]
      },
      {
        id: "spm-nwh-1080p-10bit-8gb",
        resolution: "1080p",
        fileSize: "8.04 GB",
        codec: "AVC / x264 Remux 10-Bit",
        formatLabel: "1080p 10-Bit BluRay High Bitrate [Dual Audio Hindi-English]",
        audioSpecs: "Hindi Org DD5.1 + English TrueHD 7.1 Atmos",
        mirrors: [
          {
            id: "m-nwh-1080p-8gb-vcloud",
            name: "Fast V-Cloud Direct [Resumable]",
            url: "https://vcloud.beer/cnxjcbqxjwbwjsb",
            type: "download",
            isFast: true
          }
        ]
      },
      {
        id: "spm-nwh-4k-bluray-25gb",
        resolution: "4K UHD",
        fileSize: "25.68 GB",
        codec: "HEVC 10-Bit / HDR10 / Dolby Vision",
        formatLabel: "2160p 4K UHD BluRay 10-Bit HDR [Dual Audio Hindi-English]",
        audioSpecs: "Hindi Org DDP 5.1 + English TrueHD 7.1 Atmos",
        mirrors: [
          {
            id: "m-nwh-4k-25gb-vcloud",
            name: "Fast V-Cloud Direct VIP [Resumable]",
            url: "https://vcloud.beer/t0gtl1i1gb20z__",
            type: "download",
            isFast: true
          }
        ]
      }
    ],
  },

  // 4. Oppenheimer (2023)
  {
    id: "oppenheimer-2023",
    slug: "oppenheimer-2023",
    title: "Oppenheimer (2023)",
    type: "movie",
    releaseYear: 2023,
    imdbRating: 8.5,
    runtime: "3h 00min",
    genres: ["Biography", "Drama", "History"],
    languages: ["Hindi (Org 5.1)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.",
    posterUrl: "https://images.metahub.space/poster/medium/tt15398776/img",
    backdropUrl: "https://images.metahub.space/background/large/tt15398776/img",
    screenshots: [
      "https://images.metahub.space/background/large/tt15398776/img",
    ],
    tags: ["Dual Audio", "Trending", "4K UHD", "Hollywood"],
    director: "Christopher Nolan",
    cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr."],
    variants: [
      {
        id: "opp-720p",
        resolution: "720p",
        formatLabel: "720p 10-Bit HEVC [Hindi Org + English]",
        fileSize: "1.40 GB",
        codec: "HEVC / x265",
        audioSpecs: "Hindi 5.1 Org + English 5.1",
        mirrors: [
          { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/opp720", isFast: true, type: "download" },
          { id: "m2", name: "PixelDrain Mirror", url: "https://pixeldrain.com/u/opp720", isFast: false, type: "download" },
        ],
      },
      {
        id: "opp-1080p",
        resolution: "1080p",
        formatLabel: "1080p FHD IMAX [Hindi Clean Org + English Atmos]",
        fileSize: "3.80 GB",
        codec: "x264",
        audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
        mirrors: [
          { id: "m3", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/opp1080", isFast: true, type: "download" },
          { id: "m4", name: "PixelDrain Mirror", url: "https://pixeldrain.com/u/opp1080", isFast: false, type: "download" },
        ],
      },
      {
        id: "opp-4k",
        resolution: "4K UHD",
        formatLabel: "2160p 4K UHD IMAX [Hindi Org 5.1 + English TrueHD 7.1]",
        fileSize: "9.50 GB",
        codec: "HEVC / HDR10",
        audioSpecs: "Hindi Org 5.1 + English TrueHD 7.1 Atmos",
        mirrors: [
          { id: "m5", name: "Fast Cloud Direct (VIP)", url: "https://hubcloud.club/drive/opp4k", isFast: true, type: "download" },
        ],
      },
    ],
  },

  // 5. Dune: Part Two (2024)
  {
    id: "dune-part-two-2024",
    slug: "dune-part-two-2024",
    title: "Dune: Part Two (2024)",
    type: "movie",
    releaseYear: 2024,
    imdbRating: 8.4,
    runtime: "2h 46min",
    genres: ["Action", "Adventure", "Sci-Fi", "Drama"],
    languages: ["Hindi (Org 5.1)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    posterUrl: "https://images.metahub.space/poster/medium/tt15239678/img",
    backdropUrl: "https://images.metahub.space/background/large/tt15239678/img",
    screenshots: [
      "https://images.metahub.space/background/large/tt15239678/img",
    ],
    tags: ["Hollywood", "Trending", "4K UHD", "Dual Audio"],
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Javier Bardem"],
    variants: [
      {
        id: "dune2-1080p",
        resolution: "1080p",
        formatLabel: "1080p FHD IMAX [Hindi Clean Org + English Atmos]",
        fileSize: "3.50 GB",
        codec: "x264",
        audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
        mirrors: [
          { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/dune1080", isFast: true, type: "download" },
          { id: "m2", name: "PixelDrain Mirror", url: "https://pixeldrain.com/u/dune1080", isFast: false, type: "download" },
        ],
      },
    ],
  },

  // 6. The Batman (2022)
  {
    id: "the-batman-2022",
    slug: "the-batman-2022",
    title: "The Batman (2022)",
    type: "movie",
    releaseYear: 2022,
    imdbRating: 7.8,
    runtime: "2h 56min",
    genres: ["Action", "Crime", "Drama", "Mystery"],
    languages: ["Hindi (Org 5.1)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline:
      "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption.",
    posterUrl: "https://images.metahub.space/poster/medium/tt1877830/img",
    backdropUrl: "https://images.metahub.space/background/large/tt1877830/img",
    screenshots: [
      "https://images.metahub.space/background/large/tt1877830/img",
    ],
    tags: ["Hollywood", "Trending", "Dual Audio"],
    director: "Matt Reeves",
    cast: ["Robert Pattinson", "Zoë Kravitz", "Jeffrey Wright", "Colin Farrell"],
    variants: [
      {
        id: "batman-1080p",
        resolution: "1080p",
        formatLabel: "1080p FHD [Hindi Clean Org + English Atmos]",
        fileSize: "3.40 GB",
        codec: "x264",
        audioSpecs: "Hindi Org 5.1 + English Atmos",
        mirrors: [
          { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/batman1080", isFast: true, type: "download" },
        ],
      },
    ],
  },

  // 7. Top Gun: Maverick (2022)
  {
    id: "top-gun-maverick-2022",
    slug: "top-gun-maverick-2022",
    title: "Top Gun: Maverick (2022)",
    type: "movie",
    releaseYear: 2022,
    imdbRating: 8.3,
    runtime: "2h 10min",
    genres: ["Action", "Drama"],
    languages: ["Hindi (Org 5.1)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline:
      "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission.",
    posterUrl: "https://images.metahub.space/poster/medium/tt1745960/img",
    backdropUrl: "https://images.metahub.space/background/large/tt1745960/img",
    screenshots: [
      "https://images.metahub.space/background/large/tt1745960/img",
    ],
    tags: ["Hollywood", "Trending", "4K UHD", "Dual Audio"],
    director: "Joseph Kosinski",
    cast: ["Tom Cruise", "Miles Teller", "Jennifer Connelly", "Jon Hamm"],
    variants: [
      {
        id: "topgun-1080p",
        resolution: "1080p",
        formatLabel: "1080p FHD IMAX [Hindi Org 5.1 + English Atmos]",
        fileSize: "3.10 GB",
        codec: "x264",
        audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
        mirrors: [
          { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/topgun1080", isFast: true, type: "download" },
        ],
      },
    ],
  },

  // 8. Interstellar (2014)
  {
    id: "interstellar-2014",
    slug: "interstellar-2014",
    title: "Interstellar (2014)",
    type: "movie",
    releaseYear: 2014,
    imdbRating: 8.6,
    runtime: "2h 49min",
    genres: ["Adventure", "Drama", "Sci-Fi"],
    languages: ["Hindi (Org 5.1)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft along with a team of researchers to find a new planet for humans.",
    posterUrl: "https://images.metahub.space/poster/medium/tt0816692/img",
    backdropUrl: "https://images.metahub.space/background/large/tt0816692/img",
    screenshots: [
      "https://images.metahub.space/background/large/tt0816692/img",
    ],
    tags: ["Hollywood", "Trending", "Dual Audio"],
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
    variants: [
      {
        id: "interstellar-1080p",
        resolution: "1080p",
        formatLabel: "1080p FHD IMAX [Hindi Clean Org + English Atmos]",
        fileSize: "3.60 GB",
        codec: "x264",
        audioSpecs: "Hindi Org 5.1 + English Atmos",
        mirrors: [
          { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/interstellar1080", isFast: true, type: "download" },
        ],
      },
    ],
  },

  // 9. The Dark Knight (2008)
  {
    id: "the-dark-knight-2008",
    slug: "the-dark-knight-2008",
    title: "The Dark Knight (2008)",
    type: "movie",
    releaseYear: 2008,
    imdbRating: 9.0,
    runtime: "2h 32min",
    genres: ["Action", "Crime", "Drama", "Thriller"],
    languages: ["Hindi (Org 5.1)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    posterUrl: "https://images.metahub.space/poster/medium/tt0468569/img",
    backdropUrl: "https://images.metahub.space/background/large/tt0468569/img",
    screenshots: [
      "https://images.metahub.space/background/large/tt0468569/img",
    ],
    tags: ["Hollywood", "Trending", "4K UHD", "Dual Audio"],
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"],
    variants: [
      {
        id: "tdk-1080p",
        resolution: "1080p",
        formatLabel: "1080p FHD [Hindi Org 5.1 + English Atmos]",
        fileSize: "3.20 GB",
        codec: "x264",
        audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
        mirrors: [
          { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/tdk1080", isFast: true, type: "download" },
        ],
      },
    ],
  },

  // 10. Iron Man (2008)
  {
    id: "iron-man-2008",
    slug: "iron-man-2008",
    title: "Iron Man (2008)",
    type: "movie",
    releaseYear: 2008,
    imdbRating: 7.9,
    runtime: "2h 06min",
    genres: ["Action", "Adventure", "Sci-Fi"],
    languages: ["Hindi (Org 5.1)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline:
      "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    posterUrl: "https://images.metahub.space/poster/medium/tt0371746/img",
    backdropUrl: "https://images.metahub.space/background/large/tt0371746/img",
    screenshots: [
      "https://images.metahub.space/background/large/tt0371746/img",
    ],
    tags: ["Marvel", "Hollywood", "Dual Audio", "4K UHD"],
    director: "Jon Favreau",
    cast: ["Robert Downey Jr.", "Gwyneth Paltrow", "Terrence Howard", "Jeff Bridges"],
    variants: [
      {
        id: "ironman-1080p",
        resolution: "1080p",
        formatLabel: "1080p FHD IMAX [Hindi Clean Org + English Atmos]",
        fileSize: "2.90 GB",
        codec: "x264",
        audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
        mirrors: [
          { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/ironman1080", isFast: true, type: "download" },
        ],
      },
    ],
  },

  // 11. Avengers: Infinity War (2018)
  {
    id: "avengers-infinity-war-2018",
    slug: "avengers-infinity-war-2018",
    title: "Avengers: Infinity War (2018)",
    type: "movie",
    releaseYear: 2018,
    imdbRating: 8.4,
    runtime: "2h 29min",
    genres: ["Action", "Adventure", "Sci-Fi"],
    languages: ["Hindi (Org 5.1)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline:
      "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    posterUrl: "https://images.metahub.space/poster/medium/tt4154756/img",
    backdropUrl: "https://images.metahub.space/background/large/tt4154756/img",
    screenshots: [
      "https://images.metahub.space/background/large/tt4154756/img",
    ],
    tags: ["Marvel", "Hollywood", "Trending", "4K UHD", "Dual Audio"],
    director: "Anthony Russo, Joe Russo",
    cast: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo", "Chris Evans"],
    variants: [
      {
        id: "infinitywar-1080p",
        resolution: "1080p",
        formatLabel: "1080p FHD IMAX [Hindi Clean Org + English Atmos]",
        fileSize: "3.40 GB",
        codec: "x264",
        audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
        mirrors: [
          { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/infinitywar1080", isFast: true, type: "download" },
        ],
      },
    ],
  },

  // 12. Stranger Things (Season 4)
  {
    id: "stranger-things-s04",
    slug: "stranger-things-s04",
    title: "Stranger Things (Season 4)",
    type: "series",
    releaseYear: 2022,
    imdbRating: 8.7,
    runtime: "9 Episodes",
    genres: ["Drama", "Fantasy", "Horror"],
    languages: ["Hindi (Org 5.1)", "English (Atmos 5.1)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline:
      "Darkness returns to Hawkins just as high school begins. A terrifying supernatural threat known as Vecna strikes from the Upside Down, exposing secrets that connect back to the origins of the laboratory.",
    posterUrl: "https://images.metahub.space/poster/medium/tt4574334/img",
    backdropUrl: "https://images.metahub.space/background/large/tt4574334/img",
    screenshots: [
      "https://images.metahub.space/background/large/tt4574334/img",
    ],
    tags: ["Dual Audio", "Web Series", "Complete", "Trending", "Horror"],
    director: "The Duffer Brothers",
    cast: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder", "David Harbour"],
    seasons: [
      {
        seasonNumber: 4,
        seasonTitle: "Season 4 (Volume 1 & 2)",
        totalEpisodes: 9,
        batchPacks: [
          {
            id: "st4-batch-720p",
            resolution: "720p",
            formatLabel: "Complete S04 720p 10-Bit HEVC [Hindi 5.1 + English]",
            fileSize: "4.80 GB (Zip)",
            codec: "HEVC / x265 (10-bit)",
            audioSpecs: "Hindi 5.1 Org + English 5.1",
            mirrors: [
              { id: "st-b1", name: "Fast Cloud Direct (Zip)", url: "https://hubcloud.club/drive/st4batch720", isFast: true, type: "download" },
              { id: "st-b2", name: "PixelDrain Zip", url: "https://pixeldrain.com/u/st4sample720", isFast: false, type: "download" },
            ],
          },
          {
            id: "st4-batch-1080p",
            resolution: "1080p",
            formatLabel: "Complete S04 1080p FHD x264 [Hindi Org 5.1 + English Atmos]",
            fileSize: "12.40 GB (Zip)",
            codec: "x264 / AVC",
            audioSpecs: "Hindi 5.1 Org + English Atmos",
            mirrors: [
              { id: "st-b3", name: "Fast Cloud Direct (VIP)", url: "https://hubcloud.club/drive/st4batch1080", isFast: true, type: "download" },
              { id: "st-b4", name: "PixelDrain Zip", url: "https://pixeldrain.com/u/st4sample1080", isFast: false, type: "download" },
            ],
          },
        ],
        episodes: [
          {
            episodeNumber: 1,
            title: "Chapter One: The Hellfire Club",
            overview: "El struggles to fit in at school in California. Back in Hawkins, the high school boys prepare for an epic D&D battle.",
            variants: [
              {
                id: "st4-e01-720p",
                resolution: "720p",
                formatLabel: "Episode 1 (720p HEVC)",
                fileSize: "540 MB",
                codec: "HEVC",
                audioSpecs: "Hindi Org + English",
                mirrors: [
                  { id: "st-e1", name: "Fast Cloud", url: "https://hubcloud.club/drive/st4e01720", isFast: true, type: "download" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 13. Stree 2 (2024)
  {
    id: "stree-2-sarkate-ka-aatank-2024",
    slug: "stree-2-sarkate-ka-aatank-2024",
    title: "Stree 2: Sarkate Ka Aatank (2024)",
    type: "movie",
    releaseYear: 2024,
    imdbRating: 7.2,
    runtime: "2h 27min",
    genres: ["Comedy", "Horror"],
    languages: ["Hindi (Org 5.1)"],
    subtitles: ["English (ESub)"],
    storyline:
      "After the events of Stree, the town of Chanderi is being haunted again. This time, women are mysteriously abducted by a headless entity known as Sarkata. It is up to Vicky and his friends to save the town.",
    posterUrl: "https://images.metahub.space/poster/medium/tt28343719/img",
    backdropUrl: "https://images.metahub.space/background/large/tt28343719/img",
    screenshots: [
      "https://images.metahub.space/background/large/tt28343719/img",
    ],
    tags: ["Bollywood", "Trending", "Comedy", "Horror"],
    director: "Amar Kaushik",
    cast: ["Rajkummar Rao", "Shraddha Kapoor", "Pankaj Tripathi", "Abhishek Banerjee"],
    variants: [
      {
        id: "stree2-720p",
        resolution: "720p",
        formatLabel: "720p HD x264 [Hindi Org Audio]",
        fileSize: "1.10 GB",
        codec: "x264",
        audioSpecs: "Hindi 2.0 Org",
        mirrors: [
          { id: "s1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/stree2720", isFast: true, type: "download" },
        ],
      },
    ],
  },

  // 14. Mirzapur (Season 3)
  {
    id: "mirzapur-s03",
    slug: "mirzapur-s03",
    title: "Mirzapur (Season 3)",
    type: "series",
    releaseYear: 2024,
    imdbRating: 8.4,
    runtime: "10 Episodes",
    genres: ["Action", "Crime", "Drama", "Thriller"],
    languages: ["Hindi (Org 5.1)"],
    subtitles: ["English (ESub)"],
    storyline:
      "With Munna Tripathi dead, Guddu and Golu stake their claim on the throne of Mirzapur. But can they survive against Sharad Shukla and the politics of Purvanchal?",
    posterUrl: "https://images.metahub.space/poster/medium/tt6473300/img",
    backdropUrl: "https://images.metahub.space/background/large/tt6473300/img",
    screenshots: [
      "https://images.metahub.space/background/large/tt6473300/img",
    ],
    tags: ["Bollywood", "Web Series", "Complete", "Trending", "Drama"],
    director: "Gurmmeet Singh, Anand Iyer",
    cast: ["Pankaj Tripathi", "Ali Fazal", "Shweta Tripathi", "Rasika Dugal"],
    seasons: [
      {
        seasonNumber: 3,
        seasonTitle: "Season 3 (Complete)",
        totalEpisodes: 10,
        batchPacks: [
          {
            id: "mirzapur-s03-batch-720p",
            resolution: "720p",
            formatLabel: "Complete S03 720p HEVC [Hindi Org 5.1]",
            fileSize: "3.20 GB (Zip)",
            codec: "HEVC / x265",
            audioSpecs: "Hindi 5.1 Org",
            mirrors: [
              { id: "mzp-b1", name: "Fast Cloud Direct (Zip)", url: "https://hubcloud.club/drive/mzp3batch720", isFast: true, type: "download" },
            ],
          },
        ],
        episodes: [],
      },
    ],
  },
];
