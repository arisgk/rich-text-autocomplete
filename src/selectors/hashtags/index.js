import { createSelector } from 'reselect';
import prefixFilter from '../../utils/suggestions/prefixFilter';

const getEntities = state => state.home.entities.hashtags;
const getSearch = state => state.home.ui.hashtags.search;

export const getSuggestions = createSelector(
  [getEntities, getSearch],
  (entities, search) => prefixFilter(search, entities, 7),
);
