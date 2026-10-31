import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AdBanner from "@/components/layout/AdBanner";
import CategoryPillsBar from "@/components/layout/CategoryPillsBar";
import SeriesSeasonTabs from "@/components/download/SeriesSeasonTabs";
import { getMediaBySlug, getAllMedia } from "@/lib/mediaRepo";
import styles from "./SeriesDetail.module.css";

interface SeriesPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function SeriesDetailPage({ params }: SeriesPageProps) {
  const { slug } = await params;
  const series = await getMediaBySlug(slug);

  if (!series || series.type !== "series") {
    notFound();
  }

  const allMedia = await getAllMedia();
  const recentPosts = allMedia.filter((m) => m.slug !== series.slug).slice(0, 5);

  const cleanTitle = series.title.replace(/\s*\(\d{4}\)/, "").trim();
  const seasonCount = series.seasons?.length || 1;
  const seasonRange = seasonCount > 1 ? `1 – ${seasonCount}` : "1";
  
  const firstSeason = series.seasons?.[0];
  const episodeCount = firstSeason?.episodes?.length || firstSeason?.totalEpisodes || 6;
  const hasBatchPacks = !!(firstSeason?.batchPacks && firstSeason.batchPacks.length > 0);
  const isOngoing = !hasBatchPacks;

