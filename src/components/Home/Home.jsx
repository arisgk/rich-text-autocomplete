import React from 'react';
import AppBar from 'material-ui/AppBar';

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 'auto',
    display: 'flex',
  },
};

const Home = () => (
  <div style={styles.container}>
    <AppBar title="Autocomplete" />
    <div style={styles.main}>
      Hello world!
    </div>
  </div>
);

export default Home;
