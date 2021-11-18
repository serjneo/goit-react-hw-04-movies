import PropTypes from 'prop-types';
import './LoadMoreButton.scss';

function LoadMoreButton({ onLoadMore }) {
  return (
    <div className="buttonWrapper">
      <button type="button"  onClick={onLoadMore} className="button">
        More movies
      </button>
    </div>
  );
}

LoadMoreButton.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default LoadMoreButton;