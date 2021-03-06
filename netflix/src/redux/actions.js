import { ActionTypes } from './types';
import { createAction } from '@reduxjs/toolkit';

// export const setLoading = (status) => ({ type: ActionTypes.LOADING, payload: status });
// export const getMoviesList = (list) => ({ type: ActionTypes.GET_MOVIES_LIST, payload: list });
// export const getMovie = (item) => ({ type: ActionTypes.GET_MOVIE_BY_ID, payload: item });
// export const hasError = (status) => ({ type: ActionTypes.HAS_ERROR, payload: status });

export const setLoading = createAction(ActionTypes.LOADING, (status) => ({ payload: status }));
export const getMoviesList = createAction(ActionTypes.GET_MOVIES_LIST, (list) => ({
  payload: list,
}));
export const getMovie = createAction(ActionTypes.GET_MOVIE_BY_ID, (movie) => ({ payload: movie }));
export const setError = createAction(ActionTypes.HAS_ERROR, (status) => ({ payload: status }));
export const addMovie = createAction(ActionTypes.ADD_NEW_MOVIE, (movie) => ({ payload: movie }));
export const updateMovie = createAction(ActionTypes.UPDATE_MOVIE_BY_ID, (movie) => ({
  payload: movie,
}));
export const deleteMovie = createAction(ActionTypes.DELETE_MOVIE, (id) => ({ payload: id }));

export const setCurrentUser = createAction(ActionTypes.SET_CURRENT_USER, (form) => ({
  payload: { login: form.login, password: form.password },
}));
