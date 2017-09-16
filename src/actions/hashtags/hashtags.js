import * as types from './types';

export const hashtagSearch = value => ({
  type: types.HASHTAG_SEARCH,
  value,
});
