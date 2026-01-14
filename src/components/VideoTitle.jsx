const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center px-24 text-white bg-linear-to-r from-black/80 via-black/50 to-transparent">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div>
        <button className="bg-white text-black px-12 cursor-pointer py-4 text-lg rounded-lg hover:bg-white/50">
          ▶ Play
        </button>
        <button className=" m-2 bg-gray-400 text-white px-12 cursor-pointer py-4 text-lg rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
