import getWordAt from './getWordAt';

const getSearchText = (editorState, selection, trigger) => {
  const anchorKey = selection.getAnchorKey();
  const anchorOffset = selection.getAnchorOffset() - trigger.length;
  const currentContent = editorState.getCurrentContent();
  const currentBlock = currentContent.getBlockForKey(anchorKey);
  const blockText = currentBlock.getText();
  return getWordAt(blockText, anchorOffset);
};

export default getSearchText;
