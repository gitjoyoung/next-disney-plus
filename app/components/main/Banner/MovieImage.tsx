import { fetchNowPlayingRoot, Videos } from '@/app/interpace/fetchNowPlaying';

interface MovieImageProps {
  movie: fetchNowPlayingRoot | undefined;
  handleClick: () => void;
}
type moviedata = {
  backdrop_path: string;
  title: string;
  original_title: string;
  overview: string;
  videos?: Videos;
};
const MovieImage = ({ movie, handleClick }: MovieImageProps) => {
  const truncate = (str: string, n: number) => {
    return str?.length > n ? str.substring(0, n) + '...' : str;
  };
  if (movie) {
    const { backdrop_path, title, original_title, overview, videos }: moviedata = movie || {};

    return (
      <div
        className="relative  h-[100%] w-[100%]   text-cyan-50"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${backdrop_path}")`,
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute bottom-1 left-[4rem] z-10 flex h-[60%] flex-col md:gap-[1rem] lg:gap-[3rem]  ">
          <h1 className="font-bold md:text-3xl lg:text-6xl">{title || original_title}</h1>
          <div>
            {videos.results[0]?.key && (
              <button
                className="rounded-sm bg-slate-50  px-[1rem] py-[0.3rem] font-bold text-black"
                onClick={handleClick}
              >
                Play
              </button>
            )}
          </div>
          <p className="w-[60%]">{truncate(overview, 100)}</p>
        </div>
        <div className=" absolute bottom-0 z-0 h-[50%] w-full bg-gradient-to-t from-black " />
      </div>
    );
  } else {
    return <div>자료가 없습니다</div>;
  }
};

export default MovieImage;
