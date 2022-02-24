import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from '../redux/store';

import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
import MainComponent from './main/main';
import BackTopComponent from './back-top/back-top';

export default function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          <MainComponent />
          <BackTopComponent />
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  );
}
