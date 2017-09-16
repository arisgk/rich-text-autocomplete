const size = list => (list.constructor.name === 'List'
  ? list.size
  : list.length);

const get = (obj, attr) => (obj.get
  ? obj.get(attr)
  : obj[attr]);

const filter = (searchValue, suggestions, maxResults) => {
  const value = searchValue.toLowerCase();
  const filteredSuggestions = suggestions.filter(suggestion => (
    !value || get(suggestion, 'name').toLowerCase().startsWith(value)
  ));
  const length = size(filteredSuggestions) < maxResults ? size(filteredSuggestions) : maxResults;
  return filteredSuggestions.slice(0, length);
};

export default filter;
