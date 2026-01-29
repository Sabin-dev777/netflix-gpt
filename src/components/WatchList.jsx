import { useSelector, useDispatch } from "react-redux";
import { removeFromWatchlist } from "../utils/moviesSlice";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";

const Watchlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const watchlist = useSelector((store) => store.movies.watchlist);

  const handleRemove = (id) => {
    dispatch(removeFromWatchlist(id));
  };

  if (!watchlist || watchlist.length === 0)
    return (
      <div className="bg-black min-h-screen text-white pt-24 flex items-center justify-center">
        <p className="text-gray-400 text-xl">Your watchlist is empty.</p>
      </div>
    );

  return (
    <div className="bg-black min-h-screen text-white pt-24">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 z-50 bg-black/50 text-white px-4 py-2 rounded hover:bg-black/70 transition"
      >
        Back
      </button>
      <div className="max-w-7xl mx-auto px-6 py-6">
        <h1 className="text-3xl font-bold mb-6">My Watchlist</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {watchlist.map((movie) => (
            <div key={movie.id} className="relative group">
              <MovieCard
                posterPath={movie.poster_path}
                title={movie.title}
                rating={movie.vote_average}
                id={movie.id}
              />
              {/* Remove button overlay */}
              <button
                className="absolute top-2 right-2 bg-red-600 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition"
                onClick={() => handleRemove(movie.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
