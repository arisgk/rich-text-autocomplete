import React from 'react';
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import AutocompleteEditorContainer from '../../containers/AutocompleteEditorContainer';

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 'auto',
    display: 'flex',
    WebkitAlignItems: 'center',
    AlignItems: 'center',
    WebkitJustifyContent: 'center',
    JustifyContent: 'center',
    WebkitFlexDirection: 'column',
    flexDirection: 'column',
    paddingBottom: '10%',
  },
  h1: {
    fontSize: '140%',
    color: 'rgba(0,0,0,0.87)',
    marginBottom: 24,
  },
};

const Home = () => (
  <div style={styles.container}>
    <AppBar title="Autocomplete" />
    <div style={styles.main}>
      <h1 style={styles.h1}>Editor</h1>
      <AutocompleteEditorContainer />
    </div>
  </div>
);

export default Radium(Home);
