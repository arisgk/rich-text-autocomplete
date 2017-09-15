import { combineReducers } from 'redux';
import mentions from './mentions';

const reducer = combineReducers({
  mentions,
});

export default reducer;
