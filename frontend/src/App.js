import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
//import Route from "react-router-dom/Route"
//import Switch from "react-router-dom/Switch";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
//import { NavLink } from "react-router-dom";
import MovieCreateForm from "./pages/movies/MovieCreateForm";
import ReviewCreateForm from "./pages/reviews/ReviewCreateForm";
import ReviewCreateFormMovie from "./pages/reviews/ReviewCreateFormMovie";
import MoviePage from "./pages/movies/MoviePage";
import ReviewPage from "./pages/reviews/ReviewPage";
import ReviewsPage from "./pages/reviews/ReviewsPage";
import ReviewsOfMoviePage from "./pages/reviews/ReviewsOfMoviePage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import MoviesPage from "./pages/movies/MoviesPage";
import GenrePicker from "./pages/movies/GenrePicker";
import MoviePageMovie from "./pages/movies/MoviePageMovie";
import ReviewEditForm from "./pages/reviews/ReviewEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import NotFound from "./components/NotFound";




function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || ""

  return (
    
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => (
            <ReviewsPage message="No results found. Adjust search keywords."/>
            )} />
            <Route exact path="/feed" render={() => (
            <ReviewsPage message="No results found. Adjust search keywords or follow a user."
            filter={`owner__followed__owner__profile=${profile_id}&`}
            />
            )} />
            <Route exact path="/liked" render={() => (
            <ReviewsPage message="No results found. Adjust search keywords or like a review."
            filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
            />
            )} />
            <Route exact path="/popular" render={() => (
            <ReviewsPage message="No results found. Adjust search keywords or like a review."
            filter={`&ordering=-likes_count&`}
            />
            )} />
            <Route exact path="/reviewsm/:id" render={() => (
            <ReviewsOfMoviePage message="No results found." />
            )} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/movies" render={() => <MoviesPage
          message="No results found. Adjust search keywords."
          />} />
          <Route exact path="/movies/create" render={() => <MovieCreateForm />} />
          <Route exact path="/movies/:id" render={() => <MoviePage />} />
          <Route exact path="/movies/m/:id" render={() => <MoviePageMovie />} />
          <Route exact path="/reviews/create" render={() => <ReviewCreateForm />} />
          <Route exact path="/reviews/m/:movie" render={() => <ReviewCreateFormMovie />} />
          <Route exact path="/reviews/:id" render={() => <ReviewPage />} />
          <Route exact path="/reviews/:id/edit" render={() => <ReviewEditForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route exact path="/genres" render={() => <GenrePicker />} />
          <Route
  exact
  path="/profiles/:id/edit/username"
  render={() => <UsernameForm />}
/>
<Route
  exact
  path="/profiles/:id/edit/password"
  render={() => <UserPasswordForm />}
/>
<Route
  exact
  path="/profiles/:id/edit"
  render={() => <ProfileEditForm />}
/>
          <Route render={() => <NotFound />} />
        </Switch>
      </Container>
    </div>
    
  );
}

export default App;