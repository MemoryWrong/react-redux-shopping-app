import React, { Component } from 'react';
import logo from './assets/logo.svg';
import HeaderComp from "./components/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComp></HeaderComp>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
