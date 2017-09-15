import React from 'react';

const styles = {
  container: {
    color: '#E91E63',
  },
};

const HashtagSpan = ({ offsetKey, children }) => (
  <span
    style={styles.container}
    data-offset-key={offsetKey}
  >
    {children}
  </span>
);

export default HashtagSpan;
