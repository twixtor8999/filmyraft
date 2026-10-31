import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AdBanner from "@/components/layout/AdBanner";
import CategoryPillsBar from "@/components/layout/CategoryPillsBar";
import MovieDownloadCards from "@/components/download/MovieDownloadCards";
import { getMediaBySlug, getAllMedia } from "@/lib/mediaRepo";
import styles from "./MovieDetail.module.css";

interface MoviePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function MovieDetailPage({ params }: MoviePageProps) {
  const { slug } = await params;
  const movie = await getMediaBySlug(slug);

  if (!movie || movie.type !== "movie") {
    notFound();
  }

  const allMedia = await getAllMedia();
  const recentPosts = allMedia.filter((m) => m.slug !== movie.slug).slice(0, 5);

  const cleanTitle = movie.title.replace(/\s*\(\d{4}\)/, "").trim();
  const resolutions = movie.variants?.map((v) => v.resolution) || ["720p", "1080p", "4K UHD"];
  const uniqueRes = Array.from(new Set(resolutions)).join(", ");
  const sizes = movie.variants?.map((v) => v.fileSize).join(", ") || "910MB, 2.9GB, 9.3GB, 21.4GB";

  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* Top Vegamovies Category Navigation Pills */}
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
            <span className={styles.breadcrumbCurrent}>Download {cleanTitle} ({movie.releaseYear}) Dual Audio [Hindi DD5.1 + English] {uniqueRes} IMAX-WEB-DL</span>
          </div>

          {/* 2. Main Post Title (Vegamovies Signature SEO Headline) */}
          <h1 className={styles.postTitle}>
            Download {cleanTitle} ({movie.releaseYear}) Dual Audio [ Hindi &#123;Org DD5.1&#125; + English &#123;Atmos&#125; ] {uniqueRes} IMAX-WEB-DL x264 / HEVC
          </h1>

          <div className={styles.authorMeta}>
            <span>📅 Updated Recently</span>
            <span className={styles.metaDot}>•</span>
            <span>👤 Filmyraft Team</span>
            <span className={styles.metaDot}>•</span>
            <span>⭐ {movie.imdbRating.toFixed(1)}/10 IMDb</span>
          </div>


          {/* 4. Vegamovies Green Platform Verification Box */}
          <div className={styles.assuranceBox}>
            <span className={styles.assuranceCheck}>✅</span>
            <span><strong>Filmyraft</strong> is the best online platform for downloading Bollywood and Hollywood HD Movies in 480p, 720p, 1080p and 4K Ultra HD Dual Audio prints with fast, direct cloud mirrors. Click on the Download links below and follow our instructions to download.</span>
          </div>

          {/* Fast Browser Recommendation Note */}
          <div className={styles.browserNotice}>
            <span>⚠️ Please download via latest Chrome or Firefox browser for best speed and resume capability ⚠️</span>
            <p>Filmyraft is your trusted destination for movies and web series in stunning quality. Bookmark Filmyraft.com today!</p>
          </div>

          {/* Quick Cyan Link */}
          <div className={styles.quickCyanLink}>
            👉 Download {cleanTitle} ({movie.releaseYear}) Full Movie in Dual Audio [Hindi-English] - Filmyraft
          </div>

          {/* 5. Movie Info Block (Yellow Heading & Colored Attributes) */}
          <div className={styles.movieInfoCard}>
            <div className={styles.infoCardHeader}>
              <span>⚡ Movie Info:</span>
            </div>

            <ul className={styles.infoList}>
              <li>
                <span className={styles.infoBullet}>•</span>
                <strong>Full Name:</strong> <span>{cleanTitle}</span>
              </li>
              <li>
                <span className={styles.infoBullet}>•</span>
                <strong>Language:</strong> <span className={styles.langBadge}>[Hindi (Org 5.1 Clean) + English (Dolby Atmos)]</span>
              </li>
              <li>
                <span className={styles.infoBullet}>•</span>
                <strong>Subtitle(s):</strong> <span>Yes ({movie.subtitles.join(", ")})</span>
              </li>
              <li>
                <span className={styles.infoBullet}>•</span>
                <strong>Release Year:</strong> <span>{movie.releaseYear}</span>
              </li>
              <li>
                <span className={styles.infoBullet}>•</span>
                <strong>Size:</strong> <span>{sizes}</span>
              </li>
              <li>
                <span className={styles.infoBullet}>•</span>
                <strong>Quality:</strong> <span className={styles.cyanHighlight}>{uniqueRes} - IMAX WEB-DL</span>
              </li>
              <li>
                <span className={styles.infoBullet}>•</span>
                <strong>Format:</strong> <span>Mkv (HEVC 10-Bit / AVC)</span>
              </li>
              {movie.director && (
                <li>
                  <span className={styles.infoBullet}>•</span>
                  <strong>Director:</strong> <span>{movie.director}</span>
                </li>
              )}
              {movie.cast && movie.cast.length > 0 && (
                <li>
                  <span className={styles.infoBullet}>•</span>
                  <strong>Starring Cast:</strong> <span>{movie.cast.join(", ")}</span>
                </li>
              )}
            </ul>
          </div>

          {/* 6. Storyline / Synopsis Section (Cyan Header) */}
          <div className={styles.synopsisSection}>
            <h2 className={styles.sectionHeadingCyan}>📖 Movie-Synopsis/Plot:</h2>
            <p className={styles.synopsisText}>{movie.storyline}</p>
          </div>


          {/* Mid-Content Ad Placement */}
          <AdBanner label="Featured Ad Placement" size="responsive" />

          {/* 8. Signature Vegamovies Download Hub with Big Green Pill Buttons */}
          <div className={styles.downloadHubSection}>
            <div className={styles.hubTitleRow}>
              <span className={styles.hubIcon}>⚡</span>
              <h2 className={styles.hubTitle}>Fast Direct Download Links</h2>
              <span className={styles.hubIcon}>⚡</span>
            </div>

            {movie.variants && <MovieDownloadCards variants={movie.variants} movieTitle={cleanTitle} />}
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
                    <span className={styles.commentAuthor}>Sameer Verma</span>
                    <span className={styles.commentDate}>October 30, 2024 at 10:15 pm</span>
                  </div>
                  <p className={styles.commentContent}>
                    Best quality ever! The 1080p 10-bit HEVC audio sync is 100% perfect. Thanks Filmyraft team! 🚀
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
                <span className={styles.captchaChallenge}>Security Question: 5 + 4 =</span>
                <input type="text" placeholder="9" className={styles.captchaInput} required />
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
