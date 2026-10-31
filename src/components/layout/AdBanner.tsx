import styles from "./AdBanner.module.css";

interface AdBannerProps {
  label?: string;
  size?: "leaderboard" | "rectangle" | "responsive";
}

export default function AdBanner({ label = "Sponsored Advertisement", size = "leaderboard" }: AdBannerProps) {
  return (
    <aside className={`${styles.adWrapper} ${styles[size]}`} aria-label={label}>
      <div className={styles.adTag}>{label}</div>
      <div className={styles.adBox}>
        <div className={styles.adContent}>
          <span className={styles.adIcon}>📢</span>
          <span className={styles.adText}>Monetization Ad Space (728x90 / Responsive Display)</span>
        </div>
      </div>
    </aside>
  );
}
