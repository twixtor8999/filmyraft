import Link from "next/link";
import styles from "./CategoryPillsBar.module.css";

export default function CategoryPillsBar() {
  return (
    <div className={styles.container}>
      {/* Top 2 Featured Big Pills */}
      <div className={styles.topRow}>
        <Link href="/?tag=4K+UHD" className={`${styles.bigPill} ${styles.pillGreen}`}>
          4K ULTRA HD MOVIES
        </Link>
        <Link href="/?tag=Dual+Audio" className={`${styles.bigPill} ${styles.pillBlue}`}>
          MULTI-AUDIO MOVIES
        </Link>
      </div>

      {/* Colorful Category Badges Row 1 */}
      <div className={styles.badgesRow}>
        <Link href="/?tag=480p" className={`${styles.badge} ${styles.badgePink}`}>480P</Link>
        <Link href="/?tag=720p" className={`${styles.badge} ${styles.badgePurple}`}>720P</Link>
        <Link href="/?tag=1080p" className={`${styles.badge} ${styles.badgeOrange}`}>1080P</Link>
        <Link href="/?tag=4K+UHD" className={`${styles.badge} ${styles.badgeFuchsia}`}>2160P (4K)</Link>
        <Link href="/?tag=Dual+Audio" className={`${styles.badge} ${styles.badgeCyan}`}>HINDI DUBBED</Link>
        <Link href="/?tag=Bollywood" className={`${styles.badge} ${styles.badgeRed}`}>BOLLYWOOD</Link>
        <Link href="/?tag=Hollywood" className={`${styles.badge} ${styles.badgeRose}`}>HOLLYWOOD</Link>
        <Link href="/?tag=Netflix" className={`${styles.badge} ${styles.badgeRed}`}>NETFLIX</Link>
        <Link href="/?tag=Prime" className={`${styles.badge} ${styles.badgeBlue}`}>PRIME VIDEO</Link>
        <Link href="/marvel" className={`${styles.badge} ${styles.badgeMarvel}`}>MARVEL</Link>
        <Link href="/?type=series" className={`${styles.badge} ${styles.badgePurple}`}>WEB SERIES</Link>
        <Link href="/?genre=Animation" className={`${styles.badge} ${styles.badgeAmber}`}>ANIME</Link>
      </div>

      {/* Badges Row 2 */}
      <div className={styles.badgesRow}>
        <Link href="/?tag=Dual+Audio" className={`${styles.badge} ${styles.badgeRose}`}>DUAL AUDIO HINDI</Link>
        <Link href="/?type=series" className={`${styles.badge} ${styles.badgePurple}`}>SERIES COMPLETE BATCH</Link>
        <Link href="/?genre=Action" className={`${styles.badge} ${styles.badgeRed}`}>GENRE COLLECTION</Link>
      </div>
    </div>
  );
}
