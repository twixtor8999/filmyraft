import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MediaCard from "@/components/media/MediaCard";
import AdBanner from "@/components/layout/AdBanner";
import { getAllMedia } from "@/lib/mediaRepo";
import styles from "./MarvelTimeline.module.css";

export const dynamic = "force-dynamic";

export default async function MarvelUniversePage() {
  const allMedia = await getAllMedia();
  const marvelItems = allMedia.filter((m) => m.tags.includes("Marvel"));

  // Sort strictly by release year descending (latest first)
  const sortedItems = [...marvelItems].sort((a, b) => {
    if (b.releaseYear !== a.releaseYear) {
      return b.releaseYear - a.releaseYear;
    }
    return b.imdbRating - a.imdbRating;
  });

  // Group titles by release year
  const groupedByYear: { [year: number]: typeof sortedItems } = {};
  for (const item of sortedItems) {
    if (!groupedByYear[item.releaseYear]) {
      groupedByYear[item.releaseYear] = [];
    }
    groupedByYear[item.releaseYear].push(item);
  }

  const distinctYears = Object.keys(groupedByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <>
      <Navbar />

      <main className="container" style={{ padding: "2.5rem 1.25rem 4rem 1.25rem" }}>
        {/* Cinematic Marvel Banner Header */}
        <div className={styles.headerBanner}>
          <div className={styles.badgeRow}>
            <span className="badge badge-red">MARVEL STUDIOS</span>
            <span className="badge badge-amber">{marvelItems.length} Verified Titles</span>
            <span className="badge badge-cyan">Chronological & Release Order</span>
          </div>
          <h1 className={styles.title}>Marvel Cinematic Universe Timeline</h1>
          <p className={styles.subtitle}>
            Explore the entire MCU catalog organized year-by-year from the latest 2024 releases down to Iron Man (2008).
            All titles feature multi-audio Hindi + English prints with 4K UHD, 1080p FHD, and fast cloud mirrors.
          </p>
        </div>

        {/* Ad Placement */}
        <AdBanner label="Marvel Timeline Sponsor" size="leaderboard" />

        {/* Quick Year Jump Navigation Bar */}
        <div className={styles.yearJumpBar}>
          <span className={styles.jumpLabel}>Jump to Year:</span>
          <div className={styles.yearPills}>
            {distinctYears.map((year) => (
              <a key={year} href={`#year-${year}`} className={styles.yearPill}>
                {year}
              </a>
            ))}
          </div>
        </div>

        {/* Year-by-Year Sections */}
        <div className={styles.timelineContainer}>
          {distinctYears.map((year) => (
            <section key={year} id={`year-${year}`} className={styles.yearSection}>
              <div className={styles.yearHeader}>
                <div className={styles.yearNumberBadge}>{year}</div>
                <div className={styles.yearDetails}>
                  <h2 className={styles.yearHeading}>Releases of {year}</h2>
                  <span className={styles.yearCount}>
                    {groupedByYear[year].length} {groupedByYear[year].length === 1 ? "Title" : "Titles"}
                  </span>
                </div>
              </div>

              <div className={styles.movieGrid}>
                {groupedByYear[year].map((item) => (
                  <MediaCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Bottom Banner */}
        <AdBanner label="Sponsored Recommendations" size="responsive" />
      </main>

      <Footer />
    </>
  );
}
