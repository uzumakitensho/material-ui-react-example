import React, { Component } from 'react';
import PersistentDrawerLeft from './PersistentDrawerLeft';

const styles = {
  root: {
      padding: 24,
  }
};

class App extends Component {
  render() {
    return (
      <div style={styles.root}>
        <PersistentDrawerLeft></PersistentDrawerLeft>
      </div>
    );
  }
}

export default App;
