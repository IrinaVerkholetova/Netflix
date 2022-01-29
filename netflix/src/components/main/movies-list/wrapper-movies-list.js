import React from 'react';
import { useNavigate } from 'react-router-dom';
import ToolServices from '../../../helper/services';
import { MoviesList } from './movies-list';

export const WrapperMoviesList = ({ list, genre }) => {
  const navigate = useNavigate();
  const moviesFilted = ToolServices.moviesFilted(list, genre);

  return <MoviesList moviesFilted={moviesFilted} navigate={navigate} />;
};
