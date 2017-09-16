import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import 'draft-js-mention-plugin/lib/plugin.css';
import createAutocompletePlugin from 'draft-js-mention-plugin';

const mentionPlugin = createAutocompletePlugin({
  mentionPrefix: '@',
  mentionTrigger: '@',
});
const MentionSuggestions = mentionPlugin.MentionSuggestions;

const hashtagPlugin = createAutocompletePlugin({
  mentionPrefix: '#',
  mentionTrigger: '#',
});
const HashtagSuggestions = hashtagPlugin.MentionSuggestions;

const relationPlugin = createAutocompletePlugin({
  mentionPrefix: '<>',
  mentionTrigger: '<>',
});
const RelationSuggestions = relationPlugin.MentionSuggestions;

const plugins = [mentionPlugin, hashtagPlugin, relationPlugin];

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

  onSearchChange(value, name) {
    const { onMentionSearch, onHashtagSearch, onRelationSearch } = this.props;

    switch (name) {
      case 'mention':
        return onMentionSearch(value);
      case 'hashtag':
        return onHashtagSearch(value);
      case 'relation':
        return onRelationSearch(value);
      default:
        return null;
    }
  }

  render() {
    const { mentionSuggestions, hashtagSuggestions, relationSuggestions } = this.props;

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
            onSearchChange={({ value }) => this.onSearchChange(value, 'mention')}
            suggestions={mentionSuggestions}
          />
          <HashtagSuggestions
            onSearchChange={({ value }) => this.onSearchChange(value, 'hashtag')}
            suggestions={hashtagSuggestions}
          />
          <RelationSuggestions
            onSearchChange={({ value }) => this.onSearchChange(value, 'relation')}
            suggestions={relationSuggestions}
          />
        </div>
      </div>
    );
  }
}

export default AutocompleteEditor;
