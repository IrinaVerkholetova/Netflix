import React from 'react';

export default class ToolServices extends React.Component {
  static moviesFilted = (movies, genre) => {
    return genre === 'All' ? movies : movies.filter((item) => item.genres.includes(genre));
  };

  static foundMovie = (movies, id) => {
    return movies?.find((item) => item.id === id);
  };

  static onFormatDate = (date) => {
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  };
}
