import React from 'react';

import { connect } from 'react-redux';
import { setError } from '../../redux/actions';

import { useNavigate } from 'react-router-dom';

import './loader.css';
import { Spin } from 'antd';
import { Netflix } from '../logo/logo';

const WithLoading = ({ isLoading, hasError, setError, children }) => {
  const Page = () => {
    const navigate = useNavigate();
    return (
      <div className="loaderContainer">
        <Netflix />
        <div className="loader">
          {hasError ? (
            <>
              <h3>Sorry, an error occurred while retrieving data from the server</h3>
              <button
                onClick={() => {
                  // window.location.reload();
                  navigate('/');
                  setError(false);
                }}
              >
                Try it again
              </button>
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

const mapDispatchToProps = { setError };

export default connect(mapStateToProps, mapDispatchToProps)(WithLoading);
