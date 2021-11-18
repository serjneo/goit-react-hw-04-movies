import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import BackButton from '../BackButton';
import './MovieCard.scss';

function MovieCard({ movie }) {
  const { release_date, vote_average, overview, title, genres, poster_path } =
    movie;
  const { url } = useRouteMatch();
  const location = useLocation();

  const posterUrl = `https://image.tmdb.org/t/p/w300${poster_path}`;

  return (
    <>
      <BackButton />
      <article className="movieCard">
        <div className="movieCard__poster">
          <img src={posterUrl} alt={title} title={title} />
        </div>
        <div className="movieCard__info">
          {title && (
            <h1 className="movieCard__title">
              {title}
              {''}
              {release_date ? (
                <span>({release_date.substring(0, 4)})</span>
              ) : (
                <span>(n/a)</span>
              )}
            </h1>
          )}
          <div className="movieCard__score">
            {vote_average ? (
              <p className="vote">Average Vote: {vote_average} </p>
            ) : null}
          </div>

          <div>
            <p className="movieCard__label">Overview: </p>
            {overview ? (
              <span className="movieCard__text">{overview}</span>
            ) : (
              <span>n/a</span>
            )}
          </div>

          <p className="label">Genres:</p>

          {genres.length > 0 ? (
            <ul className="genresList">
              {genres.map(({ id, name }) => (
                <li key={id} className="genreList__item">
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          ) : (
            <span>n/a</span>
          )}
        </div>
      </article>
      <div className="addInfo">
        <div className="addInfo__container">
          <Link
            className="addInfo__link"
            to={{
              pathname: `${url}/cast`,
              state: { from: location.state ? location.state.from : '/' },
            }}
          >
            CAST
          </Link>
          <Link
            className="addInfo__link"
            to={{
              pathname: `${url}/reviews`,
              state: { from: location.state ? location.state.from : '/' },
            }}
          >
            {' '}
            REVIEWS
          </Link>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
