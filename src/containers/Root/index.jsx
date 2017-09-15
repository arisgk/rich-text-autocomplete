/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routes from '../../components/Routes';
import './styles/index.css';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <MuiThemeProvider>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Root;
