import { HomePageData, Movie } from './types';
import { fixPosterURL } from './components/Poster';

// Helper for legacy code if needed
export const getPosterUrl = (movie: Movie | null | undefined): string => {
  if (!movie) return '';
  return fixPosterURL(movie.poster_path || movie.poster || movie.image) || '';
};

// EXPANDED DATABASE
export const MOCK_DATA: HomePageData = {
  hero: {
    id: 533535, 
    title: 'Deadpool & Wolverine',
    overview: 'A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.',
    vote_average: 7.8,
    year: 2024,
    genres: ['Action', 'Comedy', 'Sci-Fi'],
    match: 98,
    backdrop_path: '/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg',
    poster_path: '/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg',
    media_type: 'movie',
    runtime: '2h 7m',
    director: 'Shawn Levy',
    cast: ['Ryan Reynolds', 'Hugh Jackman', 'Emma Corrin']
  },
  categories: [
    {
      title: 'Trending Movies',
      items: [
        { id: 1022789, title: 'Inside Out 2', poster_path: '/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg', year: 2024, rating: 7.7, media_type: 'movie', overview: 'Teenage emotions.' },
        { id: 653346, title: 'Kingdom of the Planet of the Apes', poster_path: '/gKkl37BQuKTanygYQG1pyYgLVgf.jpg', year: 2024, rating: 7.9, media_type: 'movie', overview: 'Apes rule the world.' },
        { id: 823464, title: 'Godzilla x Kong: The New Empire', poster_path: '/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg', year: 2024, rating: 8.1, media_type: 'movie', overview: 'Titans clash.' },
        { id: 693134, title: 'Dune: Part Two', poster_path: '/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg', year: 2024, rating: 8.8, media_type: 'movie', overview: 'Spice flows.' },
        { id: 1011985, title: 'Kung Fu Panda 4', poster_path: '/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg', year: 2024, rating: 7.6, media_type: 'movie', overview: 'Dragon Warrior returns.' },
        { id: 929590, title: 'Civil War', poster_path: '/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg', year: 2024, rating: 7.4, media_type: 'movie', overview: 'America divided.' },
        { id: 786892, title: 'Furiosa: A Mad Max Saga', poster_path: '/iADOJ8Zymht2Jkoy98jlhyvgQ9l.jpg', year: 2024, rating: 8.0, media_type: 'movie', overview: 'Witness her.' },
        { id: 926393, title: 'The Equalizer 3', poster_path: '/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg', year: 2023, rating: 7.4, media_type: 'movie', overview: 'Robert McCall returns.' },
        { id: 507089, title: 'Five Nights at Freddy\'s', poster_path: '/7BpNtNfxuocYEVREzVIBAd5nx08.jpg', year: 2023, rating: 7.6, media_type: 'movie', overview: 'Survive the night.' }
      ]
    },
    {
      title: 'Popular Series',
      items: [
        { id: 94605, title: 'Arcane', poster_path: '/fqldf2t8ZTcPN1NUt1sQ0kT1mrY.jpg', year: 2021, rating: 9.1, media_type: 'tv', overview: 'League of Legends story.' },
        { id: 76479, title: 'The Boys', poster_path: '/stTEycfG9928HYGEISBFaG1ngjM.jpg', year: 2019, rating: 8.7, media_type: 'tv', overview: 'Never meet your heroes.' },
        { id: 100088, title: 'The Last of Us', poster_path: '/uKVV4D94iRZRkiXfP5uNBUBzA96.jpg', year: 2023, rating: 8.6, media_type: 'tv', overview: 'Endure and survive.' },
        { id: 1399, title: 'Game of Thrones', poster_path: '/1XS1qyZ1259KSJ96Qj9APa65Yn.jpg', year: 2011, rating: 8.4, media_type: 'tv', overview: 'Winter is coming.' },
        { id: 66732, title: 'Stranger Things', poster_path: '/49WJfeN0moxb9IPfGn8AIqMGskD.jpg', year: 2016, rating: 8.7, media_type: 'tv', overview: 'Upside down.' },
        { id: 119051, title: 'Wednesday', poster_path: '/9PFonBhy4cQy7Jz20NpMygczOkv.jpg', year: 2022, rating: 8.5, media_type: 'tv', overview: 'Snap snap.' },
        { id: 1396, title: 'Breaking Bad', poster_path: '/ggFHVNu6YYI5L9pCfOacjizRGt.jpg', year: 2008, rating: 9.5, media_type: 'tv', overview: 'I am the one who knocks.' },
        { id: 60059, title: 'Better Call Saul', poster_path: '/fC2HDm5t0kMwnh11UyraF7hKl2N.jpg', year: 2015, rating: 8.9, media_type: 'tv', overview: 'It\'s all good man.' }
      ]
    },
    {
      title: 'Action & Adventure',
      items: [
        { id: 299534, title: 'Avengers: Endgame', poster_path: '/or06FN3Dka5tukK1e9sl16pB3iy.jpg', year: 2019, rating: 8.3, media_type: 'movie', overview: 'Assemble.' },
        { id: 155, title: 'The Dark Knight', poster_path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg', year: 2008, rating: 9.0, media_type: 'movie', overview: 'Why so serious?' },
        { id: 603, title: 'The Matrix', poster_path: '/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg', year: 1999, rating: 8.7, media_type: 'movie', overview: 'Red or blue pill.' },
        { id: 24428, title: 'The Avengers', poster_path: '/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg', year: 2012, rating: 8.0, media_type: 'movie', overview: 'Earth\'s mightiest heroes.' },
        { id: 383498, title: 'Deadpool 2', poster_path: '/to0spRl1NZPtZsAtfwbRjid46QZ.jpg', year: 2018, rating: 7.6, media_type: 'movie', overview: 'Maximum effort.' },
        { id: 299536, title: 'Avengers: Infinity War', poster_path: '/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg', year: 2018, rating: 8.3, media_type: 'movie', overview: 'Dread it. Run from it.' },
        { id: 634649, title: 'Spider-Man: No Way Home', poster_path: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg', year: 2021, rating: 8.2, media_type: 'movie', overview: 'The multiverse unleashed.' },
        { id: 453395, title: 'Doctor Strange', poster_path: '/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg', year: 2022, rating: 7.4, media_type: 'movie', overview: 'Things just got out of hand.' }
      ]
    },
    {
      title: 'Sci-Fi & Fantasy',
      items: [
        { id: 157336, title: 'Interstellar', poster_path: '/gEU2QniL6E8AHtMY4kRFSvQWr56.jpg', year: 2014, rating: 8.6, media_type: 'movie', overview: 'Mankind was born on Earth.' },
        { id: 27205, title: 'Inception', poster_path: '/9gk7admal4ZLcnwnCSALLTJ0s0P.jpg', year: 2010, rating: 8.8, media_type: 'movie', overview: 'Dream within a dream.' },
        { id: 19995, title: 'Avatar', poster_path: '/kyeqWdyUXW608qlYkRqosgbbJyK.jpg', year: 2009, rating: 7.6, media_type: 'movie', overview: 'Enter the world.' },
        { id: 76600, title: 'Avatar: The Way of Water', poster_path: '/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg', year: 2022, rating: 7.7, media_type: 'movie', overview: 'Return to Pandora.' },
        { id: 1891, title: 'The Empire Strikes Back', poster_path: '/2l05cFWJacyIsTpsq0ImsanjbQe.jpg', year: 1980, rating: 8.4, media_type: 'movie', overview: 'The adventure continues.' },
        { id: 11, title: 'Star Wars', poster_path: '/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg', year: 1977, rating: 8.2, media_type: 'movie', overview: 'A long time ago in a galaxy far, far away...' },
        { id: 181808, title: 'Star Wars: The Last Jedi', poster_path: '/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg', year: 2017, rating: 6.9, media_type: 'movie', overview: 'Darkness rises.' },
        { id: 284054, title: 'Black Panther', poster_path: '/uxzzxijgPIY7slzFvMotPv8wjKA.jpg', year: 2018, rating: 7.4, media_type: 'movie', overview: 'Long live the king.' }
      ]
    },
    {
        title: 'Anime',
        items: [
            { id: 37854, title: 'One Piece', poster_path: '/cMD9Ygz11VJmK1959V1LvIzEAqB.jpg', year: 1999, rating: 8.7, media_type: 'tv', overview: 'Pirate King.' },
            { id: 85937, title: 'Demon Slayer: Kimetsu no Yaiba', poster_path: '/xUfRZu2mi8jH6SzQEYdB9autDKz.jpg', year: 2019, rating: 8.6, media_type: 'tv', overview: 'Slay demons.' },
            { id: 1429, title: 'Attack on Titan', poster_path: '/hTP1DtLGFamjfu8WqjnuQdPuy61.jpg', year: 2013, rating: 8.8, media_type: 'tv', overview: 'Fight titans.' },
            { id: 30623, title: 'Spirited Away', poster_path: '/39wmItIWsg5sZMyRUKG5obHsKak.jpg', year: 2001, rating: 8.5, media_type: 'movie', overview: 'Magic bathhouse.' },
            { id: 31011, title: 'Your Name.', poster_path: '/q719jXXEzOoYaps6babgKnONONX.jpg', year: 2016, rating: 8.5, media_type: 'movie', overview: 'Body swap romance.' },
            { id: 4935, title: 'Howl\'s Moving Castle', poster_path: '/6pZgwaZR5YI7ocxy4fbU5zfnMc.jpg', year: 2004, rating: 8.4, media_type: 'movie', overview: 'Magic castle.' }
        ]
    }
  ]
};

// ADDITION FOR GLOBAL SEARCH (Hidden from main list but searchable)
// Contains extra movies to make search feel "Global"
export const EXTRA_SEARCH_DATA: Movie[] = [
    { id: 278, title: 'The Shawshank Redemption', poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg', year: 1994, rating: 9.3, media_type: 'movie', overview: 'Hope is a good thing.' },
    { id: 238, title: 'The Godfather', poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg', year: 1972, rating: 9.2, media_type: 'movie', overview: 'An offer you can\'t refuse.' },
    { id: 680, title: 'Pulp Fiction', poster_path: '/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg', year: 1994, rating: 8.9, media_type: 'movie', overview: 'Royale with cheese.' },
    { id: 13, title: 'Forrest Gump', poster_path: '/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg', year: 1994, rating: 8.8, media_type: 'movie', overview: 'Life is like a box of chocolates.' },
    { id: 120, title: 'The Lord of the Rings: The Fellowship of the Ring', poster_path: '/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg', year: 2001, rating: 8.8, media_type: 'movie', overview: 'One ring to rule them all.' },
    { id: 603, title: 'The Matrix', poster_path: '/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg', year: 1999, rating: 8.7, media_type: 'movie', overview: 'Free your mind.' },
    { id: 598, title: 'City of God', poster_path: '/k7eYdWvhYQyRQoU2TB2A2Xu2TfD.jpg', year: 2002, rating: 8.4, media_type: 'movie', overview: 'Rio de Janeiro.' },
    { id: 424, title: 'Schindler\'s List', poster_path: '/sF1U4EUQS8YHUYjNl3pTXMY86QV.jpg', year: 1993, rating: 8.6, media_type: 'movie', overview: 'Whoever saves one life.' },
    { id: 122, title: 'The Lord of the Rings: The Return of the King', poster_path: '/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg', year: 2003, rating: 8.9, media_type: 'movie', overview: 'The journey ends.' }
];
