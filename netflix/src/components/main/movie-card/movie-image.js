import React from 'react';
import './movie-card.css';

export const MovieImage = ({ movie }) => (
  <img
    src={movie.poster_path}
    alt={`  ${movie.title}`}
    className="imgMovie"
    onerror="this.style.display='none'"
  />
);
