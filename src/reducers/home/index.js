import { combineReducers } from 'redux';
import entities from './entities';
import ui from './ui';

const reducer = combineReducers({
  entities,
  ui,
});

export default reducer;
