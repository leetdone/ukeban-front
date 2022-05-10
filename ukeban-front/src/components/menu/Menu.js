import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class Menu extends Component {
  activeStyle = (isActive) => ({
    color: isActive ? "red" : "black",
  });

  render() {
    return (
      <div>
        <ul className="menuList">
          <li>
            <NavLink style={this.activeStyle} to="/Home">
              首页
            </NavLink>
          </li>
          <li>
            <NavLink style={this.activeStyle} to="/Product">
              产品介绍
            </NavLink>
          </li>
          <li>
            <NavLink style={this.activeStyle} to="/About">
              关于我们
            </NavLink>
          </li>
          <li>
            <NavLink style={this.activeStyle} to="/News">
              新闻中心
            </NavLink>
          </li>
          <li>
            <NavLink style={this.activeStyle} to="/Merchant">
              商户总览
            </NavLink>
          </li>
          <li>
            <NavLink style={this.activeStyle} to="/Help">
              帮助中心
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
