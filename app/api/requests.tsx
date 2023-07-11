export interface Requests {
  NowPlaying: string;
  Trending: string;
  TopRated: string;
  ActionMovies: string;
  ComedyMovies: string;
  HorrorMovies: string;
  RomanceMovies: string;
  Documentaries: string;
}

export const requests: Requests = {
  NowPlaying: 'movie/now_playing',
  Trending: '/trending/all/week',
  TopRated: '/movie/top_rated',
  ActionMovies: '/discover/movie?with_genres=28',
  ComedyMovies: '/discover/movie?with_genres=35',
  HorrorMovies: '/discover/movie?with_genres=27',
  RomanceMovies: '/discover/movie?with_genres=10749',
  Documentaries: '/discover/movie?with_genres=99',
};
