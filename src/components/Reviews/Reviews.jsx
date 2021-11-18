import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import * as Api from '../../services/ApiService'
import Loader from '../Loader';
import './Reviews.scss';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = () => {
    setStatus('pending');
    Api.fetchReviews(movieId).then((res) => {
      setReviews(res.results);
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
      {status === 'pending' && (
        <Loader />
      )}
      <div className="reviews">
        <ul className="reviews__list">
          {reviews && reviews.length > 0
            ? reviews.map(({ id, author, content, url }) => (
                <li className="reviews__item" key={id}>
                  <h3 className="reviews__title">Author: {author}</h3>
                  <p className="reviews__text">{content.slice(0, 730)}...</p>
                </li>
              ))
            : "We don't have reviews"}
        </ul>
      </div>
      </>
      );
    
}

Reviews.propTypes = {
  movieId: PropTypes.string,
};

export default Reviews;