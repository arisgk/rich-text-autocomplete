import React, { Component } from 'react';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class SuggestionsPopover extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { open, anchorEl, handleRequestClose } = this.props;

    return (
      <Popover
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
        onRequestClose={handleRequestClose}
      >
        <Menu>
          <MenuItem primaryText="Aris" />
          <MenuItem primaryText="Dimos" />
          <MenuItem primaryText="Pantelis" />
          <MenuItem primaryText="Alex" />
        </Menu>
      </Popover>
    );
  }
}

export default SuggestionsPopover;
