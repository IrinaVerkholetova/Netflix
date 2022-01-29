import React from 'react';
import css from './logo.module.css';
import { useNavigate } from 'react-router-dom';

export const Netflix = ({ ...props }) => {
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.stopPropagation();
    navigate('/');
  };

  return (
    <span className={css.titleContainer} {...props} onClick={handleClick}>
      <b>netflix</b>roulette
    </span>
  );
};

export class Netflix2 extends React.Component {
  handleClick = (event) => {
    event.stopPropagation();
  };

  render() {
    console.log(this.state);
    return (
      <span className={css.titleContainer} {...this.props} onClick={this.handleClick}>
        <b>netflix</b>roulette
      </span>
    );
  }
}
