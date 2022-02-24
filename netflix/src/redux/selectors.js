import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export const useAppSelector = useSelector;

export const getMoviesList = (state) => state.moviesList;
export const getMovie = (state) => state.currentMovie;
export const getLoadingStatus = (state) => state.isLoading;
export const getErrorStatus = (state) => state.hasError;

export const getFilteredMoviesList = createSelector([getMoviesList], (moviesList) => (genre) => {
  return genre === 'All' ? moviesList : moviesList?.filter((item) => item.genres.includes(genre));
});

export const getCurrentUser = (state) => state.currentUser;
