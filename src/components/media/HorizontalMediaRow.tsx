"use client";

import { useRef } from "react";
import Link from "next/link";
import { MediaItem } from "@/types/media";
import MediaCard from "./MediaCard";
import styles from "./HorizontalMediaRow.module.css";

interface HorizontalMediaRowProps {
  items: MediaItem[];
  title: string;
  subtitle?: string;
  viewAllLink?: string;
}

export default function HorizontalMediaRow({
  items,
  title,
  subtitle,
  viewAllLink,
}: HorizontalMediaRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -500 : 500;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.titleCol}>
          <div className={styles.titleRow}>
            <span className={styles.blueIndicator}>|</span>
            <h2 className={styles.title}>{title}</h2>
          </div>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>

        <div className={styles.actions}>
          {viewAllLink && (
            <Link href={viewAllLink} className={styles.viewAllBtn}>
              <span>View All</span>
              <span className={styles.arrowIcon}>➔</span>
            </Link>
          )}

          <div className={styles.navControls}>
            <button
              className={styles.navBtn}
              onClick={() => handleScroll("left")}
              aria-label="Scroll left"
            >
              ‹
            </button>
            <button
              className={styles.navBtn}
              onClick={() => handleScroll("right")}
              aria-label="Scroll right"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <div className={styles.scrollContainer} ref={scrollRef}>
        {items.map((item) => (
          <div key={item.id} className={styles.cardWrapper}>
            <MediaCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
