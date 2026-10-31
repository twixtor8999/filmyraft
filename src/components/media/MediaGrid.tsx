import { MediaItem } from "@/types/media";
import MediaCard from "./MediaCard";
import styles from "./MediaGrid.module.css";

interface MediaGridProps {
  items: MediaItem[];
  title?: string;
  subtitle?: string;
}

export default function MediaGrid({ items, title, subtitle }: MediaGridProps) {
  if (items.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>🔍</div>
        <h3 className={styles.emptyTitle}>No Releases Found</h3>
        <p className={styles.emptyText}>
          Try adjusting your search query or filters to find what you&apos;re looking for.
        </p>
      </div>
    );
  }

  return (
    <section className={styles.section}>
      {(title || subtitle) && (
        <div className={styles.header}>
          {title && <h2 className={styles.sectionTitle}>{title}</h2>}
          {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
        </div>
      )}

      <div className={styles.grid}>
        {items.map((item) => (
          <MediaCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
