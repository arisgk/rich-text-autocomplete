import relations from '../../../../data/relations';

const initialState = relations;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
