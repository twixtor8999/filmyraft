import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/media/HeroBanner";
import FilterBar from "@/components/media/FilterBar";
import MediaGrid from "@/components/media/MediaGrid";
import HorizontalMediaRow from "@/components/media/HorizontalMediaRow";
import AdBanner from "@/components/layout/AdBanner";
import { getAllMedia } from "@/lib/mediaRepo";

interface HomePageProps {
  searchParams: Promise<{
    q?: string;
    category?: string;
    genre?: string;
    tag?: string;
    type?: string;
  }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const rawQ = params.q?.trim() || "";
  const q = rawQ.toLowerCase();
  const cleanQ = q.replace(/[^a-z0-9]/g, "");
  const category = params.category;
  const genre = params.genre;
  const tag = params.tag;
  const type = params.type;

  const allItems = await getAllMedia();

  // Universal smart search matcher with typo tolerance and token support
  const matchesSearch = (item: typeof allItems[0]): boolean => {
    if (!q) return true;
    const rawQ = q;
    const dedupQ = cleanQ.replace(/([a-z])\1+/g, "$1");
    const qTokens = rawQ.replace(/[^a-z0-9]/g, " ").split(/\s+/).filter(Boolean);

    const rawTitle = (item.title || "").toLowerCase();
    const cleanTitle = rawTitle.replace(/[^a-z0-9]/g, "");
    const dedupTitle = cleanTitle.replace(/([a-z])\1+/g, "$1");
    const titleTokens = rawTitle.replace(/[^a-z0-9]/g, " ").split(/\s+/).filter(Boolean);

    // 1. Direct or clean contains
    if (rawTitle.includes(rawQ)) return true;
    if (cleanQ.length >= 3 && cleanTitle.includes(cleanQ)) return true;
    if (dedupQ.length >= 3 && dedupTitle.includes(dedupQ)) return true;

    // 2. Token-based fuzzy matching (e.g., "ant mann" -> matches "ant" & "man")
    if (qTokens.length > 0) {
      const allTokensInTitle = qTokens.every((qTok) => {
        const dedupQTok = qTok.replace(/([a-z])\1+/g, "$1");
        return titleTokens.some((tTok) => {
          if (tTok === qTok || tTok.startsWith(qTok)) return true;
          const dedupTTok = tTok.replace(/([a-z])\1+/g, "$1");
          if (dedupTTok === dedupQTok || dedupTTok.startsWith(dedupQTok)) return true;
          // Typo tolerance (1 char diff) for 3+ letter words
          if (Math.abs(qTok.length - tTok.length) <= 1 && qTok.length >= 3) {
            let diff = 0, i = 0, j = 0;
            while (i < qTok.length && j < tTok.length) {
              if (qTok[i] !== tTok[j]) {
                diff++;
                if (diff > 1) break;
                if (qTok.length > tTok.length) i++;
                else if (tTok.length > qTok.length) j++;
                else { i++; j++; }
              } else { i++; j++; }
            }
            if (diff <= 1) return true;
          }
          return false;
        });
      });
      if (allTokensInTitle) return true;
    }

    // 3. Match against tags (e.g. tag "Ant-Man", "Iron Man", "Deadpool", "X-Men")
    for (const tagItem of item.tags || []) {
      const rawTag = tagItem.toLowerCase();
      const cleanTag = rawTag.replace(/[^a-z0-9]/g, "");
      const dedupTag = cleanTag.replace(/([a-z])\1+/g, "$1");
      if (rawTag.includes(rawQ) || (cleanQ.length >= 3 && cleanTag.includes(cleanQ)) || (dedupQ.length >= 3 && dedupTag.includes(dedupQ))) {
        return true;
      }
    }

    return false;
  };

  // Search & Filter evaluation
  let filteredItems = allItems.filter((item) => {
    if (genre && !item.genres.some((g) => g.toLowerCase() === genre.toLowerCase())) {
      return false;
    }

    if (category) {
      if (category === "Bollywood" && !item.tags.includes("Bollywood")) return false;
      if (category === "Hollywood" && !item.tags.includes("Hollywood")) return false;
    }

    if (tag && !item.tags.includes(tag)) {
      return false;
    }

    if (type && item.type !== type) {
      return false;
    }

    if (q) {
      return matchesSearch(item);
    }

    return true;
  });

