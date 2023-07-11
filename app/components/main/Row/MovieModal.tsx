'use client';
import React from 'react';

interface MovieModalProps {
  modalData: {
    backdrop_path?: string;
    title?: string;
    overview?: string;
    release_date?: string;
    vote_average?: number;
  };
  setMovieModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MovieModal = ({ modalData, setMovieModal }: MovieModalProps) => {
  const { backdrop_path, title, overview, release_date, vote_average } = modalData;

  const handleModalClose = () => {
    setMovieModal(false);
  };
  return (
    <div
      onClick={handleModalClose}
      className=" absolute top-0 z-50  flex h-full w-full justify-center bg-black bg-opacity-30 text-black"
    >
      <div className="fixed flex h-full w-[45rem] flex-col items-center gap-3 overflow-hidden  rounded-2xl bg-[#111] text-xl ">
        <button
          onClick={handleModalClose}
          className="absolute right-3 top-3 text-5xl font-bold text-white "
        >
          {' '}
          X{' '}
        </button>
        <div
          className="h-[30rem]  w-full"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="flex h-[40%] w-full flex-col gap-4 p-8 text-white">
          <div className="font-bold">100% for you {release_date}</div>
          <div className="text-4xl font-bold">{title}</div>
          <div className="text-base">평점: {vote_average}</div>
          <div className="text-lg">{overview}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
