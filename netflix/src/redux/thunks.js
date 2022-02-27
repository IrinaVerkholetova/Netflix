import {
  setLoading,
  getMoviesList,
  getMovie,
  setError,
  addMovie,
  updateMovie,
  deleteMovie,
} from './actions';

export const moviesThunkActions = {
  getMoviesListThunk: () => async (dispatch) => {
    dispatch(setLoading(true));
    await fetch(`http://localhost:4000/movies`)
      .then((response) => {
        if (!response.ok) {
          const message = 'Error with Status Code: ' + response.status;
          throw new Error(message);
        }
        return response.json();
      })
      .then((response) => {
        dispatch(getMoviesList(response?.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(setError(true));
      });
    dispatch(setLoading(false));
  },

  getMovieByIdThunk: (id) => async (dispatch) => {
    await fetch(`http://localhost:4000/movies/${id}`)
      .then((response) => {
        if (!response.ok) {
          const message = 'Error with Status Code: ' + response.status;
          throw new Error(message);
        }
        return response.json();
      })
      .then((response) => {
        dispatch(getMovie(response));
      })
      .catch((error) => {
        console.log(error);
        dispatch(setError(true));
      });
  },

  addMovieThunk: (submitData, callback) => async (dispatch) => {
    try {
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify(submitData),
        headers: { 'Content-Type': 'application/json' },
      };
      const response = await fetch('http://localhost:4000/movies', requestOptions);
      if (!response.ok) {
        const message = 'Error with Status Code: ' + response.status;
        throw new Error(message);
      }
      const result = await response.json();
      dispatch(addMovie(result));
      callback();
    } catch (error) {
      console.error(error);
      dispatch(setError(true));
    }
  },

  updateMovieThunk: (submitData, callback) => async (dispatch) => {
    try {
      const requestOptions = {
        method: 'PUT',
        body: JSON.stringify(submitData),
        headers: { 'Content-Type': 'application/json' },
      };
      const response = await fetch(`http://localhost:4000/movies`, requestOptions);
      if (!response.ok) {
        const message = 'Error with Status Code: ' + response.status;
        throw new Error(message);
      }
      const result = await response.json();
      dispatch(updateMovie(result));
      dispatch(getMovie(result));
      callback();
    } catch (error) {
      console.error(error);
      dispatch(setError(true));
    }
  },

  deleteMovieThunk: (id, callback) => async (dispatch) => {
    try {
      const requestOptions = { method: 'DELETE' };
      const response = await fetch(`http://localhost:4000/movies/${id}`, requestOptions);
      if (!response.ok) {
        const message = 'Error with Status Code: ' + response.status;
        throw new Error(message);
      }
      dispatch(deleteMovie(id));
      callback();
    } catch (error) {
      console.error(error);
      dispatch(setError(true));
    }
  },
};
