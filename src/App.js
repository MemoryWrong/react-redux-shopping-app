import React, { Component } from 'react';
import logo from './assets/logo.svg';
import HeaderComp from "./components/header";
import SliderComp from './components/sliderComp';
import ListComp from './components/listComp';
import {getItems} from "./service/commonService";

class App extends Component {
  constructor(props){
    super(props);
    getItems();
  }

  render() {
    return (
      <div className="App">
        <HeaderComp></HeaderComp>
        <SliderComp/>
        <ListComp />
      </div>
    );
  }
}

export default App;