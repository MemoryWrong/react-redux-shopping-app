import React, { Component } from 'react';
import logo from './assets/logo.svg';
import HeaderComp from "./components/header";
import SliderComp from './components/sliderComp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComp></HeaderComp>
        <SliderComp/>
      </div>
    );
  }
}

export default App;