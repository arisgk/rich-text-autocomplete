import React from 'react';

const styles = {
  container: {
    color: '#03A9F4',
    direction: 'ltr',
    unicodeBidi: 'bidi-override',
  },
};

const HandleSpan = ({ children }) => (
  <span style={styles.container}>
    {children}
  </span>
);

export default HandleSpan;
