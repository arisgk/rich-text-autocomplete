/* global describe, it, expect */
import * as actions from './relations';
import * as types from './types';

describe('Actions', () => {
  describe('Relations', () => {
    it('Creates an action to search for relations', () => {
      const value = 'AR';

      const expected = {
        type: types.RELATION_SEARCH,
        value,
      };

      expect(actions.relationSearch(value)).toEqual(expected);
    });
  });
});
