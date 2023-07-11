'use client';
import { useState } from 'react';

import MovieVideo from './MovieVideo';
import MovieImage from './MovieImage';
import { fetchNowPlayingRoot } from '@/app/interpace/fetchNowPlaying';

const Banner = ({ fetchNowPlaying }: { fetchNowPlaying: fetchNowPlayingRoot }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
    console.log(isClicked);
  };

  if (isClicked) {
    return (
      <div className=" h-[20rem] w-full   lg:h-[40rem] ">
        <MovieVideo key={fetchNowPlaying?.videos.results[0].key} handleClick={handleClick} />
      </div>
    );
  } else {
    return (
      <div className=" h-[20rem] w-full  lg:h-[40rem] ">
        <MovieImage movie={fetchNowPlaying} handleClick={handleClick} />
      </div>
    );
  }
};

export default Banner;
