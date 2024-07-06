import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import NavLink from "react-router-dom/NavLink";
import MovieCreateForm from "./pages/movies/MovieCreateForm";
import ReviewCreateForm from "./pages/movies/ReviewCreateForm";





function App() {
  

  return (
    
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h2>Home page</h2>} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          {/*<Route exact path="/movies" render={() => <h2>Movies</h2>} />*/}
          <Route exact path="/movies/create" render={() => <MovieCreateForm />} />
          <Route exact path="/reviews/create" render={() => <ReviewCreateForm />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
        <p>List of <NavLink to="/movies">movies</NavLink></p>
      </Container>
    </div>
    
  );
}

export default App;