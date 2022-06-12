import 'jest';
import * as actions from '../actions';
import * as mockData from '../mock/data-redux';
import { ActionTypes } from '../types';

describe('actions', () => {
  it('setLoading should return action (type boolean)', () => {
    const action = {
      type: ActionTypes.LOADING,
      payload: mockData.mockDataLoading,
    };
    expect(actions.setLoading(mockData.mockDataLoading)).toEqual(action);
  });

  it('setError should return action (type boolean)', () => {
    const action = {
      type: ActionTypes.HAS_ERROR,
      payload: mockData.mockDataError,
    };
    expect(actions.setError(mockData.mockDataError)).toEqual(action);
  });

  it('getMoviesList should return action (type array)', () => {
    const action = {
      type: ActionTypes.GET_MOVIES_LIST,
      payload: mockData.mockDataMoviesList,
    };
    expect(actions.getMoviesList(mockData.mockDataMoviesList)).toEqual(action);
  });

  it('getMovie should return action (type object)', () => {
    const action = {
      type: ActionTypes.GET_MOVIE_BY_ID,
      payload: mockData.mockDataMovie,
    };
    expect(actions.getMovie(mockData.mockDataMovie)).toEqual(action);
  });

  it('addMovie should return action (type object)', () => {
    const action = {
      type: ActionTypes.ADD_NEW_MOVIE,
      payload: mockData.mockDataAddMovie,
    };
    expect(actions.addMovie(mockData.mockDataAddMovie)).toEqual(action);
  });

  it('updateMovie should return action (type object)', () => {
    const action = {
      type: ActionTypes.UPDATE_MOVIE_BY_ID,
      payload: mockData.mockDataUpdateMovie,
    };
    expect(actions.updateMovie(mockData.mockDataUpdateMovie)).toEqual(action);
  });

  it('deleteMovie should return action (type string)', () => {
    const action = {
      type: ActionTypes.DELETE_MOVIE,
      payload: mockData.mockDataDeleteMovie,
    };
    expect(actions.deleteMovie(mockData.mockDataDeleteMovie)).toEqual(action);
  });

  it('setCurrentUser should return action (type object)', () => {
    const action = {
      type: ActionTypes.SET_CURRENT_USER,
      payload: mockData.mockDataCurrentUser,
    };
    expect(actions.setCurrentUser(mockData.mockDataCurrentUser)).toEqual(action);
  });
});
