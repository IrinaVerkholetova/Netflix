import React from 'react';
import PropTypes from 'prop-types';
import { moviesThunkActions } from '../../redux/thunks';
import { CustomModalForm } from './custom-modal-form/custom-modal-form';

export const AddMovie = ({ visible, setVisible }) => {
  const defaultValues = {
    // title: 'La La Land',
    // vote_average: 7.9,
    // release_date: "2016-12-29",
    // poster_path: 'https://2.bp.blogspot.com/-mmN8FiPcWDc/WWCUELUuZzI/AAAAAAAAAGQ/ztsHb0INa1cp6JgxvG6KBxwmjtN09oLcgCLcBGAs/s1600/POSTER.jpg',
    // overview: 'Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.',
    // runtime: 128,
    // genres: [],

    title: '',
    vote_average: null,
    release_date: '',
    poster_path: '',
    overview: '',
    runtime: null,
    genres: [],
  };

  const ModalProps = {
    action: moviesThunkActions.addMovieThunk,
    message: 'The movie has been added to database successfully',
    title: 'ADD MOVIE',
    initialValues: defaultValues,
    visible,
    setVisible,
  };

  return <CustomModalForm {...ModalProps} />;
};

AddMovie.propTypes = {
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
};
