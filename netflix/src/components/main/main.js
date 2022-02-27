import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Header } from '../header/header';
import { TabsPanel } from '../main/tabs/tabs-panel';
import { Footer } from '../footer/footer';
import { LoginPage } from '../login/login';
import AboutMovie from '../header/about-movie/about-movie';
import WithLoading from '../loader/loader';

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../../redux/actions';
// import { setLoading, getMoviesList } from '../../redux/actions';
import { moviesThunkActions } from '../../redux/thunks';
import { useDispatch } from 'react-redux';

const MainComponent = () => {
  const dispatch = useDispatch();
  const getMoviesListAction = () => dispatch(moviesThunkActions.getMoviesListThunk());

  useEffect(() => {
    getMoviesListAction();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <WithLoading>
            <Header />
            <TabsPanel />
            <Footer />
          </WithLoading>
        }
      />
      <Route
        path="/aboutmovie/:id"
        exact
        element={
          <WithLoading>
            <AboutMovie />
            <TabsPanel />
            <Footer />
          </WithLoading>
        }
      />
      <Route
        path="/login"
        exact
        element={
          <WithLoading>
            <LoginPage />
          </WithLoading>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

// #1
// const mapStateToProps = (state) => {
//   return {
//     moviesList: state.moviesList,
//     isLoading: state.isLoading,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
// };

// #2
// const mapStateToProps = ({ moviesList, isLoading, hasError }) => {
//   return { moviesList, isLoading, hasError };
// };
// const mapDispatchToProps = { setLoading, getMoviesList };

// export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
// export default connect(mapStateToProps, actions)(MainComponent);
export default MainComponent;
