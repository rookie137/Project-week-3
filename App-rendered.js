import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c='Viki'
  render() {
    return (
      <div>
        This is my first class based component {this.c}
      </div>
    )
  }
}
