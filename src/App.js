import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Container from './components/Container';
import AppBar from './components/AppBar';
import Loader from './components/Loader';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "HomePage" */),
);
const MovieDatailsPage = lazy(() =>
  import('./views/MovieDetailsPage' /* webpackChunkName: "MovieDatailsPage" */),
);
const MoviesPage = lazy(() =>
  import('./views//MoviesPage' /* webpackChunkName: "MoviesPage" */),
);
const NotFoundPage = lazy(() =>
  import('./views/NotFoundPage' /* webpackChunkName: "NotFoundPage" */),
);

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDatailsPage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
