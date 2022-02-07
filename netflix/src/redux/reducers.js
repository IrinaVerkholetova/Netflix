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

    default:
      return state;
  }
};
