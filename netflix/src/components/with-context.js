import React from 'react';
import { StoreContext } from './App';

export const withContext = (Wrapped) => {
  return (props) => {
    const context = React.useContext(StoreContext);

    return <Wrapped context={context} {...props} />;
  };
};
