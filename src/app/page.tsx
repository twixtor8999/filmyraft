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
  const q = params.q?.toLowerCase().trim();
  const category = params.category;
  const genre = params.genre;
  const tag = params.tag;
  const type = params.type;

  const allItems = await getAllMedia();

  // Search & Filter evaluation
  const filteredItems = allItems.filter((item) => {
    if (q) {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchStory = item.storyline.toLowerCase().includes(q);
      const matchGenre = item.genres.some((g) => g.toLowerCase().includes(q));
      if (!matchTitle && !matchStory && !matchGenre) return false;
    }

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

    return true;
  });

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
