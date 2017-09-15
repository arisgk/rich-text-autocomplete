import * as types from '../../../../actions/mentions/types';

const initialState = {
  search: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.MENTION_SEARCH:
      return { ...state, search: action.value };
    default:
      return state;
  }
}
