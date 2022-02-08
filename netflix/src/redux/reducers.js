import { ActionTypes } from './types';

export const initialListState = {
  moviesList: [],
  currentMovie: {},
  isLoading: false,
  hasError: false,
};

export const reducer = (state = initialListState, action) => {
  switch (action.type) {
    case ActionTypes.LOADING:
      return { ...state, isLoading: action.payload };
    case ActionTypes.HAS_ERROR:
      return { ...state, hasError: action.payload };
    case ActionTypes.GET_MOVIES_LIST:
      return { ...state, moviesList: action.payload };
    case ActionTypes.GET_MOVIE_BY_ID:
      return { ...state, currentMovie: action.payload };
    case ActionTypes.ADD_NEW_MOVIE:
      return { ...state, moviesList: [...state.moviesList, action.payload] };
    case ActionTypes.UPDATE_MOVIE_BY_ID:
      const currentMoviesList = [...state.moviesList];
      const index = currentMoviesList.findIndex((movie) => movie.id === action.payload.id);
      currentMoviesList.splice(index, 1, action.payload);
      return { ...state, moviesList: currentMoviesList };
    case ActionTypes.DELETE_MOVIE:
      const filtredMoviesList = state.moviesList.filter((movie) => movie.id !== action.payload);
      return { ...state, moviesList: filtredMoviesList };

    default:
      return state;
  }
};
