import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from '../redux/store';

import './App.css';

import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
import MainComponent from './main/main';

export default function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  );
}
