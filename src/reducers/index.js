import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

const reducer = combineReducers({
  routing,
});

export default reducer;
