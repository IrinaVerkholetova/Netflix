import { setLoading, getMoviesList, getMovie, hasError } from './actions';

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
      console.log('Успех:', JSON.stringify(result));
      // Успех: {"title":"La la land","vote_average":7.9,"release_date":"2022-02-06T16:03:50.479Z","poster_path":"https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg","overview":"Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.","runtime":128,"genres":["Comedy","Drama","Romance"],"id":1644163491485}

      callback();
    } catch (error) {
      console.error('Ошибка:', error);
    }
  },

  //   updateMovieThunk: () => async (dispatch) => {},

  //   deleteMovieThunk: () => async (dispatch) => {},
};
