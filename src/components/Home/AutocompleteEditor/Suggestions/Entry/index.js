import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Entry extends Component {
  static propTypes = {
    entryComponent: PropTypes.any.isRequired,
    searchValue: PropTypes.string,
    onOptionSelect: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.mouseDown = false;
  }

  componentDidUpdate() {
    this.mouseDown = false;
  }

  onMouseUp = () => {
    if (this.mouseDown) {
      this.props.onOptionSelect(this.props.option);
      this.mouseDown = false;
    }
  };

  onMouseDown = (event) => {
    // Note: important to avoid a content edit change
    event.preventDefault();

    this.mouseDown = true;
  };

  onMouseEnter = () => {
    this.props.onOptionFocus(this.props.index);
  };

  render() {
    const { theme = {}, searchValue } = this.props;
    const className = this.props.isFocused ? theme.suggestionsEntryFocused : theme.suggestionsEntry;
    const EntryComponent = this.props.entryComponent;
    return (
      <EntryComponent
        className={className}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseEnter={this.onMouseEnter}
        role="option"
        theme={theme}
        entry={this.props.option}
        searchValue={searchValue}
      />
    );
  }
}
