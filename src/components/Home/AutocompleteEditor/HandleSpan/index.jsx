import React from 'react';

const styles = {
  container: {
    color: '#03A9F4',
    direction: 'ltr',
    unicodeBidi: 'bidi-override',
  },
};

const HandleSpan = ({ offsetKey, children }) => (
  <span
    style={styles.container}
    data-offset-key={offsetKey}
  >
    {children}
  </span>
);

export default HandleSpan;
