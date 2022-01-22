import React from 'react';
import css from './logo.module.css';

export const Netflix = ({ ...props }) => {
  return (
    <span className={css.titleContainer} {...props}>
      <b>netflix</b>roulette
    </span>
  );
};
