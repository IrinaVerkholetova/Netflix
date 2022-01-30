import React from 'react';
import { useNavigate } from 'react-router-dom';
import ToolServices from '../../../helper/services';

export const WrapperMoviesList = ({ list, genre, Component, ...rest }) => {
  const navigate = useNavigate();
  const moviesFilted = ToolServices.moviesFilted(list, genre);

  const props = {
    navigate,
    moviesFilted,
    ...rest,
  };

  return <Component {...props} />;
};
