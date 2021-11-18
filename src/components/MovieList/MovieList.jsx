import { NavLink } from 'react-router-dom';
import errorPoster from '../../img/default.png';
import PropTypes from 'prop-types';
import './MovieList.scss';

function MovieList({ movies, url, location }) {
  return (
    <>
      <ul className="movie__list">
        {movies.map(({ id, title, poster_path, release_date }) => (
          <li key={id} className="movie__item">
            <NavLink
              className="movie__link"
              to={{
                pathname: `${url}/${id}`,
                state: { from: location },
              }}
            >
              <div className="movie__card">
                <img
                  className="movie__poster"
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w300` + poster_path
                      : errorPoster
                  }
                  alt={title}
                />
                <div className="movie__details">
                  <h2>{title}</h2>
                  {release_date && <span> ({release_date.slice(0, 4)})</span>}
                </div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
