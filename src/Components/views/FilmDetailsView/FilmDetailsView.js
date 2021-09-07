import { useState, useEffect } from "react";
import { NavLink, Route } from "react-router-dom";
import { useParams, useRouteMatch } from "react-router";
import { fetchFilmById } from "../../FetchFilms/FetchFilms";
import SubFilmDetailsCastView from "../SubFilmDetailsCastView";
import SubFilmDetailsReviewsView from "../SubFilmDetailsReviewsView";

function FilmDetailsView() {
  const [film, setFilm] = useState(null);
  console.log("film: ", film);

  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  console.log("path: ", path);
  console.log("url: ", url);

  useEffect(() => {
    fetchFilmById(movieId).then(setFilm);
  }, [movieId]);

  return (
    <>
      {film && (
        <>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              alt={film.original_title ?? film.original_name}
            />
          </div>
          <div>
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

          <div>
            <h3>Additional information</h3>
            <ul>
              <li>
                <NavLink to={`${url}/cast`}>Cast</NavLink>
              </li>
              <li>
                <NavLink to={`${url}/reviews`}>Reviews</NavLink>
              </li>
            </ul>
          </div>
        </>
      )}
      <Route path={`/movies/${movieId}/cast`}>
        {film && <SubFilmDetailsCastView filmId={movieId} />}
      </Route>
      <Route path={`${path}/reviews`}>
        {film && <SubFilmDetailsReviewsView filmId={movieId} />}
      </Route>
    </>
  );
}

export default FilmDetailsView;
