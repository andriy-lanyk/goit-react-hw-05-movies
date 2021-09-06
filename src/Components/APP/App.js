import { Switch, Route, Redirect } from "react-router-dom";
import AppBar from "../AppBar";
import HomeView from "../views/HomeView";
import FilmView from "../views/FilmView";
import FilmDetailsView from "../views/FilmDetailsView";

function App() {
  return (
    <>
      <AppBar />
      <Switch>
        <Route path="/" exact component={HomeView} />
        <Route path="/movies" exact component={FilmView} />
        <Route path="/movies/:movieId" exact component={FilmDetailsView} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
