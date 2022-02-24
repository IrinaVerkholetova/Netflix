import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { moviesThunkActions } from '../../redux/thunks';
import { CustomModalForm } from './custom-modal-form/custom-modal-form';

export const EditMovie = ({ message, movie, visible, setVisible }) => {
  const defaultValues = { ...movie, release_date: moment(movie.release_date, 'YYYY-MM-DD') };

  const ModalProps = {
    action: moviesThunkActions.updateMovieThunk,
    message,
    title: 'EDIT MOVIE',
    initialValues: defaultValues,
    movie,
    visible,
    setVisible,
  };

  return <CustomModalForm {...ModalProps} />;
};

EditMovie.propTypes = {
  message: PropTypes.string,
  movie: PropTypes.object,
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
};
