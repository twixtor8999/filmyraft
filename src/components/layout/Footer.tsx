import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.branding}>
          <div className={styles.logo}>
            🎬 FILMY<span className={styles.logoAccent}>RAFT</span>
          </div>
          <p className={styles.description}>
            The fastest media catalog & direct download gateway. Discover high-definition Bollywood, Hollywood Dual Audio,
            and Complete Web Series in 480p, 720p, 1080p & 4K UHD.
          </p>
        </div>

        <div className={styles.disclaimerBox}>
          <div className={styles.disclaimerTitle}>⚖️ Disclaimer & DMCA</div>
          <p className={styles.disclaimerText}>
            Filmyraft is an indexing directory and does not host or store any media files or videos on its servers. All
            links point to freely available content on third-party non-affiliated storage providers. For copyright
            concerns or DMCA takedown notices, contact the relevant third-party hosting service.
          </p>
        </div>

        <div className={styles.bottomBar}>
          <div>© {new Date().getFullYear()} Filmyraft. All rights reserved.</div>
          <div className={styles.links}>
            <Link href="/" className={styles.link}>
              Home
            </Link>
            <Link href="/?type=series" className={styles.link}>
              TV Series
            </Link>
            <Link href="/?tag=4K UHD" className={styles.link}>
              4K Movies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
