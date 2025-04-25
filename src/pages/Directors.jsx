import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const Directors = () => {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/directors")
      .then((res) => res.json())
      .then((data) => setDirectors(data));
  }, []);

  return (
    <>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map((director, idx) => (
        <article key={idx}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, i) => (
              <li key={i}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
};

export default Directors;
