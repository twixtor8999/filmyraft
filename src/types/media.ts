export type MediaType = "movie" | "series";

export interface DownloadMirror {
  id: string;
  name: string; // e.g. "Fast Cloud Direct", "PixelDrain", "Buzzheavier", "Watch Online"
  url: string;
  isFast?: boolean;
  type?: "download" | "stream";
}

export interface QualityVariant {
  id: string;
  resolution: "480p" | "720p" | "1080p" | "4K UHD";
  formatLabel: string; // e.g. "720p 10-Bit HEVC [Hindi + English]"
  fileSize: string; // e.g. "1.15 GB"
  codec: string; // e.g. "HEVC / x265"
  audioSpecs: string; // e.g. "Hindi (Org 5.1) + English"
  mirrors: DownloadMirror[];
}

export interface Episode {
  episodeNumber: number;
  title: string;
  overview?: string;
  variants: QualityVariant[];
}

export interface Season {
  seasonNumber: number;
  seasonTitle: string;
  totalEpisodes: number;
  batchPacks?: QualityVariant[]; // Full Season Zip / Pack download
  episodes: Episode[];
}

export interface MediaItem {
  id: string;
  slug: string;
  title: string;
  type: MediaType;
  releaseYear: number;
  imdbRating: number;
  runtime: string;
  genres: string[];
  languages: string[];
  subtitles: string[];
  storyline: string;
  posterUrl: string;
  backdropUrl: string;
  screenshots: string[];
  tags: string[]; // e.g. ["Dual Audio", "Web-DL", "4K UHD", "Trending"]
  director?: string;
  cast?: string[];
  variants?: QualityVariant[]; // Present for type === "movie"
  seasons?: Season[]; // Present for type === "series"
}
