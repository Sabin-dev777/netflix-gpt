import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../utils/constants";

const MovieCard = ({ posterPath, title, rating, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${id}`); // Navigate to Movie Detail page
  };

  return (
    <div
      onClick={handleClick}
      className="relative min-w-[150px] sm:min-w-[180px] md:min-w-[200px] cursor-pointer transition-transform transform hover:scale-105"
    >
      {/* Movie Poster */}
      <img
        src={IMG_URL + posterPath}
        alt={title || "Movie poster"}
        className="w-full h-60 sm:h-72 md:h-80 object-cover rounded-lg shadow-lg p-2"
      />

      {/* Overlay with title and rating */}
      <div className="absolute bottom-2 left-2 right-2 bg-black bg-opacity-60 text-white text-xs p-1 rounded">
        {title && <p className="font-semibold truncate">{title}</p>}
        {rating && <p>⭐ {rating}</p>}
      </div>
    </div>
  );
};

export default MovieCard;
