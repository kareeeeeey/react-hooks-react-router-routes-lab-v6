// src/components/MovieCard.jsx
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <Link to={`/movie/${movie.id}`}>See Details</Link>
    </div>
  );
};

export default MovieCard;
