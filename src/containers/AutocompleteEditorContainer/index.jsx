import { connect } from 'react-redux';
import { mentionSearch } from '../../actions/mentions';
import AutocompleteEditor from '../../components/Home/AutocompleteEditor';
import * as mentions from '../../selectors/mentions';

const mapStateToProps = state => ({
  mentionSuggestions: mentions.getSuggestions(state),
});

const mapDispatchToProps = dispatch => ({
  onMentionSearch: value => dispatch(mentionSearch(value)),
});

const AutocompleteEditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AutocompleteEditor);

export default AutocompleteEditorContainer;
