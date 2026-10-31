const { neon } = require("@neondatabase/serverless");
require("dotenv").config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL);

// Complete Marvel database items to insert/update in Neon
const MARVEL_ITEMS = [
  // ==========================================
  // 1. UPCOMING / LATEST RELEASES (FRONT OF ROW)
  // ==========================================
  {
    id: "spider-man-brand-new-day",
    slug: "spider-man-brand-new-day",
    title: "Spider-Man: Brand New Day",
    type: "movie",
    release_year: 2026,
    imdb_rating: 8.9,
    runtime: "In Production",
    genres: ["Action", "Adventure", "Sci-Fi"],
    languages: ["Hindi (Org 5.1)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline: "Peter Parker embarks on a fresh chapter of his life in New York City, balancing college and high-stakes street-level heroics as the friendly neighborhood Spider-Man without the world knowing his identity.",
    poster_url: "https://images.metahub.space/poster/medium/tt22084616/img",
    backdrop_url: "https://images.metahub.space/background/large/tt22084616/img",
    screenshots: ["https://images.metahub.space/background/large/tt22084616/img"],
    tags: ["Marvel", "Hollywood", "Trending", "4K UHD", "Dual Audio"],
    director: "Destin Daniel Cretton",
    cast_members: ["Tom Holland", "Zendaya", "Jacob Batalon"],
    variants: [
      {
        id: "spm-bnd-teaser",
        resolution: "4K UHD",
        formatLabel: "Official First Look & 4K Teaser [Dual Audio]",
        fileSize: "280 MB",
        codec: "HEVC / HDR10",
        audioSpecs: "Hindi Org + English Atmos",
        mirrors: [
          { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/spm-bnd-teaser", isFast: true, type: "download" },
          { id: "m2", name: "PixelDrain Mirror", url: "https://pixeldrain.com/u/spm-bnd-teaser", type: "download" }
        ]
      }
    ]
  },
  {
    id: "the-fantastic-four-first-steps-2025",
    slug: "the-fantastic-four-first-steps-2025",
    title: "The Fantastic Four: First Steps",
    type: "movie",
    release_year: 2025,
    imdb_rating: 8.5,
    runtime: "In Production",
    genres: ["Action", "Adventure", "Sci-Fi"],
    languages: ["Hindi (Org 5.1)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline: "Set against the vibrant backdrop of a 1960s-inspired retro-futuristic world, Marvel's First Family must balance their roles as heroes and family when facing Galactus and the Silver Surfer.",
    poster_url: "https://images.metahub.space/poster/medium/tt10676052/img",
    backdrop_url: "https://images.metahub.space/background/large/tt10676052/img",
    screenshots: ["https://images.metahub.space/background/large/tt10676052/img"],
    tags: ["Marvel", "Hollywood", "Trending", "4K UHD", "Dual Audio"],
    director: "Matt Shakman",
    cast_members: ["Pedro Pascal", "Vanessa Kirby", "Joseph Quinn", "Ebon Moss-Bachrach"],
    variants: [
      {
        id: "ff-first-steps-4k",
        resolution: "4K UHD",
        formatLabel: "2160p 4K UHD IMAX First Look [Hindi + English]",
        fileSize: "450 MB",
        codec: "HEVC / HDR10",
        audioSpecs: "Hindi Org 5.1 + English Atmos",
        mirrors: [
          { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/ff-first-steps-4k", isFast: true, type: "download" }
        ]
      }
    ]
  },
  {
    id: "vision-quest-2026",
    slug: "vision-quest-2026",
    title: "Vision Quest",
    type: "series",
    release_year: 2026,
    imdb_rating: 8.6,
    runtime: "Upcoming Series",
    genres: ["Action", "Sci-Fi", "Drama"],
    languages: ["Hindi (Org 5.1)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline: "White Vision embarks on an existential journey to explore his newfound humanity and regain his memories following the events of Westview.",
    poster_url: "https://images.metahub.space/poster/medium/tt23069150/img",
    backdrop_url: "https://images.metahub.space/background/large/tt23069150/img",
    screenshots: ["https://images.metahub.space/background/large/tt23069150/img"],
    tags: ["Marvel", "Web Series", "Trending", "4K UHD", "Dual Audio"],
    director: "Terry Matalas",
    cast_members: ["Paul Bettany", "James Spader"],
    seasons: [
      {
        seasonNumber: 1,
        seasonTitle: "Season 1",
        totalEpisodes: 8,
        batchPacks: [
          {
            id: "vision-quest-s01-pack",
            resolution: "1080p",
            formatLabel: "Season 1 Complete 1080p Web-DL [Hindi + English]",
            fileSize: "4.20 GB (Zip)",
            codec: "x264",
            audioSpecs: "Hindi Org + English Atmos",
            mirrors: [
              { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/vq-s01-1080", isFast: true, type: "download" }
            ]
          }
        ],
        episodes: []
      }
    ]
  },
  {
    id: "daredevil-born-again-2025",
    slug: "daredevil-born-again-2025",
    title: "Daredevil: Born Again",
    type: "series",
    release_year: 2025,
    imdb_rating: 8.8,
    runtime: "Upcoming Series",
    genres: ["Action", "Crime", "Drama"],
    languages: ["Hindi (Org 5.1)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline: "Blind lawyer Matt Murdock and former crime boss Wilson Fisk fight for control of New York City's soul as Fisk launches a campaign for Mayor of NYC.",
    poster_url: "https://images.metahub.space/poster/medium/tt18923754/img",
    backdrop_url: "https://images.metahub.space/background/large/tt18923754/img",
    screenshots: ["https://images.metahub.space/background/large/tt18923754/img"],
    tags: ["Marvel", "Web Series", "Trending", "4K UHD", "Dual Audio"],
    director: "Justin Benson, Aaron Moorhead",
    cast_members: ["Charlie Cox", "Vincent D'Onofrio", "Jon Bernthal", "Deborah Ann Woll"],
    seasons: [
      {
        seasonNumber: 1,
        seasonTitle: "Season 1",
        totalEpisodes: 9,
        batchPacks: [
          {
            id: "dd-born-again-s01",
            resolution: "1080p",
            formatLabel: "Complete Season 1 1080p FHD [Hindi + English]",
            fileSize: "5.50 GB (Zip)",
            codec: "x264",
            audioSpecs: "Hindi Org + English Atmos",
            mirrors: [
              { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/dd-ba-1080", isFast: true, type: "download" }
            ]
          }
        ],
        episodes: []
      }
    ]
  },

  // ==========================================
  // 2. SPIDER-MAN FILMOGRAPHY (ALL RELEASES)
  // ==========================================
  {
    id: "spider-man-across-the-spider-verse",
    slug: "spider-man-across-the-spider-verse",
    title: "Spider-Man: Across the Spider-Verse",
    type: "movie",
    release_year: 2023,
    imdb_rating: 8.6,
    runtime: "140 min",
    genres: ["Animation", "Action", "Adventure"],
    languages: ["Hindi (Org 5.1)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
    poster_url: "https://images.metahub.space/poster/medium/tt9362722/img",
    backdrop_url: "https://images.metahub.space/background/large/tt9362722/img",
    screenshots: ["https://images.metahub.space/background/large/tt9362722/img"],
    tags: ["Marvel", "Animation", "Trending", "4K UHD", "Dual Audio"],
    director: "Joaquim Dos Santos",
    cast_members: ["Shameik Moore", "Hailee Steinfeld", "Oscar Isaac", "Daniel Kaluuya"],
    variants: [
      {
        id: "atsv-1080p",
        resolution: "1080p",
        formatLabel: "1080p FHD IMAX [Hindi Org 5.1 + English Atmos]",
        fileSize: "3.20 GB",
        codec: "x264",
        audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
        mirrors: [
          { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/atsv1080", isFast: true, type: "download" },
          { id: "m2", name: "PixelDrain Mirror", url: "https://pixeldrain.com/u/atsv1080", type: "download" }
        ]
      },
      {
        id: "atsv-4k",
        resolution: "4K UHD",
        formatLabel: "2160p 4K UHD IMAX HDR10+ [Hindi Org 5.1 + English Atmos]",
        fileSize: "8.10 GB",
        codec: "HEVC / HDR10+",
        audioSpecs: "Hindi Org 5.1 + English Atmos",
        mirrors: [
          { id: "m3", name: "Fast Cloud Direct (VIP)", url: "https://hubcloud.club/drive/atsv4k", isFast: true, type: "download" }
        ]
      }
    ]
  },
  {
    id: "spider-man-into-the-spider-verse",
    slug: "spider-man-into-the-spider-verse",
    title: "Spider-Man: Into the Spider-Verse",
    type: "movie",
    release_year: 2018,
    imdb_rating: 8.4,
    runtime: "117 min",
    genres: ["Animation", "Action", "Adventure"],
    languages: ["Hindi (Org 5.1)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline: "Teen Miles Morales becomes the new Spider-Man and joins other Spider-Heroes from various parallel universes to stop a menace to all reality.",
    poster_url: "https://images.metahub.space/poster/medium/tt4633694/img",
    backdrop_url: "https://images.metahub.space/background/large/tt4633694/img",
    screenshots: ["https://images.metahub.space/background/large/tt4633694/img"],
    tags: ["Marvel", "Animation", "Trending", "4K UHD", "Dual Audio"],
    director: "Bob Persichetti, Peter Ramsey",
    cast_members: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld", "Mahershala Ali"],
    variants: [
      {
        id: "itsv-1080p",
        resolution: "1080p",
        formatLabel: "1080p FHD IMAX [Hindi Org 5.1 + English Atmos]",
        fileSize: "2.90 GB",
        codec: "x264",
        audioSpecs: "Hindi Org 5.1 + English Atmos",
        mirrors: [
          { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/itsv1080", isFast: true, type: "download" }
        ]
      }
    ]
  },
  {
    id: "the-amazing-spider-man-2",
    slug: "the-amazing-spider-man-2",
    title: "The Amazing Spider-Man 2",
    type: "movie",
    release_year: 2014,
    imdb_rating: 6.6,
    runtime: "142 min",
    genres: ["Action", "Adventure", "Sci-Fi"],
    languages: ["Hindi (Org 5.1)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline: "When New York is put under siege by Oscorp, it is up to Spider-Man to save the city he swore to protect as well as the ones he loves.",
    poster_url: "https://images.metahub.space/poster/medium/tt1872181/img",
    backdrop_url: "https://images.metahub.space/background/large/tt1872181/img",
    screenshots: ["https://images.metahub.space/background/large/tt1872181/img"],
    tags: ["Marvel", "Hollywood", "Dual Audio", "4K UHD"],
    director: "Marc Webb",
    cast_members: ["Andrew Garfield", "Emma Stone", "Jamie Foxx", "Dane DeHaan"],
    variants: [
      {
        id: "tasm2-1080p",
        resolution: "1080p",
        formatLabel: "1080p FHD [Hindi Org + English Atmos]",
        fileSize: "3.10 GB",
        codec: "x264",
        audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
        mirrors: [
          { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/tasm2-1080", isFast: true, type: "download" }
        ]
      }
    ]
  },
  {
    id: "the-amazing-spider-man",
    slug: "the-amazing-spider-man",
    title: "The Amazing Spider-Man",
    type: "movie",
    release_year: 2012,
    imdb_rating: 6.9,
    runtime: "136 min",
    genres: ["Action", "Adventure", "Sci-Fi"],
    languages: ["Hindi (Org 5.1)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline: "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to solve the mystery of his parents' mysterious disappearance.",
    poster_url: "https://images.metahub.space/poster/medium/tt2586634/img",
    backdrop_url: "https://images.metahub.space/background/large/tt2586634/img",
    screenshots: ["https://images.metahub.space/background/large/tt2586634/img"],
    tags: ["Marvel", "Hollywood", "Dual Audio", "4K UHD"],
    director: "Marc Webb",
    cast_members: ["Andrew Garfield", "Emma Stone", "Rhys Ifans", "Denis Leary"],
    variants: [
      {
        id: "tasm1-1080p",
        resolution: "1080p",
        formatLabel: "1080p FHD [Hindi Org + English Atmos]",
        fileSize: "2.95 GB",
        codec: "x264",
        audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
        mirrors: [
          { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/tasm1-1080", isFast: true, type: "download" }
        ]
      }
    ]
  },
  {
    id: "spider-man-3-2007",
    slug: "spider-man-3-2007",
    title: "Spider-Man 3",
    type: "movie",
    release_year: 2007,
    imdb_rating: 6.3,
    runtime: "139 min",
    genres: ["Action", "Adventure", "Sci-Fi"],
    languages: ["Hindi (Org 5.1)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline: "A strange black entity from another world bonds with Peter Parker and causes inner turmoil as he contends with new villains, Sandman and Venom.",
    poster_url: "https://images.metahub.space/poster/medium/tt0413300/img",
    backdrop_url: "https://images.metahub.space/background/large/tt0413300/img",
    screenshots: ["https://images.metahub.space/background/large/tt0413300/img"],
    tags: ["Marvel", "Hollywood", "Dual Audio", "4K UHD"],
    director: "Sam Raimi",
    cast_members: ["Tobey Maguire", "Kirsten Dunst", "James Franco", "Thomas Haden Church"],
    variants: [
      {
        id: "sm3-1080p",
        resolution: "1080p",
        formatLabel: "1080p FHD [Hindi Org 5.1 + English Atmos]",
        fileSize: "3.10 GB",
        codec: "x264",
        audioSpecs: "Hindi Org 5.1 + English Atmos",
        mirrors: [
          { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/sm3-1080", isFast: true, type: "download" }
        ]
      }
    ]
  },
  {
    id: "spider-man-2-2004",
    slug: "spider-man-2-2004",
    title: "Spider-Man 2",
    type: "movie",
    release_year: 2004,
    imdb_rating: 7.5,
    runtime: "127 min",
    genres: ["Action", "Adventure", "Sci-Fi"],
    languages: ["Hindi (Org 5.1)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline: "Peter Parker is beset with troubles in his failing personal life as he battles a brilliant scientist named Doctor Otto Octavius.",
    poster_url: "https://images.metahub.space/poster/medium/tt0316654/img",
    backdrop_url: "https://images.metahub.space/background/large/tt0316654/img",
    screenshots: ["https://images.metahub.space/background/large/tt0316654/img"],
    tags: ["Marvel", "Hollywood", "Dual Audio", "4K UHD"],
    director: "Sam Raimi",
    cast_members: ["Tobey Maguire", "Kirsten Dunst", "Alfred Molina", "James Franco"],
    variants: [
      {
        id: "sm2-1080p",
        resolution: "1080p",
        formatLabel: "1080p FHD Remastered [Hindi Org + English Atmos]",
        fileSize: "2.80 GB",
        codec: "x264",
        audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
        mirrors: [
          { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/sm2-1080", isFast: true, type: "download" }
        ]
      }
    ]
  },
  {
    id: "spider-man-2002",
    slug: "spider-man-2002",
    title: "Spider-Man",
    type: "movie",
    release_year: 2002,
    imdb_rating: 7.4,
    runtime: "121 min",
    genres: ["Action", "Adventure", "Sci-Fi"],
    languages: ["Hindi (Org 5.1)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline: "After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he must use to fight the Green Goblin.",
    poster_url: "https://images.metahub.space/poster/medium/tt0145487/img",
    backdrop_url: "https://images.metahub.space/background/large/tt0145487/img",
    screenshots: ["https://images.metahub.space/background/large/tt0145487/img"],
    tags: ["Marvel", "Hollywood", "Dual Audio", "4K UHD"],
    director: "Sam Raimi",
    cast_members: ["Tobey Maguire", "Willem Dafoe", "Kirsten Dunst", "James Franco"],
    variants: [
      {
        id: "sm1-1080p",
        resolution: "1080p",
        formatLabel: "1080p FHD Remastered [Hindi Org + English Atmos]",
        fileSize: "2.65 GB",
        codec: "x264",
        audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
        mirrors: [
          { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/sm1-1080", isFast: true, type: "download" }
        ]
      }
    ]
  },

  // ==========================================
  // 3. ALL X-MEN MOVIES & SPIN-OFFS
  // ==========================================
  {
    id: "x-men-97",
    slug: "x-men-97",
    title: "X-Men '97",
    type: "series",
    release_year: 2024,
    imdb_rating: 8.9,
    runtime: "10 Episodes",
    genres: ["Animation", "Action", "Adventure"],
    languages: ["Hindi (Org 5.1)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline: "A band of mutants use their uncanny gifts to protect a world that hates and fears them in the aftermath of Professor X's death.",
    poster_url: "https://images.metahub.space/poster/medium/tt16026746/img",
    backdrop_url: "https://images.metahub.space/background/large/tt16026746/img",
    screenshots: ["https://images.metahub.space/background/large/tt16026746/img"],
    tags: ["Marvel", "Animation", "Web Series", "Trending", "4K UHD", "Dual Audio"],
    director: "Jake Castorena",
    cast_members: ["Ray Chase", "Jennifer Hale", "Lenore Zann", "George Buza"],
    seasons: [
      {
        seasonNumber: 1,
        seasonTitle: "Season 1 (Complete)",
        totalEpisodes: 10,
        batchPacks: [
          {
            id: "xmen97-s01-pack",
            resolution: "1080p",
            formatLabel: "Complete Season 1 1080p FHD [Hindi Org + English Atmos]",
            fileSize: "3.80 GB (Zip)",
            codec: "x264",
            audioSpecs: "Hindi Org 5.1 + English Atmos",
            mirrors: [
              { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/xmen97-s01-1080", isFast: true, type: "download" }
            ]
          }
        ],
        episodes: []
      }
    ]
  },
  {
    id: "the-new-mutants-2020",
    slug: "the-new-mutants-2020",
    title: "The New Mutants",
    type: "movie",
    release_year: 2020,
    imdb_rating: 5.3,
    runtime: "94 min",
    genres: ["Action", "Horror", "Sci-Fi"],
    languages: ["Hindi (Org 5.1)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline: "Five young mutants, just discovering their abilities while held in a secret facility against their will, fight to escape their past sins and save themselves.",
    poster_url: "https://images.metahub.space/poster/medium/tt4682266/img",
    backdrop_url: "https://images.metahub.space/background/large/tt4682266/img",
    screenshots: ["https://images.metahub.space/background/large/tt4682266/img"],
    tags: ["Marvel", "Hollywood", "Dual Audio", "Horror"],
    director: "Josh Boone",
    cast_members: ["Maisie Williams", "Anya Taylor-Joy", "Charlie Heaton", "Alice Braga"],
    variants: [
      {
        id: "new-mutants-1080p",
        resolution: "1080p",
        formatLabel: "1080p FHD [Hindi Org + English Atmos]",
        fileSize: "2.40 GB",
        codec: "x264",
        audioSpecs: "Hindi Org 5.1 + English Atmos",
        mirrors: [
          { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/new-mutants-1080", isFast: true, type: "download" }
        ]
      }
    ]
  },
  {
    id: "dark-phoenix-2019",
    slug: "dark-phoenix-2019",
    title: "Dark Phoenix",
    type: "movie",
    release_year: 2019,
    imdb_rating: 5.7,
    runtime: "113 min",
    genres: ["Action", "Adventure", "Sci-Fi"],
    languages: ["Hindi (Org 5.1)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline: "Jean Grey begins to develop incredible powers that corrupt and turn her into a Dark Phoenix, causing the X-Men to decide if her life is worth more than all of humanity.",
    poster_url: "https://images.metahub.space/poster/medium/tt6565702/img",
    backdrop_url: "https://images.metahub.space/background/large/tt6565702/img",
    screenshots: ["https://images.metahub.space/background/large/tt6565702/img"],
    tags: ["Marvel", "Hollywood", "Dual Audio", "4K UHD"],
    director: "Simon Kinberg",
    cast_members: ["James McAvoy", "Michael Fassbender", "Jennifer Lawrence", "Sophie Turner"],
    variants: [
      {
        id: "dark-phoenix-1080p",
        resolution: "1080p",
        formatLabel: "1080p FHD [Hindi Clean Org + English Atmos]",
        fileSize: "2.75 GB",
        codec: "x264",
        audioSpecs: "Hindi Org 5.1 + English Atmos",
        mirrors: [
          { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/dark-phoenix-1080", isFast: true, type: "download" }
        ]
      }
    ]
  },
  {
    id: "deadpool-2-2018",
    slug: "deadpool-2-2018",
    title: "Deadpool 2",
    type: "movie",
    release_year: 2018,
    imdb_rating: 7.7,
    runtime: "119 min",
    genres: ["Action", "Comedy", "Sci-Fi"],
    languages: ["Hindi (Org 5.1)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline: "Foul-mouthed mutant mercenary Wade Wilson assembles a team of fellow mutant rogues to protect a young boy with supernatural abilities from the brutal, time-traveling cyborg Cable.",
    poster_url: "https://images.metahub.space/poster/medium/tt5463162/img",
    backdrop_url: "https://images.metahub.space/background/large/tt5463162/img",
    screenshots: ["https://images.metahub.space/background/large/tt5463162/img"],
    tags: ["Marvel", "Hollywood", "Trending", "Dual Audio", "4K UHD"],
    director: "David Leitch",
    cast_members: ["Ryan Reynolds", "Josh Brolin", "Morena Baccarin", "Zazie Beetz"],
    variants: [
      {
        id: "dp2-1080p",
        resolution: "1080p",
        formatLabel: "1080p FHD Extended Super Duper Cut [Hindi Org + English]",
        fileSize: "3.20 GB",
        codec: "x264",
        audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
        mirrors: [
          { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/dp2-1080", isFast: true, type: "download" }
        ]
      }
    ]
  },
  {
    id: "logan-2017",
    slug: "logan-2017",
    title: "Logan",
    type: "movie",
    release_year: 2017,
    imdb_rating: 8.1,
    runtime: "137 min",
    genres: ["Action", "Drama", "Sci-Fi"],
    languages: ["Hindi (Org 5.1)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline: "In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.",
    poster_url: "https://images.metahub.space/poster/medium/tt3315342/img",
    backdrop_url: "https://images.metahub.space/background/large/tt3315342/img",
    screenshots: ["https://images.metahub.space/background/large/tt3315342/img"],
    tags: ["Marvel", "Hollywood", "Trending", "Dual Audio", "4K UHD"],
    director: "James Mangold",
    cast_members: ["Hugh Jackman", "Patrick Stewart", "Dafne Keen", "Boyd Holbrook"],
    variants: [
      {
        id: "logan-1080p",
        resolution: "1080p",
        formatLabel: "1080p FHD IMAX [Hindi Clean Org + English Atmos]",
        fileSize: "3.40 GB",
        codec: "x264",
        audioSpecs: "Hindi Org 5.1 + English Atmos",
        mirrors: [
          { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/logan-1080", isFast: true, type: "download" }
        ]
      }
    ]
  },
  {
    id: "deadpool-2016",
    slug: "deadpool-2016",
    title: "Deadpool",
    type: "movie",
    release_year: 2016,
    imdb_rating: 8.0,
    runtime: "108 min",
    genres: ["Action", "Comedy", "Sci-Fi"],
    languages: ["Hindi (Org 5.1)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline: "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
    poster_url: "https://images.metahub.space/poster/medium/tt1431045/img",
    backdrop_url: "https://images.metahub.space/background/large/tt1431045/img",
    screenshots: ["https://images.metahub.space/background/large/tt1431045/img"],
    tags: ["Marvel", "Hollywood", "Trending", "Dual Audio", "4K UHD"],
    director: "Tim Miller",
    cast_members: ["Ryan Reynolds", "Morena Baccarin", "T.J. Miller", "Ed Skrein"],
    variants: [
      {
        id: "dp1-1080p",
        resolution: "1080p",
        formatLabel: "1080p FHD [Hindi Org 5.1 + English Atmos]",
        fileSize: "2.80 GB",
        codec: "x264",
        audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
        mirrors: [
          { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/dp1-1080", isFast: true, type: "download" }
        ]
      }
    ]
  },
  {
    id: "x-men-days-of-future-past",
    slug: "x-men-days-of-future-past",
    title: "X-Men: Days of Future Past",
    type: "movie",
    release_year: 2014,
    imdb_rating: 7.9,
    runtime: "132 min",
    genres: ["Action", "Adventure", "Sci-Fi"],
    languages: ["Hindi (Org 5.1)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline: "The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.",
    poster_url: "https://images.metahub.space/poster/medium/tt1877832/img",
    backdrop_url: "https://images.metahub.space/background/large/tt1877832/img",
    screenshots: ["https://images.metahub.space/background/large/tt1877832/img"],
    tags: ["Marvel", "Hollywood", "Trending", "Dual Audio", "4K UHD"],
    director: "Bryan Singer",
    cast_members: ["Hugh Jackman", "James McAvoy", "Michael Fassbender", "Jennifer Lawrence"],
    variants: [
      {
        id: "dofp-1080p",
        resolution: "1080p",
        formatLabel: "1080p FHD Rogue Cut [Hindi Clean Org + English Atmos]",
        fileSize: "3.60 GB",
        codec: "x264",
        audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
        mirrors: [
          { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/dofp-1080", isFast: true, type: "download" }
        ]
      }
    ]
  },
  {
    id: "x-men-first-class",
    slug: "x-men-first-class",
    title: "X-Men: First Class",
    type: "movie",
    release_year: 2011,
    imdb_rating: 7.7,
    runtime: "131 min",
    genres: ["Action", "Sci-Fi"],
    languages: ["Hindi (Org 5.1)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline: "In the 1960s, superpowered humans Charles Xavier and Erik Lensherr work together to find others like them, but Erik's vengeful pursuit of an ambitious mutant who ruined his life causes a schism.",
    poster_url: "https://images.metahub.space/poster/medium/tt1270798/img",
    backdrop_url: "https://images.metahub.space/background/large/tt1270798/img",
    screenshots: ["https://images.metahub.space/background/large/tt1270798/img"],
    tags: ["Marvel", "Hollywood", "Dual Audio", "4K UHD"],
    director: "Matthew Vaughn",
    cast_members: ["James McAvoy", "Michael Fassbender", "Jennifer Lawrence", "Kevin Bacon"],
    variants: [
      {
        id: "firstclass-1080p",
        resolution: "1080p",
        formatLabel: "1080p FHD [Hindi Org 5.1 + English Atmos]",
        fileSize: "2.90 GB",
        codec: "x264",
        audioSpecs: "Hindi Org 5.1 + English Atmos",
        mirrors: [
          { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/firstclass-1080", isFast: true, type: "download" }
        ]
      }
    ]
  },
  {
    id: "x-men-2000",
    slug: "x-men-2000",
    title: "X-Men",
    type: "movie",
    release_year: 2000,
    imdb_rating: 7.3,
    runtime: "104 min",
    genres: ["Action", "Adventure", "Sci-Fi"],
    languages: ["Hindi (Org 5.1)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline: "In a world where mutants exist and are discriminated against, two groups form: the peace-seeking X-Men led by Professor Charles Xavier and the radical Brotherhood of Mutants led by Magneto.",
    poster_url: "https://images.metahub.space/poster/medium/tt0120903/img",
    backdrop_url: "https://images.metahub.space/background/large/tt0120903/img",
    screenshots: ["https://images.metahub.space/background/large/tt0120903/img"],
    tags: ["Marvel", "Hollywood", "Dual Audio", "4K UHD"],
    director: "Bryan Singer",
    cast_members: ["Hugh Jackman", "Patrick Stewart", "Ian McKellen", "Famke Janssen"],
    variants: [
      {
        id: "xmen1-1080p",
        resolution: "1080p",
        formatLabel: "1080p FHD Remastered [Hindi Org + English Atmos]",
        fileSize: "2.50 GB",
        codec: "x264",
        audioSpecs: "Hindi Clean Org 5.1 + English Atmos",
        mirrors: [
          { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/xmen1-1080", isFast: true, type: "download" }
        ]
      }
    ]
  },

  // ==========================================
  // 4. ANIMATED MARVEL CLASSICS & SERIES
  // ==========================================
  {
    id: "planet-hulk-2010",
    slug: "planet-hulk-2010",
    title: "Planet Hulk",
    type: "movie",
    release_year: 2010,
    imdb_rating: 6.8,
    runtime: "81 min",
    genres: ["Animation", "Action", "Adventure"],
    languages: ["Hindi (Org 5.1)", "English (Dolby Atmos)"],
    subtitles: ["English (ESub)", "Hindi"],
    storyline: "Exiled to a harsh planet by Earth's heroes, the Hulk is captured and forced to fight as a gladiator for the wicked Red King.",
    poster_url: "https://images.metahub.space/poster/medium/tt1483025/img",
    backdrop_url: "https://images.metahub.space/background/large/tt1483025/img",
    screenshots: ["https://images.metahub.space/background/large/tt1483025/img"],
    tags: ["Marvel", "Animation", "Dual Audio"],
    director: "Sam Liu",
    cast_members: ["Rick D. Wasserman", "Lisa Ann Beley", "Mark Hildreth"],
    variants: [
      {
        id: "planethulk-1080p",
        resolution: "1080p",
        formatLabel: "1080p FHD [Hindi Org + English]",
        fileSize: "1.80 GB",
        codec: "x264",
        audioSpecs: "Hindi Org + English 5.1",
        mirrors: [
          { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/planethulk1080", isFast: true, type: "download" }
        ]
      }
    ]
  },
  {
    id: "spider-man-the-animated-series-1994",
    slug: "spider-man-the-animated-series-1994",
    title: "Spider-Man: The Animated Series",
    type: "series",
    release_year: 1994,
    imdb_rating: 8.4,
    runtime: "5 Seasons",
    genres: ["Animation", "Action", "Adventure"],
    languages: ["Hindi (Org)", "English (Stereo)"],
    subtitles: ["English"],
    storyline: "Bitten by a radioactive spider, high school student Peter Parker gains the speed, strength and powers of a spider to defend New York against the Sinister Six and Kingpin.",
    poster_url: "https://images.metahub.space/poster/medium/tt0112175/img",
    backdrop_url: "https://images.metahub.space/background/large/tt0112175/img",
    screenshots: ["https://images.metahub.space/background/large/tt0112175/img"],
    tags: ["Marvel", "Animation", "Web Series", "Complete"],
    director: "Bob Richardson",
    cast_members: ["Christopher Daniel Barnes", "Sara Ballantine", "Edward Asner"],
    seasons: [
      {
        seasonNumber: 1,
        seasonTitle: "Seasons 1-5 Complete Boxset",
        totalEpisodes: 65,
        batchPacks: [
          {
            id: "spm94-complete-boxset",
            resolution: "720p",
            formatLabel: "Complete Series Remastered [Hindi + English]",
            fileSize: "9.80 GB (Zip)",
            codec: "x264",
            audioSpecs: "Hindi Org + English",
            mirrors: [
              { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/spm94-boxset", isFast: true, type: "download" }
            ]
          }
        ],
        episodes: []
      }
    ]
  },
  {
    id: "the-avengers-earths-mightiest-heroes",
    slug: "the-avengers-earths-mightiest-heroes",
    title: "The Avengers: Earth's Mightiest Heroes",
    type: "series",
    release_year: 2010,
    imdb_rating: 8.3,
    runtime: "2 Seasons",
    genres: ["Animation", "Action", "Adventure"],
    languages: ["Hindi (Org)", "English (Dolby 5.1)"],
    subtitles: ["English"],
    storyline: "After 75 of the world's most dangerous super-villains are mysteriously freed from prison, the greatest heroes of Earth must band together to form the Avengers.",
    poster_url: "https://images.metahub.space/poster/medium/tt1626038/img",
    backdrop_url: "https://images.metahub.space/background/large/tt1626038/img",
    screenshots: ["https://images.metahub.space/background/large/tt1626038/img"],
    tags: ["Marvel", "Animation", "Web Series", "Complete"],
    director: "Ciro Nieli",
    cast_members: ["Eric Loomis", "Brian Bloom", "Chris Cox"],
    seasons: [
      {
        seasonNumber: 1,
        seasonTitle: "Seasons 1 & 2 Complete",
        totalEpisodes: 52,
        batchPacks: [
          {
            id: "emh-complete-1080p",
            resolution: "1080p",
            formatLabel: "Complete Series 1080p FHD [Hindi + English]",
            fileSize: "7.50 GB (Zip)",
            codec: "x264",
            audioSpecs: "Hindi Org + English",
            mirrors: [
              { id: "m1", name: "Fast Cloud Direct", url: "https://hubcloud.club/drive/emh-complete", isFast: true, type: "download" }
            ]
          }
        ],
        episodes: []
      }
    ]
  }
];

async function run() {
  console.log(`Starting insertion of ${MARVEL_ITEMS.length} Marvel entries directly into Neon DB...`);

  for (const item of MARVEL_ITEMS) {
    try {
      await sql`
        INSERT INTO media_items (
          id, slug, title, type, release_year, imdb_rating, runtime,
          genres, languages, subtitles, storyline,
          poster_url, backdrop_url, screenshots, tags,
          director, cast_members, variants, seasons
        ) VALUES (
          ${item.id}, ${item.slug}, ${item.title}, ${item.type}, ${item.release_year}, ${item.imdb_rating}, ${item.runtime},
          ${JSON.stringify(item.genres)}, ${JSON.stringify(item.languages)}, ${JSON.stringify(item.subtitles)}, ${item.storyline},
          ${item.poster_url}, ${item.backdrop_url}, ${JSON.stringify(item.screenshots)}, ${JSON.stringify(item.tags)},
          ${item.director}, ${JSON.stringify(item.cast_members)}, ${item.variants ? JSON.stringify(item.variants) : null}, ${item.seasons ? JSON.stringify(item.seasons) : null}
        )
        ON CONFLICT (id) DO UPDATE SET
          title = EXCLUDED.title,
          slug = EXCLUDED.slug,
          type = EXCLUDED.type,
          release_year = EXCLUDED.release_year,
          imdb_rating = EXCLUDED.imdb_rating,
          runtime = EXCLUDED.runtime,
          genres = EXCLUDED.genres,
          languages = EXCLUDED.languages,
          subtitles = EXCLUDED.subtitles,
          storyline = EXCLUDED.storyline,
          poster_url = EXCLUDED.poster_url,
          backdrop_url = EXCLUDED.backdrop_url,
          screenshots = EXCLUDED.screenshots,
          tags = EXCLUDED.tags,
          director = EXCLUDED.director,
          cast_members = EXCLUDED.cast_members,
          variants = EXCLUDED.variants,
          seasons = EXCLUDED.seasons;
      `;
      console.log(`✓ Ingested: ${item.title} (${item.release_year})`);
    } catch (err) {
      console.error(`✗ Error on ${item.title}:`, err.message);
    }
  }

  const finalCount = await sql`SELECT count(*) FROM media_items WHERE tags::text ILIKE '%Marvel%';`;
  console.log(`\nDone! Total Marvel items in Neon DB: ${finalCount[0].count}`);
}

run().catch(console.error);
