import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => (
  <div>
    <h2>{movie.title}</h2>
    <Link to={`/movie/${movie.id}`}>View Details</Link>
  </div>
);

export default MovieCard;
