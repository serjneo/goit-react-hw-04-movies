import { useEffect, useState, lazy, Suspense } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import * as Api from '../../services/ApiService';
import Loader from '../../components/Loader';
import MovieCard from '../../components/MovieCard';

const Cast = lazy(() =>
  import('../../components/Cast' /* webpackChunkName: "Cast" */),
);
const Reviews = lazy(() =>
  import('../../components/Reviews' /* webpackChunkName: "Reviews" */),
);

function MovieDatailsPage() {
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState('idle');
  const { path } = useRouteMatch();
  const match = useRouteMatch();
  const { movieId } = match.params;

  useEffect(() => {
    getMovieData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMovieData = () => {
    setStatus('pending');
    Api.getMovieById(movieId).then(response => {
      setMovie(response);
    });
    setStatus('resolved');
  };

  return (
    <>
      {movie && <MovieCard movie={movie} />}
      <Suspense fallback={<Loader />}>
        <Route exact path={`${path}/cast`}>
          {movie && <Cast />}
        </Route>
        {
          <Route exact path={`${path}/reviews`}>
            {movie && <Reviews />}
          </Route>
        }
      </Suspense>
    </>
  );
}

export default MovieDatailsPage;
