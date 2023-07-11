'use client';

import React, { useRef, useState } from 'react';
import MovieModal from './MovieModal';

interface RowDataPros {
  backdrop_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  name: string;
}

const Row = ({ RowData, Sub }: { RowData: RowDataPros[]; Sub: string }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [movieModal, setMovieModal] = useState(false);
  const [modalData, setModalData] = useState({});

  console.log(RowData);
  const HandleModal = (data: number) => {
    setMovieModal(prev => !prev);
    setModalData({
      backdrop_path: RowData[data].backdrop_path,
      title: RowData[data].title,
      overview: RowData[data].overview,
      release_date: RowData[data].release_date,
      vote_average: RowData[data].vote_average,
    });
  };

  const handleScrollClick = (move: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + move,
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      {movieModal && <MovieModal modalData={modalData} setMovieModal={setMovieModal} />}
      <div className="group relative  mb-12 mt-12 text-white">
        <div className="mb-5 mt-5 text-2xl font-bold">{Sub}</div>
        <div className="rounded-lgmd:h-56  h-56 w-full  justify-center ">
          <div
            ref={scrollRef}
            className=" flex h-full w-full  gap-4 overflow-scroll duration-700 ease-in-out  scrollbar-hide "
          >
            {RowData.map((_: RowDataPros, index: number) => (
              <div
                key={index}
                className="flex flex-col  rounded-lg border-[3px]    border-solid  border-gray-600   hover:border-white"
              >
                <div
                  onClick={() => HandleModal(index)}
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${RowData[index].backdrop_path})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                  className="relative h-full w-[20rem]  rounded-md"
                >
                  <div
                    className="absolute bottom-0  w-[20rem] overflow-hidden overflow-ellipsis whitespace-nowrap bg-black bg-opacity-80
                 p-2 text-lg font-bold"
                  >
                    {RowData[index].title ? RowData[index].title : RowData[index].name}
                  </div>
                </div>
              </div>
            ))}
            <button
              className="absolute left-5 top-[60%] hidden  
               h-[3rem] w-[3.3rem] translate-y-[-50%] cursor-pointer rounded-full
               bg-gray-900 text-2xl hover:bg-gray-500   group-hover:block"
              onClick={() => handleScrollClick(-1200)}
            >
              <span>{'<'}</span>
            </button>
            <button
              className="absolute right-5 top-[60%] hidden 
              h-[3rem] w-[3.3rem] translate-y-[-50%]  cursor-pointer rounded-full
              bg-gray-900 text-2xl hover:bg-gray-500   group-hover:block"
              onClick={() => handleScrollClick(1200)}
            >
              <span>{'>'}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Row;
