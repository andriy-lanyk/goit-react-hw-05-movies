const API_KEY = "29be72e1593e059d8c4358ef426fadf9";

export default function fetchFilms() {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  ).then((res) => res.json());
}
