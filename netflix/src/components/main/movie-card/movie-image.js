import React from 'react';
import './movie-card.css';

export const MovieImage = ({ movie }) => (
  <img src={movie.imgUrl} alt={movie.name} className="imgMovie" />
);
