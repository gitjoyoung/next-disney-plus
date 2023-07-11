const Category = ({ name }: { name: string }) => {
  return (
    <div className="delay-50 relative overflow-hidden rounded-md border-[0.2rem] border-solid border-gray-700 pt-[53.25%] shadow-md   transition  ease-in-out hover:scale-110">
      <img
        className="peer absolute inset-0 z-10  block h-auto  w-full"
        src={`/images/viewers-${name}.png`}
        alt={name}
      />
      <video
        className=" absolute top-0 z-0 h-auto w-full bg-cover opacity-0 peer-hover:opacity-100"
        autoPlay
        muted
        loop
      >
        <source src={`/videos/${name}.mp4`} />
      </video>
    </div>
  );
};

export default Category;
