/* global describe, it, expect */
import deepFreeze from 'deep-freeze';
import * as types from '../../../../actions/relations/types';
import reducer from './relations';

describe('Home', () => {
  describe('UI Reducer', () => {
    describe('Relations', () => {
      it('Returns the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
          search: '',
        });
      });

      it('Updates relation search value', () => {
        const state = {
          search: 'A',
        };

        deepFreeze(state);

        const action = {
          type: types.RELATION_SEARCH,
          value: 'AR',
        };

        const expected = {
          search: 'AR',
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });
  });
});
