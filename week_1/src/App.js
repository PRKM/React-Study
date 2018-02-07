import React, { Component } from 'react';

import MarkContainer from './mark-container/MarkContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.containerStyle = {textAlign: 'center'};
  }

  render() {
    return (
      <div>
        <div style={this.containerStyle}>
          <h1>React Study - 1st Week</h1>
          <h2>Markdown Editor</h2>
        </div>
        <div style={this.containerStyle}>
          <MarkContainer/>
        </div>
      </div>
    );
  }
}

export default App;
