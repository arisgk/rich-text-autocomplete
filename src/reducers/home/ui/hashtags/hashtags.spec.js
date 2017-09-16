/* global describe, it, expect */
import deepFreeze from 'deep-freeze';
import * as types from '../../../../actions/hashtags/types';
import reducer from './hashtags';

describe('Home', () => {
  describe('UI Reducer', () => {
    describe('Hashtags', () => {
      it('Returns the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
          search: '',
        });
      });

      it('Updates hashtag search value', () => {
        const state = {
          search: 'ta',
        };

        deepFreeze(state);

        const action = {
          type: types.HASHTAG_SEARCH,
          value: 'tag',
        };

        const expected = {
          search: 'tag',
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });
  });
});
