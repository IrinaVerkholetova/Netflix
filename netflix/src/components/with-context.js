import React from 'react';
import { StoreContext } from './App';

export const withContext = (Wrapped) => {
  return (props) => {
    const context = React.useContext(StoreContext);

    Wrapped.displayName = `HOC-context (${Wrapped.displayName || Wrapped.name || 'Component'})`;

    return <Wrapped context={context} {...props} />;
  };
};
