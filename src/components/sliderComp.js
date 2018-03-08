import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../style/App.scss';
import { slide as Menu } from 'react-burger-menu'
import Slider from "react-slick";

class SliderComp extends Component {
  showSettings (event) {
        event.preventDefault();
        
      }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider className="slider-wrapper" {...settings}>
        <div className="slider-element"><h3>slider 1</h3></div>
        <div className="slider-element"><h3>slider 2</h3></div>
        {/* <div><h3>3</h3></div> */}
        {/* <div><h3>4</h3></div> */}
        {/* <div><h3>5</h3></div> */}
        {/* <div><h3>6</h3></div> */}
      </Slider>
    );
  }
}

export default SliderComp;
