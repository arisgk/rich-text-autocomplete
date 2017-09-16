import React, { Component } from 'react';
import HandleSpan from './HandleSpan';
import SuggestionsPopover from './SuggestionsPopover';

const styles = {
  container: {
    position: 'relative',
  },
};

class HandleAutocomplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  componentDidMount() {
    this.setState(prevState => ({
      ...prevState,
      open: true,
    }));
  }

  handleRequestClose() {
    this.setState(prevState => ({
      ...prevState,
      open: false,
    }));
  }

  render() {
    const { offsetKey, children } = this.props;
    console.log(this.props);

    return (
      <div
        data-offset-key={offsetKey}
        style={styles.container}
        ref={(rootDiv) => { this.rootDiv = rootDiv; }}
      >
        <HandleSpan>{children}</HandleSpan>
        <SuggestionsPopover
          open={this.state.open}
          anchorEl={this.rootDiv}
          handleRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

export default HandleAutocomplete;
