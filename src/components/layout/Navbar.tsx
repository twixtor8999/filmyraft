import Link from "next/link";
import styles from "./Navbar.module.css";

interface NavbarProps {
  initialSearchQuery?: string;
}

export default function Navbar({ initialSearchQuery = "" }: NavbarProps) {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        {/* Brand Logo with modern blue play icon matching reference */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoBadge}>▶</div>
          <div className={styles.logoTextCol}>
            <span className={styles.logoMain}>
              Filmy<span className={styles.logoBlue}>raft</span>
            </span>
            <span className={styles.logoTagline}>MOVIES • SERIES • BEYOND</span>
          </div>
        </Link>

        {/* Category Navigation */}
        <nav className={styles.navLinks}>
          <Link href="/" className={`${styles.navLink} ${styles.activeLink}`}>
            Home
          </Link>
          <Link href="/?type=movie" className={styles.navLink}>
            Movies
          </Link>
          <Link href="/?type=series" className={styles.navLink}>
            TV Shows
          </Link>
          <Link href="/marvel" className={`${styles.navLink} ${styles.badgeMarvel}`}>
            ⚡ Marvel
          </Link>
          <Link href="/?genre=Action" className={styles.navLink}>
            Genres ▾
          </Link>
          <Link href="/?tag=2024" className={styles.navLink}>
            Year ▾
          </Link>
          <Link href="/?tag=4K+UHD" className={styles.navLink}>
            Quality ▾
          </Link>
        </nav>

        {/* Modern Rounded Search Bar with Profile Icon */}
        <div className={styles.rightCluster}>
          <form action="/" method="GET" className={styles.searchForm}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              type="text"
              name="q"
              defaultValue={initialSearchQuery}
              placeholder="Search movies, series, actors..."
              className={styles.searchInput}
              aria-label="Search"
            />
          </form>

          <Link href="/admin" className={styles.profileBtn} title="Admin & Post Ingestion">
            👤
          </Link>
        </div>
      </div>
    </header>
  );
}
