"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MediaItem } from "@/types/media";
import styles from "./HeroBanner.module.css";

interface HeroBannerProps {
  items: MediaItem[];
}

export default function HeroBanner({ items }: HeroBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate hero slider every 7 seconds
  useEffect(() => {
    if (items.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [items.length]);

  const active = items[currentIndex] || items[0];
  if (!active) return null;

  const detailUrl = active.type === "movie" ? `/movie/${active.slug}` : `/series/${active.slug}`;

  const cleanTitle = active.title.replace(/\s*\(\d{4}\)/, "").trim();

  return (
    <section className={styles.heroSection}>
      {/* Background with cinematic gradients */}
      <div className={styles.backdropWrapper} key={active.id}>
        <img src={active.backdropUrl} alt={cleanTitle} className={styles.backdropImg} />
        <div className={styles.vignetteOverlay} />
      </div>

      {/* Prev / Next Arrows positioned at screen edges like reference */}
      <button
        className={`${styles.sideNavBtn} ${styles.sideNavLeft}`}
        onClick={() => setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))}
        aria-label="Previous Slide"
      >
        ‹
      </button>

      <button
        className={`${styles.sideNavBtn} ${styles.sideNavRight}`}
        onClick={() => setCurrentIndex((prev) => (prev + 1) % items.length)}
        aria-label="Next Slide"
      >
        ›
      </button>

      <div className={`container ${styles.heroContent}`}>
        <div className={styles.metaBadges}>
          <span className={styles.featuredTag}>FEATURED</span>
          {active.tags.includes("Marvel") && (
            <span className={styles.marvelLogoTag}>MARVEL STUDIOS</span>
          )}
        </div>

        <h1 className={styles.heroTitle}>{cleanTitle}</h1>

        <div className={styles.metaInfoRow}>
          <span className={styles.ratingText}>★ {active.imdbRating.toFixed(1)}/10</span>
          <span className={styles.pipe}>|</span>
          <span>{active.releaseYear}</span>
          <span className={styles.pipe}>|</span>
          <span>{active.genres.slice(0, 2).join(", ")}</span>
          <span className={styles.pipe}>|</span>
          <span>{active.runtime}</span>
          <span className={styles.pipe}>|</span>
          <span className={styles.uhdTag}>4K Ultra HD</span>
        </div>

        <p className={styles.overview}>{active.storyline}</p>

        <div className={styles.actionRow}>
          <Link href={detailUrl} className={styles.watchNowBtn}>
            <span className={styles.playIcon}>▶</span>
            <span>Watch Now</span>
          </Link>

          <Link href={detailUrl} className={styles.viewDetailsBtn}>
            <span>View Details</span>
          </Link>
        </div>

        {/* Carousel indicator dots */}
        <div className={styles.dotsRow}>
          {items.map((item, idx) => (
            <button
              key={item.id}
              className={`${styles.dotBtn} ${currentIndex === idx ? styles.activeDot : ""}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
