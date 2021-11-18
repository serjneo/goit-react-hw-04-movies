import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList.jsx';
import * as Api from '../../services/ApiService';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton.jsx';
import Loader from '../../components/Loader/Loader.jsx';

function HomePage() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    getTrendFilm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTrendFilm = () => {
    setStatus('pending');

    Api.getTrendMovies(page).then(res => {
      const data = res.results;
      setMovies(prev => [...prev, ...data]);
    });
    setPage(prev => prev + 1);

    if (page !== 1) {
    }
    setStatus('resolved');
  };

  const loadMoreHandler = () => {
    getTrendFilm();
  };

  const showLoadMore = movies.length >= 19;

  return (
    <>
      {status === 'pending' && <Loader />}
      {movies ? (
        <MovieList movies={movies} url={'movies'} location={'/'} />
      ) : (
        <h2>Error getting movies</h2>
      )}
      {showLoadMore && <LoadMoreButton onLoadMore={loadMoreHandler} />}
    </>
  );
}

export default HomePage;
