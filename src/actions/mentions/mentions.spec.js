/* global describe, it, expect */
import * as actions from './mentions';
import * as types from './types';

describe('Actions', () => {
  describe('Mentions', () => {
    it('Creates an action to search for persons', () => {
      const value = 'John';

      const expected = {
        type: types.MENTION_SEARCH,
        value,
      };

      expect(actions.mentionSearch(value)).toEqual(expected);
    });
  });
});
