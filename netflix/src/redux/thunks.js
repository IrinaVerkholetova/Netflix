import { setLoading, getMoviesList, getMovie, hasError, addMovie } from './actions';

export const moviesThunkActions = {
  getMoviesListThunk: () => async (dispatch) => {
    dispatch(setLoading(true));
    await fetch(`http://localhost:4000/movies`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error occurred!');
        }
        return response.json();
      })
      .then((response) => {
        dispatch(getMoviesList(response?.data));
      })
      .catch((error) => {
        console.log('Error: ', error);
        dispatch(hasError(true));
      });
    dispatch(setLoading(false));
  },

  getMovieByIdThunk: (id) => async (dispatch) => {
    await fetch(`http://localhost:4000/movies/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error occurred!');
        }
        return response.json();
      })
      .then((response) => {
        dispatch(getMovie(response));
      })
      .catch((error) => {
        console.log('Error: ', error);
        dispatch(hasError(true));
      });
  },

  addMovieThunk: (submitData, callback) => async (dispatch) => {
    try {
      const response = await fetch('http://localhost:4000/movies', {
        method: 'POST',
        body: JSON.stringify(submitData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      dispatch(addMovie(result));
      callback();
    } catch (error) {
      console.error('Ошибка:', error);
      dispatch(hasError(true));
    }
  },

  //   updateMovieThunk: () => async (dispatch) => {},

  //   deleteMovieThunk: () => async (dispatch) => {},
};
