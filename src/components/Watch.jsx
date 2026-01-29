import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const Watch = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  const movie = movies?.find((m) => m.id === parseInt(id));

  useMovieTrailer(id);
  const trailerId = useSelector((store) => store.movies?.trailerVideo?.key);

  if (!movie)
    return (
      <div className="bg-black min-h-screen text-white flex items-center justify-center">
        <p className="text-gray-400 text-xl">Movie not found.</p>
      </div>
    );

  if (!trailerId)
    return (
      <div className="bg-black min-h-screen text-white flex items-center justify-center">
        <p className="text-gray-400 text-xl">Loading trailer...</p>
      </div>
    );

  return (
    <div className="bg-black w-screen h-screen relative">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 z-50 bg-black/50 text-white px-4 py-2 rounded hover:bg-black/70 transition"
      >
        Back
      </button>

      {/* Fullscreen Video */}
      <iframe
        title={movie.title}
        src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=0&controls=1`}
        className="w-full h-full"
        frameBorder="0"
        allow="autoplay; encrypted-media; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Watch;
