import React, { Component } from 'react';
import { CompositeDecorator, EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import 'draft-js-mention-plugin/lib/plugin.css';
import createMentionPlugin from 'draft-js-mention-plugin';
import createHashtagPlugin from './HashtagPlugin';

const mentionPlugin = createMentionPlugin();
const { MentionSuggestions } = mentionPlugin;

const hashtagPlugin = createHashtagPlugin();
const { Suggestions } = hashtagPlugin;

const plugins = [mentionPlugin, hashtagPlugin];

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

    this.state = {
      editorState: EditorState.createEmpty(),
    };

    this.focus = () => this.refs.editor.focus();
    this.onChange = editorState => this.setState({ editorState });
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange({ value }) {
    const { onMentionSearch } = this.props;
    onMentionSearch(value);
  }

  render() {
    const { mentionSuggestions } = this.props;

    return (
      <div style={styles.root}>
        <div style={styles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            ref="editor"
            plugins={plugins}
            spellCheck
          />
          <MentionSuggestions
            onSearchChange={this.onSearchChange}
            suggestions={mentionSuggestions}
          />
          <Suggestions
            onSearchChange={this.onSearchChange}
            suggestions={mentionSuggestions}
          />
        </div>
      </div>
    );
  }
}

export default AutocompleteEditor;
