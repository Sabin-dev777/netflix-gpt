import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { IMG_URL } from "../utils/constants";
import { addToWatchlist } from "../utils/moviesSlice";

const MovieDetail = () => {
  const { id } = useParams(); // movie ID from URL
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  console.log(movies);
  const watchlist = useSelector((store) => store.movies.watchlist); // ✅ get watchlist from Redux

  const movie = movies?.find((m) => m.id === parseInt(id));
  if (!movie) return <p className="text-white p-6">Movie not found.</p>;

  // Check if this movie is already in watchlist
  const isInWatchlist = watchlist?.some((m) => m.id === movie.id);

  const handleAddToWatchlist = () => {
    if (!isInWatchlist) {
      dispatch(addToWatchlist(movie));
    }
  };

  return (
    <div className="flex justify-center mr-0 ml-0">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 z-50 bg-black/50 text-white px-4 py-2 rounded hover:bg-black/70 transition"
      >
        Back
      </button>
      <div className="bg-black w-full  min-h-screen text-white absolute ">
        <div className="max-w-7xl p-6 flex flex-col md:flex-row gap-6 mt-24">
          {/* Poster */}
          <div className="shrink-0 border rounded-lg overflow-hidden shadow-lg h-96 w-full md:w-1/3">
            <img
              src={IMG_URL + movie.poster_path}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Movie Details */}
          <div className="flex flex-col flex-1 gap-4">
            <h1 className="text-4xl font-bold">{movie.title}</h1>
            <p className="text-yellow-400">⭐ {movie.vote_average}</p>
            <p className="text-gray-300">{movie.overview}</p>
            <div className="mt-auto flex gap-4">
              <button
                className="bg-red-600 px-6 py-2 rounded-md hover:bg-red-700 transition"
                onClick={() => navigate(`/watch/${movie.id}`)}
              >
                Watch Now
              </button>

              <button
                className={`px-6 py-2 rounded-md transition ${
                  isInWatchlist
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
                onClick={handleAddToWatchlist}
                disabled={isInWatchlist}
              >
                {isInWatchlist ? "Added to Watchlist" : "Add to Watchlist"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
