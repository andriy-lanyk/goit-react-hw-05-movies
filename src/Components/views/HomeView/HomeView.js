import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { fetchTrendingFilms } from "../../FetchFilms/FetchFilms";

function HomeView() {
  const [films, setFilms] = useState([]);

  //   const {url} = useRouteMatch();
  //   console.log("match: ", match);

  useEffect(() => {
    fetchTrendingFilms().then((response) => setFilms(response.results));
  }, []);

  //   function getFilms() {
  //     return fetchFilms().then((response) => console.log(response));
  //   }

  return (
    <ul>
      {films.length > 0 &&
        films.map((film) => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`}>
              {film.original_name ?? film.original_title}
            </Link>
          </li>
        ))}
    </ul>
  );
}

export default HomeView;
