import React from 'react';

export const withLog = (Wrapped) => {
  return (props) => {
    console.log(props);
    Wrapped.displayName = `HOC (${Wrapped.displayName || Wrapped.name || 'Component'})`;
    return <Wrapped {...props} />;
  };
};