  const episodeLabel = isOngoing ? `Episode 01–0${episodeCount} Added` : `All Episodes Added`;
  const resolutions = "480p, 720p, 1080p";
  const sizes = isOngoing ? "150MB, 450MB, 1.1GB Each Episode" : (firstSeason?.batchPacks?.map((p) => p.fileSize).join(", ") || "150MB, 450MB, 1.1GB Each Episode");

  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* Top Vegamovies Category Pills Bar */}
        <CategoryPillsBar />

        <div className={`container ${styles.postContainer}`}>
          {/* 1. Vegamovies Top Announcement Alert Banner */}
          <div className={styles.topNotice}>
            <span>⚠️ <strong>Attention:</strong> Bookmark <strong>Filmyraft.com</strong> & use Cloudflare 1.1.1.1 DNS for instant fast downloading! If any link stops working, refresh or use our Telegram channel.</span>
          </div>

          {/* Top Leaderboard Ad */}
          <AdBanner label="Top Sponsored Placement" size="leaderboard" />

          {/* Breadcrumb Navigation */}
          <div className={styles.breadcrumb}>
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSep}>»</span>
            <span className={styles.breadcrumbCurrent}>Download {cleanTitle} (Season {seasonRange}) Dual Audio [Hindi DD5.1 + English] {resolutions} WEB-DL</span>
          </div>

          {/* 2. Main Post Title (Vegamovies Signature SEO Headline) */}
          <h1 className={styles.postTitle}>
            Download {cleanTitle} (Season {seasonRange}) Dual Audio [ Hindi &#123;Org DD5.1&#125; + English &#123;Atmos&#125; ] {resolutions} WEB-DL x264 / HEVC – {episodeLabel}
          </h1>

          <div className={styles.authorMeta}>
            <span>📅 Updated Recently</span>
            <span className={styles.metaDot}>•</span>
            <span>👤 Filmyraft Team</span>
            <span className={styles.metaDot}>•</span>
            <span>⭐ {series.imdbRating.toFixed(1)}/10 IMDb</span>
          </div>


          {/* 4. Vegamovies Green Platform Verification Box */}
          <div className={styles.assuranceBox}>
            <span className={styles.assuranceCheck}>✅</span>
            <span><strong>Filmyraft</strong> is the best online platform for downloading Bollywood and Hollywood Movies and Web Series. We provide direct G-Drive and V-Cloud fast cloud download links with high speed and resume capability. Click on the Download links below and follow our instructions to download.</span>
          </div>

          {/* Fast Browser Recommendation Note */}
          <div className={styles.browserNotice}>
            <span>⚠️ Please download via latest Chrome or Firefox browser for high speed and resume support ⚠️</span>
            <p>Filmyraft is your trusted destination for movies and web series in stunning quality. Bookmark Filmyraft.com today!</p>
          </div>

          {/* Quick Cyan Link */}
          <div className={styles.quickCyanLink}>
            👉 Download {cleanTitle} Season {seasonRange} ({episodeLabel}) in Dual Audio [Hindi-English] - Filmyraft
          </div>

          {/* 5. Series Info Block (Yellow Heading & Colored Attributes) */}
          <div className={styles.seriesInfoCard}>
            <div className={styles.infoCardHeader}>
              <span>⚡ Series Info:</span>
            </div>

            <ul className={styles.infoList}>
              <li>
                <span className={styles.infoBullet}>•</span>
                <strong>Series Name:</strong> <span>{cleanTitle}</span>
              </li>
              <li>
                <span className={styles.infoBullet}>•</span>
                <strong>Season:</strong> <span>{seasonRange}</span>
              </li>
              <li>
                <span className={styles.infoBullet}>•</span>
                <strong>Episode:</strong> <span>{isOngoing ? `Episodes 01–0${episodeCount} Added (Episodes 7 & 8 Releasing Soon)` : `${episodeCount} Episodes Added`}</span>
              </li>
              <li>
                <span className={styles.infoBullet}>•</span>
                <strong>Language:</strong> <span className={styles.langBadge}>[Hindi (Clean Audio DD5.1) + English (Dolby Atmos)]</span>
              </li>
              <li>
                <span className={styles.infoBullet}>•</span>
                <strong>Subtitle(s):</strong> <span>Yes ({series.subtitles.join(", ")})</span>
              </li>
              <li>
                <span className={styles.infoBullet}>•</span>
                <strong>Release Year:</strong> <span>{series.releaseYear}</span>
              </li>
              <li>
                <span className={styles.infoBullet}>•</span>
                <strong>Episode Size:</strong> <span>{sizes}</span>
              </li>
              <li>
                <span className={styles.infoBullet}>•</span>
                <strong>Quality:</strong> <span className={styles.cyanHighlight}>{resolutions} - WEB-DL</span>
              </li>
              <li>
                <span className={styles.infoBullet}>•</span>
                <strong>Format:</strong> <span>MKV (HEVC / AVC x264)</span>
              </li>
              {series.director && (
                <li>
                  <span className={styles.infoBullet}>•</span>
                  <strong>Creator / Director:</strong> <span>{series.director}</span>
                </li>
              )}
              {series.cast && series.cast.length > 0 && (
                <li>
                  <span className={styles.infoBullet}>•</span>
                  <strong>Starring Cast:</strong> <span>{series.cast.join(", ")}</span>
                </li>
              )}
            </ul>
          </div>

          {/* 6. Storyline / Synopsis Section (Cyan Header) */}
          <div className={styles.synopsisSection}>
            <h2 className={styles.sectionHeadingCyan}>📖 Series-Synopsis/Plot:</h2>
            <p className={styles.synopsisText}>{series.storyline}</p>
          </div>


          {/* Mid-Content Ad Placement */}
          <AdBanner label="Featured Ad Placement" size="responsive" />

          {/* 8. Signature Vegamovies Download Hub */}
          <div className={styles.downloadHubSection}>
            <div className={styles.hubTitleRow}>
              <span className={styles.hubIcon}>⚡</span>
              <h2 className={styles.hubTitle}>Fast Direct Download Links</h2>
              <span className={styles.hubIcon}>⚡</span>
            </div>

            {series.seasons && (
              <SeriesSeasonTabs
                seasons={series.seasons}
                seriesTitle={cleanTitle}
                seriesSlug={series.slug}
              />
            )}
          </div>

          {/* Footer note matching Vegamovies */}
          <div className={styles.postEndNote}>
            <div className={styles.wrappedWithLove}>Wrapped With Love ❤️</div>
            <p className={styles.wrappedText}>
              Thank you for visiting <strong>Filmyraft</strong>. The official site of Filmyraft. Please bookmark us. Feel free to request any movie or series in the comments section below.
            </p>
          </div>

          {/* 9. Interactive Comments Section matching reference */}
          <div className={styles.commentSection}>
            <h3 className={styles.commentHeading}>1 THOUGHTS ON &ldquo;DOWNLOAD {cleanTitle.toUpperCase()}&rdquo;</h3>

            {/* Sample Existing Comment */}
            <div className={styles.commentList}>
              <div className={styles.singleComment}>
                <div className={styles.commentAvatar}>👤</div>
                <div className={styles.commentBody}>
                  <div className={styles.commentAuthorRow}>
                    <span className={styles.commentAuthor}>Rahul Kumar</span>
                    <span className={styles.commentDate}>October 29, 2024 at 8:45 pm</span>
                  </div>
                  <p className={styles.commentContent}>
                    Thanks admin! Outstanding clean Hindi audio print and super fast V-Cloud download speed. Please keep uploading! 🔥
                  </p>
                </div>
              </div>
            </div>

            <h4 className={styles.leaveCommentTitle}>Leave your comment</h4>
            <p className={styles.commentSub}>Your email address will not be published. Required fields are marked *</p>

            <form className={styles.commentForm} action="#">
              <textarea placeholder="Write your comment or link request here..." rows={4} className={styles.commentTextarea} required />
              <div className={styles.commentInputsRow}>
                <input type="text" placeholder="Your Name *" className={styles.commentInput} required />
                <input type="email" placeholder="Your Email *" className={styles.commentInput} required />
              </div>
              <div className={styles.captchaRow}>
                <span className={styles.captchaChallenge}>Security Question: 4 + 3 =</span>
                <input type="text" placeholder="7" className={styles.captchaInput} required />
              </div>
              <button type="button" className={styles.commentSubmitBtn}>POST COMMENT</button>
            </form>
          </div>

          {/* 10. Recent Posts Section */}
          <div className={styles.recentPostsSection}>
            <h3 className={styles.recentPostsTitle}>RECENT POSTS</h3>
            <ul className={styles.recentPostsList}>
              {recentPosts.map((post) => (
                <li key={post.id} className={styles.recentPostItem}>
                  <Link href={`/${post.type}/${post.slug}`} className={styles.recentPostLink}>
                    • Download {post.title} Dual Audio [Hindi DD5.1 + English] 480p, 720p & 1080p WEB-DL x264
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Ad Placement */}
          <AdBanner label="Bottom Sponsored Recommendations" size="leaderboard" />
        </div>
      </main>

      <Footer />
    </>
  );
}
