import * as types from './types';

export const mentionSearch = value => ({
  type: types.MENTION_SEARCH,
  value,
});
