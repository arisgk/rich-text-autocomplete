import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createAutocompletePlugin from 'draft-js-mention-plugin';
import * as schemas from '../../../schemas/propTypes';
import './styles/editor.css';
import './styles/autocomplete.css';

const mentionPlugin = createAutocompletePlugin({
  mentionPrefix: '@',
  mentionTrigger: '@',
  entityMutability: 'IMMUTABLE',
});
const MentionSuggestions = mentionPlugin.MentionSuggestions;

const hashtagPlugin = createAutocompletePlugin({
  mentionPrefix: '#',
  mentionTrigger: '#',
  entityMutability: 'IMMUTABLE',
});
const HashtagSuggestions = hashtagPlugin.MentionSuggestions;

const relationPlugin = createAutocompletePlugin({
  mentionPrefix: '<>',
  mentionTrigger: '<>',
  entityMutability: 'IMMUTABLE',
});
const RelationSuggestions = relationPlugin.MentionSuggestions;

const plugins = [mentionPlugin, hashtagPlugin, relationPlugin];

const styles = {
  root: {
    width: '96%',
    maxWidth: 800,
  },
  editor: {
    border: '1px solid #ddd',
    cursor: 'text',
    fontSize: 16,
    minHeight: 120,
    padding: 10,
  },
};

class AutocompleteEditor extends Component {
  constructor() {
    super();

    this.state = {
      editorState: EditorState.createEmpty(),
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.handleEditorClick = this.handleEditorClick.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
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

  handleEditorClick() {
    this.editor.focus();
  }

  handleEditorChange(editorState) {
    this.setState({ editorState });
  }

  render() {
    const { mentionSuggestions, hashtagSuggestions, relationSuggestions } = this.props;

    return (
      <div style={styles.root}>
        <div style={styles.editor} onClick={this.handleEditorClick}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.handleEditorChange}
            ref={(editor) => { this.editor = editor; }}
            plugins={plugins}
            placeholder="You can add @persons, #hashtags or <>relations"
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

AutocompleteEditor.propTypes = {
  mentionSuggestions: schemas.mentionSuggestions,
  hashtagSuggestions: schemas.hashtagSuggestions,
  relationSuggestions: schemas.relationSuggestions,
  onMentionSearch: PropTypes.func,
  onHashtagSearch: PropTypes.func,
  onRelationSearch: PropTypes.func,
};

AutocompleteEditor.defaultProps = {
  mentionSuggestions: [],
  hashtagSuggestions: [],
  relationSuggestions: [],
  onMentionSearch: () => {},
  onHashtagSearch: () => {},
  onRelationSearch: () => {},
};

export default AutocompleteEditor;
