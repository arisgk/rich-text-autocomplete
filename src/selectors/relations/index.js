import { createSelector } from 'reselect';
import { defaultSuggestionsFilter } from 'draft-js-mention-plugin';

const getEntities = state => state.home.entities.relations;
const getSearch = state => state.home.ui.relations.search;

export const getSuggestions = createSelector(
  [getEntities, getSearch],
  (entities, search) => defaultSuggestionsFilter(search, entities),
);
