import React from 'react';

import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getLoadingStatus, getErrorStatus } from '../../redux/selectors';
import { setError } from '../../redux/actions';

import { useNavigate } from 'react-router-dom';

import './loader.css';
import { Spin } from 'antd';
import { Netflix } from '../logo/logo';

const WithLoading = ({ children }) => {
  const navigate = useNavigate();

  const isLoading = useSelector(getLoadingStatus, shallowEqual);
  const hasError = useSelector(getErrorStatus, shallowEqual);

  const dispatch = useDispatch();
  const setErrorAction = (status) => dispatch(setError(status));

  const Page = () => {
    return (
      <div className="loaderContainer">
        <Netflix />
        <div className="loader">
          {hasError ? (
            <>
              <h3>Sorry, an error occurred while retrieving data from the server</h3>
              <button
                onClick={() => {
                  navigate('/');
                  setErrorAction(false);
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

// const mapStateToProps = ({ isLoading, hasError }) => {
//   return { isLoading, hasError };
// };
// const mapDispatchToProps = { setError };
// export default connect(mapStateToProps, mapDispatchToProps)(WithLoading);
export default WithLoading;
