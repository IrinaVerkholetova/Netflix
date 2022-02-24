import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { moviesThunkActions } from '../../redux/thunks';
import { CustomModalForm } from './custom-modal-form/custom-modal-form';

export const EditMovie = ({ movie, visible, setVisible }) => {
  const defaultValues = { ...movie, release_date: moment(movie.release_date, 'YYYY-MM-DD') };

  const ModalProps = {
    action: moviesThunkActions.updateMovieThunk,
    message: 'The movie has been updated to database successfully',
    title: 'EDIT MOVIE',
    initialValues: defaultValues,
    movie,
    visible,
    setVisible,
  };

  return <CustomModalForm {...ModalProps} />;
};

EditMovie.propTypes = {
  movie: PropTypes.object,
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
};
