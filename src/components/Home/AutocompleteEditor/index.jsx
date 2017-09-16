import React, { Component } from 'react';
import { CompositeDecorator, Editor, EditorState } from 'draft-js';
import HandleAutocomplete from './HandleAutocomplete';
import HashtagSpan from './HashtagSpan';
import handleStrategy from '../../../utils/decoratorStrategies/handle';
import hashtagStrategy from '../../../utils/decoratorStrategies/hashtag';

const styles = {
  root: {
    padding: 20,
    width: 600,
  },
  editor: {
    border: '1px solid #ddd',
    cursor: 'text',
    fontSize: 16,
    minHeight: 40,
    padding: 10,
  },
};

class AutocompleteEditor extends Component {
  constructor() {
    super();
    const compositeDecorator = new CompositeDecorator([
      {
        strategy: handleStrategy,
        component: HandleAutocomplete,
      },
      {
        strategy: hashtagStrategy,
        component: HashtagSpan,
      },
    ]);

    this.state = {
      editorState: EditorState.createEmpty(compositeDecorator),
    };

    this.focus = () => this.refs.editor.focus();
    this.onChange = editorState => this.setState({ editorState });
  }

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            ref="editor"
            spellCheck
          />
        </div>
      </div>
    );
  }
}

export default AutocompleteEditor;
