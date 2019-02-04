import React, { Component } from 'react';
import ResponsiveDrawer from './ResponsiveDrawer';

const styles = {
  root: {
      padding: 24,
  }
};

class App extends Component {
  render() {
    return (
      <div style={styles.root}>
        <ResponsiveDrawer></ResponsiveDrawer>
      </div>
    );
  }
}

export default App;
