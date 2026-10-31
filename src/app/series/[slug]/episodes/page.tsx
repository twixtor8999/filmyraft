import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AdBanner from "@/components/layout/AdBanner";
import CategoryPillsBar from "@/components/layout/CategoryPillsBar";
import { getMediaBySlug } from "@/lib/mediaRepo";
import styles from "./EpisodesHub.module.css";

interface EpisodesPageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    quality?: string;
  }>;
}

export default async function SeriesEpisodesPage({ params, searchParams }: EpisodesPageProps) {
  const { slug } = await params;
  const { quality = "480p" } = await searchParams;

  const series = await getMediaBySlug(slug);

  if (!series || series.type !== "series") {
    notFound();
  }

  const cleanTitle = series.title.replace(/\s*\(\d{4}\)/, "").trim();
  const season = series.seasons?.[0];

  if (!season || !season.episodes || season.episodes.length === 0) {
    notFound();
  }

  const qLower = quality.toLowerCase();
  let selectedQuality = "480p";
  let displayQualityLabel = "480p WEB-DL x264";

  if (qLower.includes("4k") || qLower.includes("2160")) {
    selectedQuality = "4k";
    displayQualityLabel = "2160p 4K UHD WEB-DL HDR";
  } else if (qLower.includes("1080")) {
    selectedQuality = "1080p";
    displayQualityLabel = "1080p WEB-DL DD5.1 x264";
  } else if (qLower.includes("720")) {
    selectedQuality = "720p";
    displayQualityLabel = "720p WEB-DL DD5.1 x264";
  } else {
    selectedQuality = "480p";
    displayQualityLabel = "480p WEB-DL x264";
  }

  const episodeCount = season.episodes.length;
  const episodeRangeText = `01-${episodeCount < 10 ? `0${episodeCount}` : episodeCount}`;

  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* Top Category Pills */}
        <CategoryPillsBar />

        <div className={`container ${styles.container}`}>
          {/* Top Notice */}
          <div className={styles.topNotice}>
            <span>⚠️ <strong>Attention:</strong> Bookmark <strong>Filmyraft.com</strong> for high-speed direct downloads. If any link has an issue, join our Telegram channel!</span>
          </div>

          <AdBanner label="Episode Hub Header Sponsored" size="leaderboard" />

          {/* Breadcrumb */}
          <div className={styles.breadcrumb}>
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSep}>»</span>
            <Link href={`/series/${series.slug}`} className={styles.breadcrumbLink}>{cleanTitle}</Link>
            <span className={styles.breadcrumbSep}>»</span>
            <span className={styles.breadcrumbCurrent}>Season 1 Single Episodes ({displayQualityLabel})</span>
          </div>

          {/* Authentic Vegamovies Header Banner */}
          <div className={styles.headerBlock}>
            <div className={styles.hindiBanner}>
              ** DOWNLOAD हिंदी Dubbed DD 5.1 – English * (हिन्दी में) **
            </div>
            <h1 className={styles.pageTitle}>
              {cleanTitle} – Season 1 (Episode.{episodeRangeText} Added) [Hindi-English] {displayQualityLabel}
            </h1>
          </div>

          <AdBanner label="Ad Placement Before Episodes" size="responsive" />

          {/* Centered Episodes List Matching User Reference Screenshot */}
          <div className={styles.episodesListContainer}>
            {season.episodes.map((ep) => {
              // Find matching quality variant for this episode
              const variant = ep.variants?.find((v) => {
                const res = v.resolution.toLowerCase();
                if (selectedQuality === "4k") return res.includes("4k") || res.includes("2160");
                return res.includes(selectedQuality);
              }) || ep.variants?.[0];

              const epFormattedNum = ep.episodeNumber < 10 ? `0${ep.episodeNumber}` : `${ep.episodeNumber}`;

              return (
                <div key={ep.episodeNumber} className={styles.episodeCard}>
                  {/* Dash Header: -::Episodes: 1::- */}
                  <div className={styles.episodeTitleDashes}>
                    -::Episodes: {ep.episodeNumber < 10 ? ep.episodeNumber : epFormattedNum}::-
                  </div>

                  <div className={styles.btnRow}>
                    {variant ? (
                      <Link
                        href={`/download/${variant.id}`}
                        className={styles.vcloudOrangeBtn}
                      >
                        <span className={styles.arrowIcon}>⬇</span>
                        <span className={styles.boltIcon}>⚡</span>
                        <span>V-Cloud [Resumable] {variant.fileSize ? `[${variant.fileSize}]` : ""}</span>
                        <span className={styles.arrowIcon}>⬇</span>
                      </Link>
                    ) : (
                      <span className={styles.epPending}>⚡ Link Releasing Soon</span>
                    )}
                  </div>

                  <hr className={styles.divider} />
                </div>
              );
            })}
          </div>

          {/* Return Back Link */}
          <div className={styles.backLinkRow}>
            <Link href={`/series/${series.slug}`} className={styles.backBtn}>
              ← Return to {cleanTitle} Main Post
            </Link>
          </div>

          {/* Footer Note */}
          <div className={styles.footerNote}>
            <span>Wrapped With Love ❤️ Filmyraft Team</span>
          </div>

          <AdBanner label="Bottom Sponsored Banner" size="leaderboard" />
        </div>
      </main>

      <Footer />
    </>
  );
}
