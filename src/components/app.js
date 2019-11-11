import React from 'react';
import { Component } from 'react';

import Header from './layout/header/header';
import Footer from './layout/footer/footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
