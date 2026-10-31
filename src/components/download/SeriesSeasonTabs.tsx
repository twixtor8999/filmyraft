"use client";

import { useState } from "react";
import Link from "next/link";
import { Season } from "@/types/media";
import styles from "./SeriesSeasonTabs.module.css";

interface SeriesSeasonTabsProps {
  seasons: Season[];
  seriesTitle?: string;
  seriesSlug?: string;
}

export default function SeriesSeasonTabs({
  seasons,
  seriesTitle = "Series",
  seriesSlug = ""
}: SeriesSeasonTabsProps) {
  // -1 means "Show All Seasons" stacked just like authentic Vegamovies posts
  const [selectedSeasonIdx, setSelectedSeasonIdx] = useState<number>(-1);

  if (!seasons || seasons.length === 0) return null;

  // Filter which seasons to render
  const seasonsToDisplay = selectedSeasonIdx === -1 ? [...seasons].reverse() : [seasons[selectedSeasonIdx]];

  return (
    <div className={styles.container}>
      {/* Optional Season Tabs */}
      {seasons.length > 1 && (
        <div className={styles.tabList}>
          <button
            className={`${styles.tabBtn} ${selectedSeasonIdx === -1 ? styles.activeTab : ""}`}
            onClick={() => setSelectedSeasonIdx(-1)}
          >
            <span>⚡ All Seasons ({seasons.length})</span>
          </button>
          {seasons.map((season, idx) => (
            <button
              key={season.seasonNumber}
              className={`${styles.tabBtn} ${selectedSeasonIdx === idx ? styles.activeTab : ""}`}
              onClick={() => setSelectedSeasonIdx(idx)}
            >
              <span>{season.seasonTitle}</span>
              <span className={styles.epCount}>({season.totalEpisodes || season.episodes?.length} Eps)</span>
            </button>
          ))}
        </div>
      )}

      {/* Render Each Season Section Matching Vegamovies Signature Download Hub */}
      {seasonsToDisplay.map((season) => {
        const episodeCount = season.totalEpisodes || season.episodes?.length || 6;
        const episodeRangeText = episodeCount > 1 ? `01-${episodeCount < 10 ? `0${episodeCount}` : episodeCount}` : "01";

        return (
          <div key={season.seasonNumber} className={styles.seasonSection}>
            {/* Signature Vegamovies Hindi Dubbed Header */}
            <div className={styles.downloadBannerHindi}>
              ** DOWNLOAD हिंदी Dubbed DD 5.1 – English * (हिन्दी में) **
            </div>

            {/* Complete Batch Packs (if full season zip is released) */}
            {season.batchPacks && season.batchPacks.length > 0 && (
              <div className={styles.downloadGroup}>
                {season.batchPacks.map((pack) => (
                  <div key={pack.id} className={styles.downloadBlock}>
                    <hr className={styles.divider} />

                    <div className={styles.downloadHeading}>
                      <span className={styles.titleText}>{season.seasonTitle} (Episode.{episodeRangeText} Added)</span>
                      <span className={styles.langHighlight}>&#123;Hindi-English&#125;</span>
                      <span className={styles.resHighlight}>{pack.resolution} {pack.codec}</span>
                      <span className={styles.sizeHighlight}>[{pack.fileSize}]</span>
                    </div>

                    <div className={styles.btnRow}>
                      <Link href={`/download/${pack.id}`} className={styles.vegamoviesGreenBtn}>
                        <span className={styles.arrowIcon}>⬇</span>
                        <span>Download Now</span>
                        <span className={styles.arrowIcon}>⬇</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Clean Single Quality Tier Cards leading to dedicated Episodes Hub (Non-messy!) */}
            {season.episodes && season.episodes.length > 0 && (
              <div className={styles.downloadGroup}>
                {/* 480p Quality Card */}
                <div className={styles.downloadBlock}>
                  <hr className={styles.divider} />
                  <div className={styles.downloadHeading}>
                    <span className={styles.titleText}>{season.seasonTitle} (Episode.{episodeRangeText} Added)</span>
                    <span className={styles.langHighlight}>&#123;Hindi-English&#125;</span>
                    <span className={styles.resHighlight}>480p WEB-DL x264</span>
                    <span className={styles.sizeHighlight}>[200MB/E]</span>
                  </div>
                  <div className={styles.btnRow}>
                    <Link
                      href={`/series/${seriesSlug}/episodes?quality=480p`}
                      className={styles.vcloudOrangeBtn}
                    >
                      <span className={styles.boltIcon}>⚡</span>
                      <span>V-Cloud [Episodes 1-{episodeCount}]</span>
                      <span className={styles.boltIcon}>⚡</span>
                    </Link>
                  </div>
                </div>

                {/* 720p Quality Card */}
                <div className={styles.downloadBlock}>
                  <hr className={styles.divider} />
                  <div className={styles.downloadHeading}>
                    <span className={styles.titleText}>{season.seasonTitle} (Episode.{episodeRangeText} Added)</span>
                    <span className={styles.langHighlight}>&#123;Hindi-English&#125;</span>
                    <span className={styles.resHighlight}>720p WEB-DL DD5.1 x264</span>
                    <span className={styles.sizeHighlight}>[500MB/E]</span>
                  </div>
                  <div className={styles.btnRow}>
                    <Link
                      href={`/series/${seriesSlug}/episodes?quality=720p`}
                      className={styles.vcloudOrangeBtn}
                    >
                      <span className={styles.boltIcon}>⚡</span>
                      <span>V-Cloud [Episodes 1-{episodeCount}]</span>
                      <span className={styles.boltIcon}>⚡</span>
                    </Link>
                  </div>
                </div>

                {/* 1080p Quality Card */}
                <div className={styles.downloadBlock}>
                  <hr className={styles.divider} />
                  <div className={styles.downloadHeading}>
                    <span className={styles.titleText}>{season.seasonTitle} (Episode.{episodeRangeText} Added)</span>
                    <span className={styles.langHighlight}>&#123;Hindi-English&#125;</span>
                    <span className={styles.resHighlight}>1080p WEB-DL DD5.1 x264</span>
                    <span className={styles.sizeHighlight}>[1.1GB/E]</span>
                  </div>
                  <div className={styles.btnRow}>
                    <Link
                      href={`/series/${seriesSlug}/episodes?quality=1080p`}
                      className={styles.vcloudOrangeBtn}
                    >
                      <span className={styles.boltIcon}>⚡</span>
                      <span>V-Cloud [Episodes 1-{episodeCount}]</span>
                      <span className={styles.boltIcon}>⚡</span>
                    </Link>
                  </div>
                </div>

                {/* 2160p (4K UHD) Quality Card */}
                <div className={styles.downloadBlock}>
                  <hr className={styles.divider} />
                  <div className={styles.downloadHeading}>
                    <span className={styles.titleText}>{season.seasonTitle} (Episode.{episodeRangeText} Added)</span>
                    <span className={styles.langHighlight}>&#123;Hindi-English&#125;</span>
                    <span className={styles.resHighlight}>2160p 4K UHD WEB-DL HDR</span>
                    <span className={styles.sizeHighlight}>[4.8GB/E]</span>
                  </div>
                  <div className={styles.btnRow}>
                    <Link
                      href={`/series/${seriesSlug}/episodes?quality=4k`}
                      className={styles.vcloudOrangeBtn}
                    >
                      <span className={styles.boltIcon}>⚡</span>
                      <span>V-Cloud [Episodes 1-{episodeCount}]</span>
                      <span className={styles.boltIcon}>⚡</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
