import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import home from './home';

const reducer = combineReducers({
  routing,
  home,
});

export default reducer;
