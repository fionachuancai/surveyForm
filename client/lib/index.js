import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return React.createElement(
      'h1',
      null,
      'Hello Wrold!!'
    );
  }
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));