import { useState } from 'react';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import './MovieSearch.scss';

function MovieSearch({ searchHandler }) {
const [text, setText] = useState('');

const handleInput = (event) => {
    const { value } = event.target;
    setText(value);
};

const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') {
    toast.error('Nothing found');
    return;
    }
    searchHandler(text);
    reset();
};

const reset = () => {
    setText('');
};

return (
    <>
    <form onSubmit={handleSubmit}>
        <label>
            <input
                className ="input"
                type="text"
                name="movie"
                placeholder="Enter movie"
                autoComplete="off"
                onChange={handleInput}
                value={text}
            />
        </label>
        <button className="input__button" type="submit">
            Search Movies
        </button>
    </form>
    <ToastContainer transition={Zoom} autoClose={3000} />
    </>
);
}

MovieSearch.propTypes = {
searchHandler: PropTypes.func,
};

export default MovieSearch;