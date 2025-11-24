import { Movie } from './types';

const TMDB_BASE = 'https://image.tmdb.org/t/p/w500';
const TMDB_ORIGINAL = 'https://image.tmdb.org/t/p/original';
const FALLBACK = 'https://via.placeholder.com/300x450/222/fff?text=No+Image';

export const resolvePoster = (movie: Movie | null | undefined): string => {
  if (!movie) return FALLBACK;

  // Exact priority order requested: poster -> image -> thumbnail -> backdrop -> still_path -> poster_path
  let path = 
    movie.poster || 
    movie.image || 
    movie.thumbnail || 
    movie.backdrop || 
    movie.still_path || 
    movie.poster_path;

  if (!path) return FALLBACK;

  // Fix TMDB relative paths
  if (path.startsWith('/')) {
    return `${TMDB_BASE}${path}`;
  }

  return path;
};

export const resolveBackdrop = (movie: Movie | null | undefined): string => {
    if (!movie) return 'https://via.placeholder.com/1920x1080/111/333?text=No+Backdrop';
    
    const path = movie.backdrop_path || movie.backdrop || movie.poster_path || movie.poster;
    
    if (!path) return 'https://via.placeholder.com/1920x1080/111/333?text=No+Backdrop';
    
    if (path.startsWith('/')) {
        return `${TMDB_ORIGINAL}${path}`;
    }
    return path;
}