import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time} minutes</p>
      {movie.genres.map((genre, idx) => (
        <span key={idx}>{genre} </span>
      ))}
    </>
  );
};

export default Movie;
