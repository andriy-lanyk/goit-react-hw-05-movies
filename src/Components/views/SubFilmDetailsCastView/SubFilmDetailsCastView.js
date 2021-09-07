import { useParams } from "react-router";
import { useState, useEffect } from "react/cjs/react.development";
import { fetchFilmReviews } from "../../FetchFilms/FetchFilms";

export default function SubFilmDetailsReviewsView({ filmId }) {
  const [reviews, setReviews] = useState(null);
  console.log("reviews: ", reviews);

  const params = useParams();
  console.log("params: ", params);

  useEffect(() => {
    fetchFilmReviews(filmId).then(setReviews);
  }, [filmId]);

  return <div>Описание фильма</div>;
}
