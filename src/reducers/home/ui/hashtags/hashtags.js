import * as types from '../../../../actions/hashtags/types';

const initialState = {
  search: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.HASHTAG_SEARCH:
      return { ...state, search: action.value };
    default:
      return state;
  }
}
