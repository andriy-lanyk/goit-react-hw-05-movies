import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchFilmById } from "../../FetchFilms/FetchFilms";

function FilmDetailsView() {
  const [film, setFilm] = useState(null);
  console.log("film: ", film);

  const { movieId } = useParams();

  useEffect(() => {
    fetchFilmById(movieId).then(setFilm);
  }, [movieId]);

  return (
    film && (
      <div>
        <img src="" />
        <h2>{film.original_title ?? film.original_name}</h2>
        <p>User score: {film.vote_count}%</p>
        <h3>Overview</h3>
        <p>{film.overview}</p>
        <h3>Genres</h3>
        <ul>
          {film.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    )
  );
}

export default FilmDetailsView;
