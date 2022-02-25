import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { SortBY } from '../helper/constants/categories';

export const useAppSelector = useSelector;

export const getMoviesList = (state) => state.moviesList;
export const getMovie = (state) => state.currentMovie;
export const getLoadingStatus = (state) => state.isLoading;
export const getErrorStatus = (state) => state.hasError;

export const getFilteredMoviesList = createSelector(
  [getMoviesList],
  (moviesList) => (genre, sortBy) => {
    const sortByGenre =
      genre === 'All' ? moviesList : moviesList?.filter((item) => item.genres.includes(genre));

    const sortFunc = (a, b) => {
      switch (sortBy) {
        case SortBY.TITLE_UP:
          if (a.title < b.title) return -1;
          break;

        case SortBY.TITLE_DOWN:
          if (a.title > b.title) return -1;
          break;

        case SortBY.RELEASE_UP:
          if (a.release_date.split('-')[0] < b.release_date.split('-')[0]) return -1;
          break;

        case SortBY.RELEASe_DOWN:
          if (a.release_date.split('-')[0] > b.release_date.split('-')[0]) return -1;
          break;

        default:
          break;
      }
    };

    sortByGenre?.sort(sortFunc);

    return sortByGenre;
  },
);

export const getCurrentUser = (state) => state.currentUser;
