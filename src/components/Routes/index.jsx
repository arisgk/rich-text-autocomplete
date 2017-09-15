import React from 'react';
import { Route } from 'react-router';
import Home from '../Home';

const Routes = () => (
  <Route exact path="/" component={Home} />
);

export default Routes;
