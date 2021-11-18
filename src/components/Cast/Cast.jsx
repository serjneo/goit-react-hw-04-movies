import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import * as Api from '../../services/ApiService';
import Loader from '../Loader';
import PropTypes from 'prop-types';
import errorPoster from '../../img/default.png'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './Cast.scss';

function Cast() {
  const [actors, setActors] = useState([]);
  const [status, setStatus] = useState('idle');

  const { movieId } = useParams();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = () => {
    setStatus('pending');
    Api.fetchCast(movieId).then(res => {
    setActors(res.cast);
    });
    setStatus('resolved');
    handlePageScroll();
  };

  const handlePageScroll = () => {
      window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {status === 'pending' && <Loader />}

    
      {actors && (
        <div className="cast">
          <ul className="cast__list">
            {actors.map(({ id, name, profile_path }) => (
              <li key={id} className="cast__item">
                <img
                  className="cast__img"
                  src={
                    profile_path ?
                      `https://image.tmdb.org/t/p/w300` + profile_path
                      : errorPoster
                  }
                  alt={name}
                />
                <span className="cast__name">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

Cast.propTypes = {
movieId: PropTypes.string,
};

export default Cast;