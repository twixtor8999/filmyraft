import Link from "next/link";
import { QualityVariant } from "@/types/media";
import styles from "./MovieDownloadCards.module.css";

interface MovieDownloadCardsProps {
  variants: QualityVariant[];
  movieTitle?: string;
}

export default function MovieDownloadCards({ variants, movieTitle = "Movie" }: MovieDownloadCardsProps) {
  const cleanTitle = movieTitle.replace(/\s*\(\d{4}\)/, "").trim();

  return (
    <div className={styles.container}>
      {variants.map((v) => {
        return (
          <div key={v.id} className={styles.downloadBlock}>
            <hr className={styles.divider} />
            
            {/* Signature Vegamovies Variant Title with color-coded highlights */}
            <div className={styles.downloadHeading}>
              <span className={styles.titleText}>{cleanTitle}</span>
              <span className={styles.langHighlight}>[Hindi-English]</span>
              <span className={styles.resHighlight}>{v.resolution} {v.codec}</span>
              <span className={styles.sizeHighlight}>[{v.fileSize}]</span>
            </div>

            {/* Signature Vegamovies Big Green Download Button */}
            <div className={styles.btnRow}>
              <Link href={`/download/${v.id}`} className={styles.vegamoviesGreenBtn}>
                <span className={styles.arrowIcon}>⬇</span>
                <span>Download Now</span>
                <span className={styles.arrowIcon}>⬇</span>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
