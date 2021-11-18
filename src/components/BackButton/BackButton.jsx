import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './BackButton.scss';

function BackButton({ children }) {
const history = useHistory();
const location = useLocation();

const handleGoBackClick = () => {
history.push(location.state.from ?? '/movies');
};

return (
    <div className="buttonWrapper">
       <button type="button" className="button" onClick={handleGoBackClick}>
            {children} Previous Page
       </button>
    </div>
);
}

BackButton.propTypes = {
children: PropTypes.node,
};

export default BackButton;