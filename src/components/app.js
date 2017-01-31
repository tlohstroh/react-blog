import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* make sure app renders its children given to it in routes
          and let it know where! */}
        {this.props.children}
      </div>
    );
  }
}
