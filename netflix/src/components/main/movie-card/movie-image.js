import React from 'react';
import './movie-card.css';

export const MovieImage = ({ movie }) => (
  <img src={movie.poster_path} alt={`  ${movie.title}`} className="imgMovie" />
);

export class MovieImage2 extends React.Component {
  render() {
    const { movie } = this.props;
    return <img src={movie.poster_path} alt={movie.title} className="imgMovie" />;
  }
}
