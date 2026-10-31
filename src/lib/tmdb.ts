interface TMDBMovieResult {
  id: number;
  title?: string;
  name?: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
  genre_ids: number[];
  media_type?: string;
}

interface TMDBCredits {
  cast: { name: string }[];
  crew: { name: string; job: string }[];
}

interface TMDBMovieDetails {
  id: number;
  title?: string;
  name?: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date?: string;
  first_air_date?: string;
  runtime?: number;
  episode_run_time?: number[];
  vote_average: number;
  genres: { id: number; name: string }[];
  credits?: TMDBCredits;
  images?: {
    backdrops: { file_path: string }[];
  };
}

const TMDB_API_BASE = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";

export function getTMDBApiKey(): string | undefined {
  return process.env.TMDB_API_KEY;
}

export async function searchTMDB(query: string, type: "movie" | "tv" | "multi" = "multi") {
  const apiKey = getTMDBApiKey();
  if (!apiKey) {
    throw new Error("TMDB_API_KEY is not configured in .env.local");
  }

  const endpoint = type === "multi" ? "/search/multi" : `/search/${type}`;
  const url = `${TMDB_API_BASE}${endpoint}?api_key=${apiKey}&query=${encodeURIComponent(query)}&include_adult=false`;

  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) {
    throw new Error(`TMDB API request failed with status: ${res.status}`);
  }

  const data = await res.json();
  const results: TMDBMovieResult[] = data.results || [];

  return results.map((item) => ({
    tmdbId: item.id,
    title: item.title || item.name || "Untitled",
    overview: item.overview,
    type: (item.media_type === "tv" || !item.title ? "series" : "movie") as "movie" | "series",
    releaseYear: item.release_date
      ? parseInt(item.release_date.slice(0, 4), 10)
      : item.first_air_date
      ? parseInt(item.first_air_date.slice(0, 4), 10)
      : new Date().getFullYear(),
    rating: item.vote_average ? Number(item.vote_average.toFixed(1)) : 0,
    posterUrl: item.poster_path ? `${TMDB_IMAGE_BASE}/w500${item.poster_path}` : null,
    backdropUrl: item.backdrop_path ? `${TMDB_IMAGE_BASE}/w1280${item.backdrop_path}` : null,
  }));
}

export async function fetchTMDBDetails(tmdbId: number | string, type: "movie" | "series") {
  const apiKey = getTMDBApiKey();
  if (!apiKey) {
    throw new Error("TMDB_API_KEY is not configured in .env.local");
  }

  const endpoint = type === "series" ? `/tv/${tmdbId}` : `/movie/${tmdbId}`;
  const url = `${TMDB_API_BASE}${endpoint}?api_key=${apiKey}&append_to_response=credits,images&include_image_language=en,null`;

  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) {
    throw new Error(`TMDB details fetch failed with status: ${res.status}`);
  }

  const data: TMDBMovieDetails = await res.json();

  const title = data.title || data.name || "Untitled";
  const releaseDate = data.release_date || data.first_air_date || "";
  const releaseYear = releaseDate ? parseInt(releaseDate.slice(0, 4), 10) : new Date().getFullYear();

  // Runtime calculation
  let runtimeStr = "N/A";
  if (data.runtime) {
    const hours = Math.floor(data.runtime / 60);
    const mins = data.runtime % 60;
    runtimeStr = hours > 0 ? `${hours}h ${mins}min` : `${mins}min`;
  } else if (data.episode_run_time && data.episode_run_time.length > 0) {
    runtimeStr = `~${data.episode_run_time[0]}min / Ep`;
  }

  // Director
  let director = "Unknown";
  if (data.credits?.crew) {
    const dir = data.credits.crew.find(
      (c) => c.job === "Director" || c.job === "Executive Producer" || c.job === "Creator"
    );
    if (dir) director = dir.name;
  }

  // Cast
  const cast = data.credits?.cast ? data.credits.cast.slice(0, 5).map((c) => c.name) : [];

  // Screenshot Stills from backdrops
  const screenshots = data.images?.backdrops
    ? data.images.backdrops.slice(1, 5).map((b) => `${TMDB_IMAGE_BASE}/w780${b.file_path}`)
    : [];

  return {
    tmdbId: data.id,
    title,
    type,
    releaseYear,
    imdbRating: data.vote_average ? Number(data.vote_average.toFixed(1)) : 7.0,
    runtime: runtimeStr,
    genres: data.genres ? data.genres.map((g) => g.name) : ["Action"],
    storyline: data.overview || "No synopsis available.",
    posterUrl: data.poster_path ? `${TMDB_IMAGE_BASE}/w500${data.poster_path}` : "/posters/dpw.jpg",
    backdropUrl: data.backdrop_path ? `${TMDB_IMAGE_BASE}/w1280${data.backdrop_path}` : "/posters/dpw.jpg",
    screenshots: screenshots.length > 0 ? screenshots : ["/posters/dpw.jpg"],
    director,
    cast,
  };
}
