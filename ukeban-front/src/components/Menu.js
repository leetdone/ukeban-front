import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class Menu extends Component {
  render() {
    return (
    <div>
    <ul>
        <li>
          <NavLink to='/Home'>首页</NavLink>
        </li>
        <li>
          <NavLink to='/Product'>产品介绍</NavLink>
        </li>
        <li>
          <NavLink to='/About'>关于我们</NavLink>
        </li>
        <li>
          <NavLink to='/News'>新闻中心</NavLink>
        </li>
        <li>
          <NavLink to='/Merchant'>商户总览</NavLink>
        </li>
        <li>
          <NavLink to='/Help'>帮助中心</NavLink>
        </li>
    </ul>
    </div>
    )
  }
}
