// src/pages/Home.jsx
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from the JSON server
    fetch("http://localhost:4000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
