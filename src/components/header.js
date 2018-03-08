import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../style/App.scss';
import { slide as Menu } from 'react-burger-menu'

class HeaderComp extends Component {
  showSettings (event) {
        event.preventDefault();
        
      }

  render() {
    return (
      <header className="header">
        <div className="title-wrapper">
          <Menu className="header-menu">
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
          </Menu>
          <div>Ebay | AU</div>
        </div>
        <div className="search-wrapper">
          <input placeholder="搜索宝贝" />
        </div>
      </header>      
       
    );
  }
}

export default HeaderComp;
