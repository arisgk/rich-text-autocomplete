/* global describe, it, expect */
import deepFreeze from 'deep-freeze';
import * as types from '../../../../actions/mentions/types';
import reducer from './mentions';

describe('Home', () => {
  describe('UI Reducer', () => {
    describe('Mentions', () => {
      it('Returns the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
          search: '',
        });
      });

      it('Updates mention search value', () => {
        const state = {
          search: 'Joh',
        };

        deepFreeze(state);

        const action = {
          type: types.MENTION_SEARCH,
          value: 'John',
        };

        const expected = {
          search: 'John',
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });
  });
});
