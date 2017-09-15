import getTypeByTrigger from '../Suggestions/utils/getTypeByTrigger';

const findEntities = trigger => (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (entityKey !== null
      && contentState.getEntity(entityKey).getType() === getTypeByTrigger(trigger));
  }, callback);
};

export default findEntities;
