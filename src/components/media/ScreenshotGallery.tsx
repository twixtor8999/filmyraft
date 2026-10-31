"use client";

import { useState } from "react";
import styles from "./ScreenshotGallery.module.css";

interface ScreenshotGalleryProps {
  screenshots: string[];
  title: string;
}

export default function ScreenshotGallery({ screenshots, title }: ScreenshotGalleryProps) {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  if (!screenshots || screenshots.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3 className={styles.title}>📸 Sample Screenshots / Print Proof</h3>
        <span className={styles.subtitle}>Click to inspect sharpness & subtitle placement</span>
      </div>

      <div className={styles.grid}>
        {screenshots.map((src, index) => (
          <button
            key={index}
            className={styles.thumbBtn}
            onClick={() => setSelectedImg(src)}
            aria-label={`View screenshot ${index + 1}`}
          >
            <img src={src} alt={`${title} Screenshot ${index + 1}`} className={styles.thumbImg} loading="lazy" />
            <div className={styles.zoomIcon}>🔍 View Full</div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className={styles.lightbox} onClick={() => setSelectedImg(null)} role="dialog" aria-modal="true">
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img src={selectedImg} alt={`${title} Full Preview`} className={styles.lightboxImg} />
            <button className={styles.closeBtn} onClick={() => setSelectedImg(null)} aria-label="Close Preview">
              ✕ Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
