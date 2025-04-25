import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const Actors = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/actors")
      .then((res) => res.json())
      .then((data) => setActors(data));
  }, []);

  return (
    <>
      <NavBar />
      <h1>Actors Page</h1>
      {actors.map((actor, idx) => (
        <article key={idx}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, i) => (
              <li key={i}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
};

export default Actors;
