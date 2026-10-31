"use client";

import { useState, useEffect } from "react";
import { DownloadMirror } from "@/types/media";
import styles from "./GatewayTimer.module.css";

interface GatewayTimerProps {
  mirrors: DownloadMirror[];
  initialCountdown?: number;
}

export default function GatewayTimer({
  mirrors,
  initialCountdown = 5,
}: GatewayTimerProps) {
  const [secondsLeft, setSecondsLeft] = useState(initialCountdown);
  const [stage, setStage] = useState<"countdown" | "ready" | "unlocked">("countdown");
  const [selectedStreamUrl, setSelectedStreamUrl] = useState<string | null>(null);

  useEffect(() => {
    if (secondsLeft > 0) {
      const timer = setTimeout(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setStage("ready");
    }
  }, [secondsLeft]);

  // Find streaming mirrors vs direct download mirrors
  const streamMirrors = mirrors.filter((m) => m.type === "stream");
  const downloadMirrors = mirrors.filter((m) => m.type !== "stream");

  return (
    <div className={styles.container}>
      {stage === "countdown" && (
        <div className={styles.timerCard}>
          <div className={styles.pulseRing}>
            <span className={styles.timerNumber}>{secondsLeft}</span>
          </div>

          <div className={styles.timerTextCol}>
            <div className={styles.verificationBadge}>
              <span className={styles.statusDot} />
              <span>Verifying Direct Cloud Route</span>
            </div>
            <h3 className={styles.timerTitle}>Checking Server Health & Generating Mirrors</h3>
            <p className={styles.timerSubtitle}>
              Please wait {secondsLeft} seconds while our secure proxy confirms link availability and bypasses speed restrictions.
            </p>
          </div>

          <div className={styles.progressContainer}>
            <div
              className={styles.progressBar}
              style={{
                width: `${((initialCountdown - secondsLeft) / initialCountdown) * 100}%`,
              }}
            />
          </div>
        </div>
      )}

      {stage === "ready" && (
        <div className={styles.readyCard}>
          <div className={styles.readyIcon}>🛡️</div>
          <h3 className={styles.readyTitle}>Secure Cloud Route Established!</h3>
          <p className={styles.readySubtitle}>
            Human verification complete. Click below to reveal high-speed cloud mirrors and online streaming.
          </p>
          <button
            className={styles.getLinksBtn}
            onClick={() => setStage("unlocked")}
            aria-label="Unlock Download Links"
          >
            <span>⚡ Reveal Verified Download Links</span>
            <span>➜</span>
          </button>
        </div>
      )}

      {stage === "unlocked" && (
        <div className={styles.unlockedCard}>
          <div className={styles.unlockedHeader}>
            <span className={styles.checkIcon}>✓</span>
            <div>
              <h3 className={styles.unlockedTitle}>High-Speed Cloud Mirrors Unlocked</h3>
              <p className={styles.unlockedSubtitle}>
                Choose any server below. Links are routed directly with maximum bandwidth.
              </p>
            </div>
          </div>

          {/* Quick Online Player Modal if requested */}
          {selectedStreamUrl && (
            <div className={styles.streamEmbedBox}>
              <div className={styles.embedHeader}>
                <span className={styles.embedTitle}>🎬 Instant Stream Player</span>
                <button
                  className={styles.closeEmbedBtn}
                  onClick={() => setSelectedStreamUrl(null)}
                >
                  ✕ Close Player
                </button>
              </div>
              <div className={styles.embedIframeWrapper}>
                <iframe
                  src={selectedStreamUrl}
                  title="Stream Player"
                  allowFullScreen
                  className={styles.embedIframe}
                />
              </div>
            </div>
          )}

          <div className={styles.mirrorsList}>
            {/* Download Links */}
            {downloadMirrors.map((mirror) => (
              <a
                key={mirror.id}
                href={mirror.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.mirrorBtn} ${mirror.isFast ? styles.fastMirror : ""}`}
              >
                <div className={styles.mirrorLeft}>
                  <span className={styles.mirrorIcon}>{mirror.isFast ? "⚡" : "📥"}</span>
                  <div>
                    <div className={styles.mirrorName}>{mirror.name}</div>
                    <div className={styles.mirrorStatus}>
                      {mirror.isFast
                        ? "High-Speed Direct Cloud (HubCloud / V-Cloud Mirror)"
                        : "Direct Storage Mirror (PixelDrain / Buzzheavier)"}
                    </div>
                  </div>
                </div>

                <div className={styles.mirrorRight}>
                  {mirror.isFast && <span className={styles.vipTag}>FAST</span>}
                  <span className={styles.actionPrompt}>Download ➜</span>
                </div>
              </a>
            ))}

            {/* Stream Online Options */}
            {streamMirrors.map((mirror) => (
              <button
                key={mirror.id}
                onClick={() => setSelectedStreamUrl(mirror.url)}
                className={`${styles.mirrorBtn} ${styles.streamMirror}`}
              >
                <div className={styles.mirrorLeft}>
                  <span className={styles.mirrorIcon}>▶</span>
                  <div>
                    <div className={styles.mirrorName}>{mirror.name}</div>
                    <div className={styles.mirrorStatus}>Watch directly in browser without downloading</div>
                  </div>
                </div>

                <div className={styles.mirrorRight}>
                  <span className={styles.streamTag}>STREAM</span>
                  <span className={styles.streamPrompt}>Play Now ➜</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
