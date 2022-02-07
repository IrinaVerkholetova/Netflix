import React from 'react';
import { connect } from 'react-redux';

import './loader.css';
import { Spin } from 'antd';
import { Netflix } from '../logo/logo';

const WithLoading = ({ isLoading, hasError, children }) => {
  const Page = () => {
    return (
      <div className="loaderContainer">
        <Netflix />
        <div className="loader">
          {hasError ? (
            <>
              <h3>Sorry, an error occurred while retrieving data from the server</h3>
              <button onClick={() => window.location.reload()}>Try it again</button>
            </>
          ) : (
            <Spin size="large" tip="Loading..." />
          )}
        </div>
      </div>
    );
  };

  return !isLoading && !hasError ? children : <Page />;
};

const mapStateToProps = ({ isLoading, hasError }) => {
  return { isLoading, hasError };
};

export default connect(mapStateToProps)(WithLoading);
