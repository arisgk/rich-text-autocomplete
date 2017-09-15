import React from 'react';

const Avatar = ({ entity, theme = {} }) => {
  if (entity.has('avatar')) {
    return (
      <img
        src={entity.get('avatar')}
        className={theme.suggestionsEntryAvatar}
        role="presentation"
      />
    );
  }

  return null;
};

export default Avatar;
