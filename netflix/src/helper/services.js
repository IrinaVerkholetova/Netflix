import React from 'react';

export default class ToolServices extends React.Component {
  static moviesFilted = (genre, moviesTemp) => {
    return genre === 'ALL'
      ? moviesTemp
      : moviesTemp.filter((item) => item.genre.includes(genre.toLowerCase()));
  };
  static foundMovie = (moviesTemp, key) => {
    return moviesTemp.find((item) => item.key === key);
  };
}
