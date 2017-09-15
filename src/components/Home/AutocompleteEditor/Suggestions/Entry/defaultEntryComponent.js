import React from 'react';
import Avatar from './Avatar';

const defaultEntryComponent = (props) => {
  const {
    entity,
    theme,
    searchValue, // eslint-disable-line no-unused-vars
    ...parentProps
  } = props;

  return (
    <div {...parentProps}>
      <Avatar entity={entity} theme={theme} />
      <span className={theme.suggestionsEntryText}>{entity.get('name')}</span>
    </div>
  );
};

export default defaultEntryComponent;
