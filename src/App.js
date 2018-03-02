// bring in React and Component from React

import React, { Component } from 'react';

// define our Hello component
class Hello extends Component {
  // what should the component render?
  render() {

    // make sure to return some UI
    return (
      <div>
        <h1>Hello World!</h1>
        <p>I Will Learn React no matter what!</p>
        <h3>first its time for Tea</h3>
      </div>
    )
  }
}

export default Hello