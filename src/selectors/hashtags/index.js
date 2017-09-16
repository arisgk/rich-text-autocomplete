import { createSelector } from 'reselect';
import { defaultSuggestionsFilter } from 'draft-js-mention-plugin';

const getEntities = state => state.home.entities.hashtags;
const getSearch = state => state.home.ui.hashtags.search;

export const getSuggestions = createSelector(
  [getEntities, getSearch],
  (entities, search) => defaultSuggestionsFilter(search, entities),
);
