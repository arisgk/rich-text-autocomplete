import React from 'react';
import Avatar from './Avatar';

const defaultEntryComponent = (props) => {
  const {
    entry,
    theme,
    searchValue, // eslint-disable-line no-unused-vars
    ...parentProps
  } = props;

  return (
    <div {...parentProps}>
      <Avatar entry={entry} theme={theme} />
      <span className={theme.suggestionsEntryText}>{entry.get('name')}</span>
    </div>
  );
};

export default defaultEntryComponent;
