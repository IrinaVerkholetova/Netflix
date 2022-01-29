import React from 'react';
import { useNavigate } from 'react-router-dom';
import ToolServices from '../../../helper/services';

export const WrapperMoviesList = ({ list, genre, Component }) => {
  const navigate = useNavigate();
  const moviesFilted = ToolServices.moviesFilted(list, genre);

  return <Component moviesFilted={moviesFilted} navigate={navigate} />;
};
