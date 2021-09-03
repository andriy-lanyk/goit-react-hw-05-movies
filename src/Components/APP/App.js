import { Switch, Route, Redirect } from "react-router-dom";
import fetchFilms from "../FetchFilms";

function App() {
  function getFilms() {
    return fetchFilms().then((response) => console.log(response));
  }

  return (
    <>
      <Switch>
        <Route path="/" exact />
        <Route path="/about" />
        <Route path="/contact" />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
