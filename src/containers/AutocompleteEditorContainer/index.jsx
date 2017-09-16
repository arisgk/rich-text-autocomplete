import { connect } from 'react-redux';
import { mentionSearch } from '../../actions/mentions';
import { hashtagSearch } from '../../actions/hashtags';
import { relationSearch } from '../../actions/relations';
import AutocompleteEditor from '../../components/Home/AutocompleteEditor';
import * as mentions from '../../selectors/mentions';
import * as hashtags from '../../selectors/hashtags';
import * as relations from '../../selectors/relations';

const mapStateToProps = state => ({
  mentionSuggestions: mentions.getSuggestions(state),
  hashtagSuggestions: hashtags.getSuggestions(state),
  relationSuggestions: relations.getSuggestions(state),
});

const mapDispatchToProps = dispatch => ({
  onMentionSearch: value => dispatch(mentionSearch(value)),
  onHashtagSearch: value => dispatch(hashtagSearch(value)),
  onRelationSearch: value => dispatch(relationSearch(value)),
});

const AutocompleteEditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AutocompleteEditor);

export default AutocompleteEditorContainer;
