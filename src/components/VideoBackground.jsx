import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerId = useSelector((store) => store.movies?.trailerVideo?.key);
  useMovieTrailer(movieId);
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <iframe
        className="w-full h-full scale-150"
        src={
          "https://www.youtube.com/embed/" +
          trailerId +
          "?autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=" +
          trailerId
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
