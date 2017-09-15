import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import reducers from '../reducers';

const configureStore = (history, preloadedState) => {
  const store = createStore(
    reducers,
    preloadedState,
    compose(
      applyMiddleware(routerMiddleware(history)),
    ),
  );

  return store;
};

export default configureStore;
