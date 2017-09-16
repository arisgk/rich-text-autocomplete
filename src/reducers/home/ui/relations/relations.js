import * as types from '../../../../actions/relations/types';

const initialState = {
  search: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.RELATION_SEARCH:
      return { ...state, search: action.value };
    default:
      return state;
  }
}
