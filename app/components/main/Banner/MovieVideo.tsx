interface MovieVideo {
  key: string | undefined;
  handleClick: () => void;
}

const MovieVideo = ({ key, handleClick }: MovieVideo) => {
  return (
    <div className="h-full w-full">
      {' '}
      <iframe
        src={`https://www.youtube.com/embed/${key}?controls=0&autoplay=1&loop=1&mute=1
  &playlist=${key}`}
        width="100%"
        height="100%"
        allow="autoplay; muted fullscreen"
      >
        <button onClick={handleClick}>X</button>
      </iframe>
    </div>
  );
};

export default MovieVideo;
