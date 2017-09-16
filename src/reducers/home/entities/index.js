import { combineReducers } from 'redux';
import mentions from './mentions';
import hashtags from './hashtags';
import relations from './relations';

const reducer = combineReducers({
  mentions,
  hashtags,
  relations,
});

export default reducer;
