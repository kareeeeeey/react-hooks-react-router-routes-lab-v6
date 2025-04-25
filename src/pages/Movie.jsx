import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch a specific movie from the JSON server
    fetch(`http://localhost:4000/movies/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Movie not found");
        return response.json();
      })
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie:", error));
  }, [id]);

  if (!movie) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.time} minutes</p>
      <div>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre} </span>
        ))}
      </div>
    </div>
  );
};

export default Movie;
