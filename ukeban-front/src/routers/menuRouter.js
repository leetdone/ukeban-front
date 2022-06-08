import { Menu } from "antd";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { HashRouter } from "react-router-dom/cjs/react-router-dom.min";
export default class RouterIndex extends Component {
  render() {
    return <HashRouter>{this.props.children}</HashRouter>;
  }
}

// RouterIndex.prototype = {
//   children: PropTypes.element.isRequired,
// };
