/* global describe, it, expect */
import * as actions from './hashtags';
import * as types from './types';

describe('Actions', () => {
  describe('Hashtags', () => {
    it('Creates an action to search for hashtags', () => {
      const value = 'tag';

      const expected = {
        type: types.HASHTAG_SEARCH,
        value,
      };

      expect(actions.hashtagSearch(value)).toEqual(expected);
    });
  });
});
