import PropTypes from 'prop-types';

export const mentionSuggestions = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  title: PropTypes.string,
  avatar: PropTypes.string,
}));

export const hashtagSuggestions = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
}));

export const relationSuggestions = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
}));
