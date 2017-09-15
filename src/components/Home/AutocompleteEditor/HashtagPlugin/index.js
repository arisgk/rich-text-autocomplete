import decorateComponentWithProps from 'decorate-component-with-props';
import { Map } from 'immutable';
import Hashtag from './Hashtag';
import Suggestions from '../Suggestions'; // eslint-disable-line import/no-named-as-default
import SuggestionsPortal from '../Suggestions/SuggestionsPortal';
import defaultRegExp from './defaultRegExp';
import hashtagStrategy from './hashtagStrategy';
import suggestionsStrategy from '../Suggestions/suggestionsStrategy';
import styles from './styles/index.css';
import suggestionsStyles from '../Suggestions/suggestionsStyles.css';
import suggestionsEntryStyles from '../Suggestions/suggestionsEntryStyles.css';
import suggestionsFilter from '../Suggestions/utils/defaultSuggestionsFilter';
import defaultPositionSuggestions from '../Suggestions/utils/positionSuggestions';

export { default as HashtagSuggestions } from '../Suggestions';

export default (config = {}) => {
  const defaultTheme = {
    // CSS class for hashtag text
    hashtag: styles.hashtag,
    // CSS class for suggestions component
    suggestions: suggestionsStyles.suggestions,
    // CSS classes for an entry in the suggestions component
    suggestionsEntry: suggestionsEntryStyles.suggestionsEntry,
    suggestionsEntryFocused: suggestionsEntryStyles.suggestionsEntryFocused,
    suggestionsEntryText: suggestionsEntryStyles.suggestionsEntryText,
    suggestionsEntryAvatar: suggestionsEntryStyles.suggestionsEntryAvatar,
  };

  const callbacks = {
    keyBindingFn: undefined,
    handleKeyCommand: undefined,
    onDownArrow: undefined,
    onUpArrow: undefined,
    onTab: undefined,
    onEscape: undefined,
    handleReturn: undefined,
    onChange: undefined,
  };

  const ariaProps = {
    ariaHasPopup: 'false',
    ariaExpanded: 'false',
    ariaOwneeID: undefined,
    ariaActiveDescendantID: undefined,
  };

  let searches = Map();
  let escapedSearch;
  let clientRectFunctions = Map();
  let isOpened;

  const store = {
    getEditorState: undefined,
    setEditorState: undefined,
    getPortalClientRect: offsetKey => clientRectFunctions.get(offsetKey)(),
    getAllSearches: () => searches,
    isEscaped: offsetKey => escapedSearch === offsetKey,
    escapeSearch: (offsetKey) => {
      escapedSearch = offsetKey;
    },

    resetEscapedSearch: () => {
      escapedSearch = undefined;
    },

    register: (offsetKey) => {
      searches = searches.set(offsetKey, offsetKey);
    },

    updatePortalClientRect: (offsetKey, func) => {
      clientRectFunctions = clientRectFunctions.set(offsetKey, func);
    },

    unregister: (offsetKey) => {
      searches = searches.delete(offsetKey);
      clientRectFunctions = clientRectFunctions.delete(offsetKey);
    },

    getIsOpened: () => isOpened,
    setIsOpened: (nextIsOpened) => { isOpened = nextIsOpened; },
  };

  // Styles are overwritten instead of merged as merging causes a lot of confusion.
  //
  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.
  const {
    prefix = '',
    theme = defaultTheme,
    positionSuggestions = defaultPositionSuggestions,
    component,
    suggestionsComponent = Suggestions,
    entityMutability = 'SEGMENTED',
    trigger = '#',
    regExp = defaultRegExp,
  } = config;
  const searchProps = {
    ariaProps,
    callbacks,
    theme,
    store,
    entityMutability,
    positionSuggestions,
    trigger,
    prefix,
  };
  return {
    Suggestions: decorateComponentWithProps(suggestionsComponent, searchProps),
    decorators: [
      {
        strategy: hashtagStrategy(trigger),
        component: decorateComponentWithProps(Hashtag, { theme, component }),
      },
      {
        strategy: suggestionsStrategy(trigger, regExp),
        component: decorateComponentWithProps(SuggestionsPortal, { store }),
      },
    ],
    getAccessibilityProps: () => (
      {
        role: 'combobox',
        ariaAutoComplete: 'list',
        ariaHasPopup: ariaProps.ariaHasPopup,
        ariaExpanded: ariaProps.ariaExpanded,
        ariaActiveDescendantID: ariaProps.ariaActiveDescendantID,
        ariaOwneeID: ariaProps.ariaOwneeID,
      }
    ),

    initialize: ({ getEditorState, setEditorState }) => {
      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;
    },

    onDownArrow: keyboardEvent => callbacks.onDownArrow && callbacks.onDownArrow(keyboardEvent),
    onTab: keyboardEvent => callbacks.onTab && callbacks.onTab(keyboardEvent),
    onUpArrow: keyboardEvent => callbacks.onUpArrow && callbacks.onUpArrow(keyboardEvent),
    onEscape: keyboardEvent => callbacks.onEscape && callbacks.onEscape(keyboardEvent),
    handleReturn: keyboardEvent => callbacks.handleReturn && callbacks.handleReturn(keyboardEvent),
    onChange: (editorState) => {
      if (callbacks.onChange) return callbacks.onChange(editorState);
      return editorState;
    },
  };
};

export const defaultSuggestionsFilter = suggestionsFilter;
