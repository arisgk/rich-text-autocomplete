const getTypeByTrigger = (trigger) => {
  switch (trigger) {
    case '@':
      return 'mention';
    case '#':
      return 'hashtag';
    case '<>':
      return 'relation';
    default:
      return null;
  }
};

export default getTypeByTrigger;
