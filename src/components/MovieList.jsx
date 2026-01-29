import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="my-6 bg-black">
      <h1 className="text-3xl text-white mb-4">{title}</h1>

      <div className="flex space-x-4 overflow-x-auto overflow-y-hidden scrollbar-hide px-2">
        {/* Check if movies exist */}
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id} //
              posterPath={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
            />
          ))
        ) : (
          <p className="text-gray-400">No movies available.</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
