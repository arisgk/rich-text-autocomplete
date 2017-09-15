import { Modifier, EditorState } from 'draft-js';
import getSearchText from '../utils/getSearchText';
import getTypeByTrigger from '../utils/getTypeByTrigger';

const addOption = (editorState, option, optionPrefix, trigger, entityMutability) => {
  const contentStateWithEntity = editorState.getCurrentContent().createEntity(
    getTypeByTrigger(trigger), entityMutability, { option },
  );
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

  const currentSelectionState = editorState.getSelection();
  const { begin, end } = getSearchText(editorState, currentSelectionState, trigger);

  // get selection of the search text
  const textSelection = currentSelectionState.merge({
    anchorOffset: begin,
    focusOffset: end,
  });

  let replacedContent = Modifier.replaceText(
    editorState.getCurrentContent(),
    textSelection,
    `${optionPrefix}${option.get('name')}`,
    null, // no inline style needed
    entityKey,
  );

  // If the option is inserted at the end, a space is appended right after for
  // a smooth writing experience.
  const blockKey = textSelection.getAnchorKey();
  const blockSize = editorState.getCurrentContent().getBlockForKey(blockKey).getLength();
  if (blockSize === end) {
    replacedContent = Modifier.insertText(
      replacedContent,
      replacedContent.getSelectionAfter(),
      ' ',
    );
  }

  const newEditorState = EditorState.push(
    editorState,
    replacedContent,
    'insert-option',
  );
  return EditorState.forceSelection(newEditorState, replacedContent.getSelectionAfter());
};

export default addOption;
