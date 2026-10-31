"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import styles from "./Admin.module.css";

export default function AdminPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [needsApiKey, setNeedsApiKey] = useState(false);

  // Selected Movie for Editing & Publishing
  const [formData, setFormData] = useState<any>({
    title: "",
    slug: "",
    type: "movie",
    releaseYear: new Date().getFullYear(),
    imdbRating: 7.5,
    runtime: "2h 10min",
    director: "",
    cast: "Actor 1, Actor 2",
    genres: "Action, Thriller",
    languages: "Hindi (Org 5.1), English",
    subtitles: "English (ESub)",
    storyline: "",
    posterUrl: "",
    backdropUrl: "",
    tags: "Trending, Dual Audio, 4K UHD",
    // Fast Strategy 3 Link inputs
    link480p: "",
    link720p: "",
    link1080p: "",
    link4k: "",
    streamUrl: "",
  });

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    setErrorMsg("");
    setSuccessMsg("");
    setSearchResults([]);

    try {
      const res = await fetch(`/api/tmdb?q=${encodeURIComponent(searchQuery)}`);
      const data = await res.json();

      if (!res.ok) {
        if (data.needsKey) {
          setNeedsApiKey(true);
        }
        throw new Error(data.error || "Search failed");
      }

      setSearchResults(data.results || []);
    } catch (err: any) {
      setErrorMsg(err.message);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSelectMovie = async (tmdbId: number, type: "movie" | "series") => {
    setErrorMsg("");
    setSuccessMsg("");
    try {
      const res = await fetch(`/api/tmdb?id=${tmdbId}&type=${type}`);
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to load movie details");

      const item = data.data;
      const slug = item.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "") + `-${item.releaseYear}`;

      setFormData((prev: any) => ({
        ...prev,
        title: `${item.title} (${item.releaseYear})`,
        slug,
        type: item.type,
        releaseYear: item.releaseYear,
        imdbRating: item.imdbRating,
        runtime: item.runtime,
        director: item.director,
        cast: item.cast.join(", "),
        genres: item.genres.join(", "),
        storyline: item.storyline,
        posterUrl: item.posterUrl,
        backdropUrl: item.backdropUrl,
        screenshots: item.screenshots,
      }));

      // Scroll to form
      window.scrollTo({ top: 600, behavior: "smooth" });
    } catch (err: any) {
      setErrorMsg(err.message);
    }
  };

  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    // Build Vegamovies / Strategy 3 quality tiers
    const variants: any[] = [];
    const baseId = formData.slug;

    if (formData.link480p) {
      variants.push({
        id: `${baseId}-480p`,
        resolution: "480p",
        formatLabel: "480p SD [Hindi Org + English]",
        fileSize: "450 MB",
        codec: "x264",
        audioSpecs: formData.languages,
        mirrors: [
          { id: "m1", name: "Fast Cloud Direct", url: formData.link480p, isFast: true, type: "download" },
          ...(formData.streamUrl ? [{ id: "s1", name: "Watch Online", url: formData.streamUrl, type: "stream" }] : []),
        ],
      });
    }

    if (formData.link720p) {
      variants.push({
        id: `${baseId}-720p`,
        resolution: "720p",
        formatLabel: "720p 10-Bit HEVC [Hindi Org 5.1 + English]",
        fileSize: "1.20 GB",
        codec: "HEVC / x265",
        audioSpecs: formData.languages,
        mirrors: [
          { id: "m2", name: "Fast Cloud Direct", url: formData.link720p, isFast: true, type: "download" },
          ...(formData.streamUrl ? [{ id: "s2", name: "Watch Online (HD)", url: formData.streamUrl, type: "stream" }] : []),
        ],
      });
    }

    if (formData.link1080p) {
      variants.push({
        id: `${baseId}-1080p`,
        resolution: "1080p",
        formatLabel: "1080p FHD x264 [Hindi Org 5.1 + English Atmos]",
        fileSize: "2.80 GB",
        codec: "x264 / AVC",
        audioSpecs: formData.languages,
        mirrors: [
          { id: "m3", name: "Fast Cloud Direct", url: formData.link1080p, isFast: true, type: "download" },
        ],
      });
    }

    if (formData.link4k) {
      variants.push({
        id: `${baseId}-4k`,
        resolution: "4K UHD",
        formatLabel: "2160p 4K UHD HDR10+ [Hindi Org 5.1 + English Atmos]",
        fileSize: "6.50 GB",
        codec: "HEVC / HDR10",
        audioSpecs: formData.languages,
        mirrors: [
          { id: "m4", name: "Fast Cloud Direct (VIP)", url: formData.link4k, isFast: true, type: "download" },
        ],
      });
    }

    const payload = {
      id: formData.slug,
      slug: formData.slug,
      title: formData.title,
      type: formData.type,
      releaseYear: parseInt(formData.releaseYear, 10),
      imdbRating: parseFloat(formData.imdbRating),
      runtime: formData.runtime,
      genres: formData.genres.split(",").map((s: string) => s.trim()).filter(Boolean),
      languages: formData.languages.split(",").map((s: string) => s.trim()).filter(Boolean),
      subtitles: formData.subtitles.split(",").map((s: string) => s.trim()).filter(Boolean),
      storyline: formData.storyline,
      posterUrl: formData.posterUrl,
      backdropUrl: formData.backdropUrl,
      screenshots: formData.screenshots || [formData.backdropUrl],
      tags: formData.tags.split(",").map((s: string) => s.trim()).filter(Boolean),
      director: formData.director,
      cast: formData.cast.split(",").map((s: string) => s.trim()).filter(Boolean),
      variants: variants.length > 0 ? variants : undefined,
    };

    try {
      const res = await fetch("/api/media", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to publish");

      setSuccessMsg(`🚀 Published "${formData.title}" directly to Neon PostgreSQL!`);
    } catch (err: any) {
      setErrorMsg(err.message);
    }
  };

  return (
    <>
      <Navbar />

      <main className="container" style={{ padding: "3rem 1.25rem" }}>
        <div className={styles.header}>
          <h1 className={styles.title}>🎬 TMDB 1-Click Movie Ingestion & Publisher</h1>
          <p className={styles.subtitle}>
            Search any title on TMDB. We automatically fetch poster, backdrop, cast, genres, and synopsis.
            Attach your Vegamovies / HubCloud links and publish directly to Neon PostgreSQL!
          </p>
        </div>

        {needsApiKey && (
          <div className={styles.apiWarningBox}>
            <div className={styles.apiWarningTitle}>🔑 TMDB API Key Required</div>
            <p className={styles.apiWarningText}>
              Add your free TMDB API Key to <code>.env.local</code> as <code>TMDB_API_KEY=your_key_here</code>.
              You can obtain a 100% free key instantly at{" "}
              <a href="https://www.themoviedb.org/settings/api" target="_blank" rel="noreferrer" className={styles.link}>
                themoviedb.org/settings/api
              </a>.
            </p>
          </div>
        )}

        {/* Step 1: TMDB Search */}
        <section className={styles.searchSection}>
          <h2 className={styles.sectionHeading}>Step 1: Search TMDB Database</h2>
          <form onSubmit={handleSearch} className={styles.searchForm}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="e.g. Inception, Pushpa 2, Gladiator II, Stranger Things..."
              className={styles.searchInput}
            />
            <button type="submit" disabled={isSearching} className={styles.primaryBtn}>
              {isSearching ? "Searching..." : "🔍 Fetch from TMDB"}
            </button>
          </form>

          {errorMsg && <div className={styles.errorBanner}>⚠️ {errorMsg}</div>}
          {successMsg && <div className={styles.successBanner}>🎉 {successMsg}</div>}

          {/* Search Results Preview Grid */}
          {searchResults.length > 0 && (
            <div className={styles.resultsGrid}>
              {searchResults.map((item) => (
                <div key={item.tmdbId} className={styles.resultCard}>
                  <img
                    src={item.posterUrl || "/posters/dpw.jpg"}
                    alt={item.title}
                    className={styles.resultPoster}
                  />
                  <div className={styles.resultInfo}>
                    <h4 className={styles.resultTitle}>{item.title}</h4>
                    <div className={styles.resultMeta}>
                      <span>{item.releaseYear}</span>
                      <span>•</span>
                      <span className="badge badge-amber">⭐ {item.rating}</span>
                      <span>•</span>
                      <span className="badge badge-cyan">{item.type}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectMovie(item.tmdbId, item.type)}
                      className={styles.selectBtn}
                    >
                      ⚡ Auto-Fill Details ➜
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Step 2: Form & Link Attacher */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionHeading}>Step 2: Review Metadata & Attach Download Mirrors</h2>

          <form onSubmit={handlePublish} className={styles.publishForm}>
            <div className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>URL Slug (Unique ID)</label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Content Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className={styles.input}
                >
                  <option value="movie">Movie</option>
                  <option value="series">Web Series</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>IMDb Rating (e.g. 8.2)</label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.imdbRating}
                  onChange={(e) => setFormData({ ...formData, imdbRating: e.target.value })}
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Audio Languages</label>
                <input
                  type="text"
                  value={formData.languages}
                  onChange={(e) => setFormData({ ...formData, languages: e.target.value })}
                  placeholder="Hindi (Org 5.1), English"
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Genres</label>
                <input
                  type="text"
                  value={formData.genres}
                  onChange={(e) => setFormData({ ...formData, genres: e.target.value })}
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Director</label>
                <input
                  type="text"
                  value={formData.director}
                  onChange={(e) => setFormData({ ...formData, director: e.target.value })}
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Lead Cast</label>
                <input
                  type="text"
                  value={formData.cast}
                  onChange={(e) => setFormData({ ...formData, cast: e.target.value })}
                  className={styles.input}
                />
              </div>

              <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                <label className={styles.label}>Poster Image URL</label>
                <input
                  type="text"
                  value={formData.posterUrl}
                  onChange={(e) => setFormData({ ...formData, posterUrl: e.target.value })}
                  className={styles.input}
                />
              </div>

              <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                <label className={styles.label}>Backdrop Banner URL</label>
                <input
                  type="text"
                  value={formData.backdropUrl}
                  onChange={(e) => setFormData({ ...formData, backdropUrl: e.target.value })}
                  className={styles.input}
                />
              </div>

              <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                <label className={styles.label}>Synopsis / Storyline</label>
                <textarea
                  value={formData.storyline}
                  onChange={(e) => setFormData({ ...formData, storyline: e.target.value })}
                  rows={3}
                  className={styles.textarea}
                />
              </div>
            </div>

            {/* Strategy 3 Download Mirrors */}
            <div className={styles.linksBox}>
              <h3 className={styles.linksHeading}>⚡ Attach Download Mirrors (Strategy 3)</h3>
              <p className={styles.linksHelp}>
                Paste your HubCloud, V-Cloud, PixelDrain, or Buzzheavier links here. Filmyraft will lock them behind your ad gateway!
              </p>

              <div className={styles.linkRow}>
                <span className={styles.resTag}>480p SD Link:</span>
                <input
                  type="url"
                  placeholder="https://hubcloud.club/... or pixeldrain..."
                  value={formData.link480p}
                  onChange={(e) => setFormData({ ...formData, link480p: e.target.value })}
                  className={styles.input}
                />
              </div>

              <div className={styles.linkRow}>
                <span className={styles.resTag}>720p HD Link:</span>
                <input
                  type="url"
                  placeholder="https://hubcloud.club/... or pixeldrain..."
                  value={formData.link720p}
                  onChange={(e) => setFormData({ ...formData, link720p: e.target.value })}
                  className={styles.input}
                />
              </div>

              <div className={styles.linkRow}>
                <span className={styles.resTag}>1080p FHD Link:</span>
                <input
                  type="url"
                  placeholder="https://hubcloud.club/... or pixeldrain..."
                  value={formData.link1080p}
                  onChange={(e) => setFormData({ ...formData, link1080p: e.target.value })}
                  className={styles.input}
                />
              </div>

              <div className={styles.linkRow}>
                <span className={styles.resTag}>4K UHD Link:</span>
                <input
                  type="url"
                  placeholder="https://hubcloud.club/... or pixeldrain..."
                  value={formData.link4k}
                  onChange={(e) => setFormData({ ...formData, link4k: e.target.value })}
                  className={styles.input}
                />
              </div>

              <div className={styles.linkRow}>
                <span className={styles.resTag}>Watch Online Embed:</span>
                <input
                  type="url"
                  placeholder="https://streamwish.to/e/... or vidhide..."
                  value={formData.streamUrl}
                  onChange={(e) => setFormData({ ...formData, streamUrl: e.target.value })}
                  className={styles.input}
                />
              </div>
            </div>

            <button type="submit" className={styles.publishBtn}>
              🚀 Publish to Neon Database & Live Website
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}
