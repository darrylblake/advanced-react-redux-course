import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        {children}
      </div>
    );
  }
}
