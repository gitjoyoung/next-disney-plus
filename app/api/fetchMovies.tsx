const API_KEY = 'e41a71c5cb9203294e565ecc9f533f39';
const LANGUAGE = 'ko-KR';

import { requests, Requests } from '@/app/api/requests';

export const makeRequest = (path: string, options = {}) => {
  const url = new URL(`https://api.themoviedb.org/3/${path}`);
  url.searchParams.set('api_key', API_KEY);
  url.searchParams.set('language', LANGUAGE);

  return fetch(url, { ...options, cache: 'no-store' });
};

export const fetchNowPlaying = async () => {
  const response = await makeRequest(requests.NowPlaying);
  const responseData = await response.json();
  const movieId = responseData.results[Math.floor(Math.random() * responseData.results.length)].id;
  const movieResponse = await makeRequest(`movie/${movieId}?append_to_response=videos`);
  const nowPlaying = await movieResponse.json();
  return nowPlaying;
};

export const fetchData = async (fetchType: string) => {
  if (fetchType in requests) {
    const url = requests[fetchType as keyof Requests];
    const response = await makeRequest(url);
    const responseData = await response.json();
    return responseData.results;
  }

  return null;
};
export default makeRequest;
