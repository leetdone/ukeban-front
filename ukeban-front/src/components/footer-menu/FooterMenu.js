import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min'
import './FooterMenu.css'
export default class FooterMenu extends Component {

  activeStyle = {
    color: "black",
    }

  render() {
    return (
    <div className='footerMenu menuLocation1'>
      <p className='menuTitle'>可伴</p>
      <HashRouter>
      <ul className='menuContent'>
        <li>
          <NavLink     
          style={this.activeStyle}
          to='/Product'>产品介绍</NavLink>
        </li>
        <li>
          <NavLink style={this.activeStyle} to='/About'>关于我们</NavLink>
        </li>
        <li>
          <NavLink style={this.activeStyle} to='/News'>新闻中心</NavLink>
        </li>
        <li>
          <NavLink style={this.activeStyle} to='/Merchant'>商户总览</NavLink>
        </li>
      </ul>
      </HashRouter>
    </div>
    )
  }
}
