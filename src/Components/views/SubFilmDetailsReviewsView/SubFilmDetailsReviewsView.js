import { useParams } from "react-router";
import { useState, useEffect } from "react/cjs/react.development";
import { fetchFilmCast } from "../../FetchFilms/FetchFilms";

export default function SubFilmDetailsReviewsView({ filmId }) {
  const [cast, setCast] = useState(null);
  console.log("cast: ", cast);

  const params = useParams();
  console.log("params: ", params);

  useEffect(() => {
    fetchFilmCast(filmId).then(setCast);
  }, [filmId]);

  return <div>Список актёров</div>;
}
