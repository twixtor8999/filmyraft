import Link from "next/link";
import { MediaItem } from "@/types/media";
import styles from "./MediaCard.module.css";

interface MediaCardProps {
  item: MediaItem;
}

export default function MediaCard({ item }: MediaCardProps) {
  const detailUrl = item.type === "movie" ? `/movie/${item.slug}` : `/series/${item.slug}`;

  // Find max resolution badge: 4K or HD
  const is4K = item.tags.includes("4K UHD") || item.variants?.some((v) => v.resolution === "4K UHD");
  const qualityBadge = is4K ? "4K" : "HD";

  // Clean display title
  const cleanTitle = item.title.replace(/\s*\(\d{4}\)/, "").trim();

  return (
    <article className={styles.card}>
      <Link href={detailUrl} className={styles.posterLink} aria-label={`View ${cleanTitle}`}>
        <div className={styles.posterWrapper}>
          <img
            src={item.posterUrl}
            alt={cleanTitle}
            className={styles.posterImg}
            loading="lazy"
          />

          {/* Sleek 4K / HD quality pill matching reference mockup */}
          <div className={styles.qualityPill}>
            {qualityBadge}
          </div>

          <div className={styles.overlayHover}>
            <span className={styles.playBtn}>▶</span>
            <span className={styles.hoverAction}>View Details</span>
          </div>
        </div>

        <div className={styles.cardContent}>
          <h3 className={styles.title}>{cleanTitle}</h3>
          <div className={styles.subMeta}>
            <span className={styles.starRating}>★ {item.imdbRating.toFixed(1)}</span>
            <span className={styles.year}>{item.releaseYear}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
