import { useEffect, useState } from "react";

const Actors = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    // Fetch actors from the JSON server
    fetch("http://localhost:4000/actors")
      .then((response) => response.json())
      .then((data) => setActors(data))
      .catch((error) => console.error("Error fetching actors:", error));
  }, []);

  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => (
        <article key={actor.id}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default Actors;
