import React from 'react';
import { useNavigate } from 'react-router-dom';
import ToolServices from '../../../helper/services';

// wrapper-container - компонент, принимающий пропсы и children и добавляющий функциональности children
// export const WrapperMoviesList = ({ list, genre, Component, ...rest }) => {
//   const navigate = useNavigate();
//   const moviesFilted = ToolServices.moviesFilted(list, genre);
//   const props = {
//     navigate,
//     moviesFilted,
//     ...rest,
//   };
//   return <Component {...props} />;
// };

// HOC - функция, принимающая компонент и возвращающая новый функционально модицифированный компонент
export const WrapperMoviesList = (Component) => {
  const NewComponent = (props) => {
    const { list, genre } = props;
    const navigate = useNavigate();
    const moviesFilted = ToolServices.moviesFilted(list, genre);
    const newProps = {
      navigate,
      moviesFilted,
    };
    return <Component {...props} {...newProps} />;
  };

  return NewComponent;
};

// каррирование
// const someFn = (arg1) => {
//   return (arg2) => {
//     return (arg3) => {
//       return arg1 + arg2 + arg3;
//     };
//   };
// };
// console.log(someFn(1)(2)(3));
