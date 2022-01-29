import React from 'react';
import './loader.css';
import { Spin } from 'antd';
import { Netflix } from '../logo/logo';

export const WithLoading = ({ isLoading, children }) => {
  const LoadingIndication = () => {
    return (
      <div className="loaderContainer">
        <Netflix />
        <div className="loader">
          <Spin size="large" tip="Loading..." />
        </div>
      </div>
    );
  };

  return !isLoading ? children : <LoadingIndication />;
};

export class WithLoading2 extends React.Component {
  LoadingIndication = () => {
    return (
      <div className="loaderContainer">
        <Netflix />
        <div className="loader">
          <Spin size="large" tip="Loading..." />
        </div>
      </div>
    );
  };

  render() {
    return !this.props.isLoading ? this.props.children : <this.LoadingIndication />;
  }
}
