import React from 'react';

const Avatar = ({ entry, theme = {} }) => {
  if (entry.has('avatar')) {
    return (
      <img
        src={entry.get('avatar')}
        className={theme.suggestionsEntryAvatar}
        role="presentation"
      />
    );
  }

  return null;
};

export default Avatar;
