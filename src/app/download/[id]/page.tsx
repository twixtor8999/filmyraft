import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AdBanner from "@/components/layout/AdBanner";
import GatewayTimer from "@/components/download/GatewayTimer";
import { findVariantById } from "@/lib/mediaRepo";
import styles from "./DownloadGateway.module.css";

interface DownloadPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DownloadGatewayPage({ params }: DownloadPageProps) {
  const { id } = await params;
  const match = await findVariantById(id);

  if (!match) {
    notFound();
  }

  const { media, variant, episodeTitle } = match;

  return (
    <>
      <Navbar />

      <main className={styles.main}>
        <div className={`container ${styles.container}`}>
          {/* Top Leaderboard Ad Slot */}
          <AdBanner label="Ad Slot #1 (Header Placement)" size="leaderboard" />

          {/* Download File Information Card */}
          <div className={styles.fileCard}>
            <div className={styles.thumbWrapper}>
              <img src={media.posterUrl} alt={media.title} className={styles.thumbImg} />
            </div>

            <div className={styles.fileDetails}>
              <div className={styles.categoryPill}>
                <span className="badge badge-emerald">Verified Safe File</span>
                <span className="badge badge-cyan">{variant.resolution}</span>
              </div>

              <h1 className={styles.fileName}>
                {media.title} {episodeTitle ? `— ${episodeTitle}` : ""}
              </h1>

              <div className={styles.metaRow}>
                <div className={styles.metaCol}>
                  <span className={styles.metaLabel}>File Size:</span>
                  <span className={styles.metaValHighlight}>{variant.fileSize}</span>
                </div>
                <div className={styles.metaCol}>
                  <span className={styles.metaLabel}>Codec / Quality:</span>
                  <span className={styles.metaVal}>{variant.codec}</span>
                </div>
                <div className={styles.metaCol}>
                  <span className={styles.metaLabel}>Audio:</span>
                  <span className={styles.metaVal}>{variant.audioSpecs}</span>
                </div>
              </div>
            </div>
          </div>

          {/* High Intent Mid Ad Banner (Prime Impression Area) */}
          <AdBanner label="High Viewability Sponsored Banner" size="responsive" />

          {/* The Gateway Countdown & Mirror List */}
          <GatewayTimer mirrors={variant.mirrors} initialCountdown={5} />

          {/* Instructions & Help */}
          <div className={styles.helpBox}>
            <h3 className={styles.helpTitle}>💡 Download Guide & Tips:</h3>
            <ul className={styles.helpList}>
              <li>For maximum download speeds, use our <strong>⚡ Fast Cloud Direct</strong> server.</li>
              <li>If one mirror is busy or gives a quota limit, switch to <strong>PixelDrain</strong> or <strong>Buzzheavier</strong>.</li>
              <li>We recommend using <strong>VLC Media Player</strong> or <strong>PotPlayer</strong> to switch dual audio tracks & subtitles.</li>
            </ul>
            <div className={styles.backLinkWrapper}>
              <Link
                href={media.type === "movie" ? `/movie/${media.slug}` : `/series/${media.slug}`}
                className={styles.backLink}
              >
                ← Return to {media.title} Details
              </Link>
            </div>
          </div>

          {/* Bottom Ad Slot */}
          <AdBanner label="Ad Slot #3 (Footer Placement)" size="leaderboard" />
        </div>
      </main>

      <Footer />
    </>
  );
}
