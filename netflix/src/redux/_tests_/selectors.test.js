import 'jest';
import { testStateStore } from '../mock/store.mock';
import * as selectors from '../selectors';

describe('selectors', () => {
  it('test getMoviesList should return list (type array)', () => {
    expect(selectors.getMoviesList(testStateStore)).toEqual(testStateStore.moviesList);
  });

  it('test getMovie should return movie (type object)', () => {
    expect(selectors.getMovie(testStateStore)).toEqual(testStateStore.currentMovie);
  });

  it('test getLoadingStatus should return status of loading (type boolean)', () => {
    expect(selectors.getLoadingStatus(testStateStore)).toEqual(testStateStore.isLoading);
  });

  it('test getErrorStatus should return status of error (type boolean)', () => {
    expect(selectors.getErrorStatus(testStateStore)).toEqual(testStateStore.hasError);
  });

  it('test getFilteredMoviesList should return filtered movies list (type array)', () => {
    const genre = 'Family';
    const sortBy = 'Title up';
    const sortByGenre =
      genre === 'All'
        ? testStateStore.moviesList
        : testStateStore.moviesList?.filter((item) => item.genres.includes(genre));
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
    expect(selectors.getFilteredMoviesList(testStateStore)(genre, sortBy)).toEqual(sortByGenre);
  });

  it('test getCurrentUser should return current user (type object)', () => {
    expect(selectors.getCurrentUser(testStateStore)).toEqual(testStateStore.currentUser);
  });
});