  // If no direct title/tag match was found for query, fallback to storyline/genre search
  if (q && filteredItems.length === 0) {
    filteredItems = allItems.filter((item) => {
      const rawStory = (item.storyline || "").toLowerCase();
      const inGenre = item.genres.some((g) => g.toLowerCase().includes(q));
      return rawStory.includes(q) || inGenre;
    });
  }

  // Sorting search results
  const isFranchiseOrSerial =
    cleanQ.includes("antman") ||
    cleanQ.includes("ironman") ||
    cleanQ.includes("deadpool") ||
    cleanQ.includes("xmen") ||
    cleanQ.includes("wolverine") ||
    cleanQ.includes("spiderman") ||
    cleanQ.includes("thor") ||
    cleanQ.includes("captainamerica") ||
    cleanQ.includes("captain") ||
    cleanQ.includes("avenger");

  if (isFranchiseOrSerial) {
    // Display all linked franchise movies in serial chronological order (Part 1, 2, 3...)
    filteredItems.sort((a, b) => {
      // Prioritize direct title matches over indirect tag matches
      const aTitle = a.title.toLowerCase().replace(/[^a-z0-9]/g, "");
      const bTitle = b.title.toLowerCase().replace(/[^a-z0-9]/g, "");
      const aHas = aTitle.includes(cleanQ.replace(/([a-z])\1+/g, "$1"));
      const bHas = bTitle.includes(cleanQ.replace(/([a-z])\1+/g, "$1"));
      if (aHas && !bHas) return -1;
      if (!aHas && bHas) return 1;

      if (a.releaseYear !== b.releaseYear) {
        return a.releaseYear - b.releaseYear;
      }
      return a.title.localeCompare(b.title);
    });
  } else if (q) {
    // For general searches, prioritize exact title matches, then release year descending
    filteredItems.sort((a, b) => {
      const aTitleMatch = a.title.toLowerCase().includes(q);
      const bTitleMatch = b.title.toLowerCase().includes(q);
      if (aTitleMatch && !bTitleMatch) return -1;
      if (!aTitleMatch && bTitleMatch) return 1;
      if (b.releaseYear !== a.releaseYear) {
        return b.releaseYear - a.releaseYear;
      }
      return b.imdbRating - a.imdbRating;
    });
  }

  const isHomeView = !q && !category && !genre && !tag && !type;

  // 1. Hero Banner Featured Titles (Epic Marvel & Blockbusters - Endgame first matching mockup)
  const endgame = allItems.find((m) => m.title.includes("Endgame"));
  const dpw = allItems.find((m) => m.title.includes("Deadpool"));
  const spiderman = allItems.find((m) => m.title.includes("Spider-Man"));
  const oppenheimer = allItems.find((m) => m.title.includes("Oppenheimer"));
  const strangerThings = allItems.find((m) => m.title.includes("Stranger Things"));

  const orderedHero = [endgame, dpw, spiderman, oppenheimer, strangerThings].filter(Boolean) as typeof allItems;
  const heroFeatured = orderedHero.length > 0 ? orderedHero : allItems.slice(0, 5);

  // 2. Section 1: Marvel Cinematic Universe (Latest Releases)
  // Ordered strictly: 1st Brand New Day, 2nd Fantastic Four: First Steps, 3rd Vision Quest (latest series), followed by latest releases
  const allMarvel = allItems.filter((m) => m.tags.includes("Marvel"));
  const prioritySlugs = [
    "spider-man-brand-new-day",
    "the-fantastic-four-first-steps-2025",
    "vision-quest-2026",
    "daredevil-born-again-2025",
  ];

  const priorityMarvel = prioritySlugs
    .map((slug) => allMarvel.find((m) => m.slug === slug || m.id === slug))
    .filter(Boolean) as typeof allItems;

  const remainingMarvel = allMarvel
    .filter((m) => !prioritySlugs.includes(m.slug) && !prioritySlugs.includes(m.id))
    .sort((a, b) => b.releaseYear - a.releaseYear);

  const marvelSection = [...priorityMarvel, ...remainingMarvel].slice(0, 16);

