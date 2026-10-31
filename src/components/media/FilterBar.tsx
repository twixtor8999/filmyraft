import Link from "next/link";
import styles from "./FilterBar.module.css";

interface FilterBarProps {
  currentCategory?: string;
  currentGenre?: string;
  currentType?: string;
}

export default function FilterBar({ currentCategory, currentGenre, currentType }: FilterBarProps) {
  const isHollywood = currentCategory === "Hollywood";

  return (
    <div className={styles.filterWrapper}>
      <div className={styles.scrollContainer}>
        {/* Primary Type Pills */}
        <Link
          href="/?category=Hollywood"
          className={`${styles.filterPill} ${isHollywood ? styles.activeBlue : ""}`}
        >
          🎬 Hollywood
        </Link>
        <Link
          href="/?type=movie"
          className={`${styles.filterPill} ${currentType === "movie" ? styles.activeBlue : ""}`}
        >
          🍿 Movies
        </Link>
        <Link
          href="/?type=series"
          className={`${styles.filterPill} ${currentType === "series" ? styles.activeBlue : ""}`}
        >
          📺 TV Shows
        </Link>

        {/* Genre Pills Matching Mockup */}
        <Link
          href="/?genre=Action"
          className={`${styles.filterPill} ${currentGenre === "Action" ? styles.activeBlue : ""}`}
        >
          🔥 Action
        </Link>
        <Link
          href="/?genre=Adventure"
          className={`${styles.filterPill} ${currentGenre === "Adventure" ? styles.activeBlue : ""}`}
        >
          🧭 Adventure
        </Link>
        <Link
          href="/?genre=Sci-Fi"
          className={`${styles.filterPill} ${currentGenre === "Sci-Fi" ? styles.activeBlue : ""}`}
        >
          🚀 Sci-Fi
        </Link>
        <Link
          href="/?genre=Fantasy"
          className={`${styles.filterPill} ${currentGenre === "Fantasy" ? styles.activeBlue : ""}`}
        >
          ⚡ Fantasy
        </Link>
        <Link
          href="/?genre=Thriller"
          className={`${styles.filterPill} ${currentGenre === "Thriller" ? styles.activeBlue : ""}`}
        >
          🎭 Thriller
        </Link>
        <Link
          href="/?genre=Crime"
          className={`${styles.filterPill} ${currentGenre === "Crime" ? styles.activeBlue : ""}`}
        >
          🕵️ Crime
        </Link>
        <Link
          href="/?genre=Horror"
          className={`${styles.filterPill} ${currentGenre === "Horror" ? styles.activeBlue : ""}`}
        >
          👻 Horror
        </Link>
        <Link
          href="/?genre=Drama"
          className={`${styles.filterPill} ${currentGenre === "Drama" ? styles.activeBlue : ""}`}
        >
          🎪 Drama
        </Link>
        <Link
          href="/?genre=Comedy"
          className={`${styles.filterPill} ${currentGenre === "Comedy" ? styles.activeBlue : ""}`}
        >
          😂 Comedy
        </Link>
      </div>
    </div>
  );
}
