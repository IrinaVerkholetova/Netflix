import React from 'react';

export default class ToolServices extends React.Component {
  static moviesFilted = (movies, genre) => {
    console.log(movies, genre);
    return genre === 'All' ? movies : movies.filter((item) => item.genres.includes(genre));
  };

  static foundMovie = (movies, id) => {
    return movies?.find((item) => item.id === id);
  };
}
