export interface Movie {
  id: number | string;
  title: string;
  overview: string;
  poster_path?: string;
  backdrop_path?: string;
  still_path?: string; // For episodes
  release_date?: string;
  vote_average?: number;
  genres?: string[];
  match?: number; // Netflix match score
  media_type?: 'movie' | 'tv';
  
  // Legacy fields for compatibility check
  poster?: string;
  image?: string;
  thumbnail?: string;
  backdrop?: string;
  
  // App logic
  videoUrl?: string;

  // Search/AI fields
  rating?: number;
  year?: number;
  description?: string;

  // Extended details
  runtime?: string;
  director?: string;
  cast?: string[];
}

export interface Category {
  title: string;
  items: Movie[];
}

export interface HomePageData {
  hero: Movie | null;
  categories: Category[];
}

export interface Profile {
    id: string;
    name: string;
    avatar: string;
    watchlist: Movie[];
}

// Backward compatibility alias
export type UserProfile = Profile;

export interface UserAccount {
  uid: string;
  email: string;
  plan?: string;
  profiles: Profile[];
}

export interface GameEvent {
    time: string;
    text: string;
    team: 'home' | 'away';
    type: 'goal' | 'card' | 'sub';
}

export interface Match {
    id: number | string;
    home: string;
    away: string;
    time: string;
    score: string;
    league: string;
    status: 'LIVE' | 'UPCOMING' | 'FINISHED';
    minute: number;
    possession?: number[];
    events?: GameEvent[];
}

export interface Notification {
    id: string;
    title: string;
    message: string;
    type: 'info' | 'success' | 'error' | 'warning';
    read: boolean;
    date: Date;
}