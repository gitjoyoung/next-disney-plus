import React from 'react';
import { fetchNowPlaying } from '../api/fetchMovies';

const Test = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <h1>yes{data.id}</h1>
    </div>
  );
};
export async function getData() {
  const BannerData = await fetchNowPlaying();

  return BannerData;
}
export default Test;
