import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log("movies", movies);
  return (
    <div className="bg-black text-white -mt-6.25">
      {/* 
    MovieList - popular
        movieCards * n
    MovieList - Now Playing
    MovieList - Trending
    MovieList - Horror

    
    */}
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"New Releases"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Adventure"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
