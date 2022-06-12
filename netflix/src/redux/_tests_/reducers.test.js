import 'jest';
import * as mockData from '../mock/data-redux';
import { initialListState, reducer } from '../reducers';
import { ActionTypes } from '../types';

describe('reducers', () => {
  it('reducer should return isLoading status', () => {
    const action = {
      type: ActionTypes.LOADING,
      payload: mockData.mockDataLoading,
    };
    expect(reducer(initialListState, action)).toEqual({
      ...initialListState,
      isLoading: action.payload,
    });
  });

  it('reducer should return hasError', () => {
    const action = {
      type: ActionTypes.HAS_ERROR,
      payload: mockData.mockDataError,
    };
    expect(reducer(initialListState, action)).toEqual({
      ...initialListState,
      hasError: action.payload,
    });
  });

  it('reducer should return moviesList', () => {
    const action = {
      type: ActionTypes.GET_MOVIES_LIST,
      payload: mockData.mockDataMoviesList,
    };
    expect(reducer(initialListState, action)).toEqual({
      ...initialListState,
      moviesList: action.payload,
    });
  });

  it('reducer should return movie by id', () => {
    const action = {
      type: ActionTypes.GET_MOVIE_BY_ID,
      payload: mockData.mockDataMovie,
    };
    expect(reducer(initialListState, action)).toEqual({
      ...initialListState,
      currentMovie: action.payload,
    });
  });

  it('reducer should return added new movie', () => {
    const action = {
      type: ActionTypes.ADD_NEW_MOVIE,
      payload: mockData.mockDataAddMovie,
    };
    expect(reducer(initialListState, action)).toEqual({
      ...initialListState,
      moviesList: [...initialListState.moviesList, action.payload],
    });
  });

  it('reducer should return updated movie', () => {
    const action = {
      type: ActionTypes.UPDATE_MOVIE_BY_ID,
      payload: mockData.mockDataUpdateMovie,
    };
    const currentMoviesList = [...initialListState.moviesList];
    const index = currentMoviesList.findIndex((movie) => movie.id === action.payload.id);
    currentMoviesList.splice(index, 1, action.payload);
    expect(reducer(initialListState, action)).toEqual({
      ...initialListState,
      moviesList: currentMoviesList,
    });
  });

  it('reducer should return deleted movie', () => {
    const action = {
      type: ActionTypes.DELETE_MOVIE,
      payload: mockData.mockDataDeleteMovie,
    };
    const filtredMoviesList = initialListState.moviesList.filter(
      (movie) => movie.id !== action.payload,
    );
    expect(reducer(initialListState, action)).toEqual({
      ...initialListState,
      moviesList: filtredMoviesList,
    });
  });

  it('reducer should return current user', () => {
    const action = {
      type: ActionTypes.SET_CURRENT_USER,
      payload: mockData.mockDataCurrentUser,
    };
    expect(reducer(initialListState, action)).toEqual({
      ...initialListState,
      currentUser: {
        login: action.payload.login,
        password: action.payload.password,
      },
    });
  });
});
