import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
  render() {
    const location = this.props.location.pathname;
    return (
      <div>
        <Header location = { location } />
        {this.props.children}
      </div>
    );
  }
}