  // 3. Section 2: Trending Hollywood Movies (Matching Reference Mockup)
  const trendingSection = allItems
    .filter((m) => (m.tags.includes("Hollywood") || m.imdbRating >= 7.8) && !m.title.includes("Endgame"))
    .sort((a, b) => b.imdbRating - a.imdbRating)
    .slice(0, 12);

  // 4. Section 3: Drama & Award Winning Cinema
  const dramaSection = allItems
    .filter((m) => m.genres.some((g) => g.toLowerCase().includes("drama")))
    .slice(0, 12);

  // 5. Section 4: Horror & Supernatural Thrillers
  const horrorSection = allItems
    .filter((m) =>
      m.genres.some((g) =>
        g.toLowerCase().includes("horror") ||
        g.toLowerCase().includes("mystery") ||
        g.toLowerCase().includes("thriller")
      )
    )
    .slice(0, 12);

  // 6. Section 5: Sci-Fi & Futuristic Blockbusters
  const sciFiSection = allItems
    .filter((m) => m.genres.some((g) => g.toLowerCase().includes("sci-fi")))
    .slice(0, 12);

  return (
    <>
      <Navbar initialSearchQuery={params.q} />

      <main>
        {/* Dynamic Hero Carousel matching mockup with blue CTA and side buttons */}
        {isHomeView && <HeroBanner items={heroFeatured} />}

        <div className="container" style={{ paddingBottom: "3rem" }}>
          {/* Top Leaderboard Ad */}
          <AdBanner label="Top Sponsored Banner" size="leaderboard" />

          {/* Quick Filter Pill Bar (Hollywood, Movies, TV Shows, Action, Sci-Fi, Drama, Horror) */}
          <FilterBar currentCategory={category} currentGenre={genre} currentType={type} />

          {isHomeView ? (
            <>
              {/* SECTION 1: Marvel Cinematic Universe */}
              <HorizontalMediaRow
                items={marvelSection}
                title="Marvel Cinematic Universe"
                subtitle="Explore Marvel Studios Blockbusters in 4K UHD, 1080p IMAX & Dual Audio"
                viewAllLink="/marvel"
              />

              {/* SECTION 2: Trending Hollywood Movies (Matching Reference Mockup) */}
              <HorizontalMediaRow
                items={trendingSection}
                title="Trending Hollywood Movies"
                subtitle="Highest rated Hollywood blockbusters and trending global cinema"
                viewAllLink="/?category=Hollywood"
              />

              {/* In-Content Sponsor Banner */}
              <AdBanner label="Featured Ad Placement" size="responsive" />

              {/* SECTION 3: Drama Section */}
              <HorizontalMediaRow
                items={dramaSection}
                title="Compelling Drama & Biographies"
                subtitle="Critically acclaimed dramatic masterpieces and character-driven cinema"
                viewAllLink="/?genre=Drama"
              />

              {/* SECTION 4: Horror & Thriller Section */}
              <HorizontalMediaRow
                items={horrorSection}
                title="Horror & Supernatural Thrillers"
                subtitle="Chilling paranormal horror, psychological thrillers, and suspense"
                viewAllLink="/?genre=Horror"
              />

              {/* SECTION 5: Sci-Fi & Futuristic */}
              <HorizontalMediaRow
                items={sciFiSection}
                title="Sci-Fi & Futuristic Adventures"
                subtitle="Time travel, multiverse sagas, and epic interstellar journeys"
                viewAllLink="/?genre=Sci-Fi"
              />
            </>
          ) : (
            /* Search or Filtered Results Grid */
            <MediaGrid
              items={filteredItems}
              title={
                q
                  ? `Search Results for "${params.q}" (${filteredItems.length})`
                  : genre
                  ? `${genre} Movies & Series (${filteredItems.length})`
                  : category
                  ? `${category} Releases`
                  : type === "series"
                  ? "Popular TV Web Series"
                  : "Latest Releases"
              }
              subtitle="Verified prints with dual-audio, subtitles & high-speed direct cloud mirrors"
            />
          )}

          {/* Bottom Ad Banner */}
          <AdBanner label="Sponsored Recommendations" size="responsive" />
        </div>
      </main>

      <Footer />
    </>
  );
}
