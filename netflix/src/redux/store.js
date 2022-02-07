import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducers';
import thunk from 'redux-thunk';
// import { createStore } from 'redux';

// export const store = createStore(reducer);

export const store = configureStore({
  reducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: {},
  enhancers: [],
});
