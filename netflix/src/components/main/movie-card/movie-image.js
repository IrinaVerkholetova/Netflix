import React from 'react';
import './movie-card.css';
import { PropTypes } from 'prop-types';

export const MovieImage = ({ movie }) => (
  <img src={movie.poster_path} alt={`  ${movie.title}`} className="imgMovie" />
);

MovieImage.propTypes = {
  movie: PropTypes.object,
};
