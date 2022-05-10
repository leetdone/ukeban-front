import React, { Component } from "react";

export default class HotLine extends Component {
  render() {
    return (
      <div className="hot-line">
        <p className="menu-title">客服热线</p>
        <p className="phone-number">400-1875151</p>
        <ul>
          <li style={{ margin: "32px 10px 4px 0" }}>
            武汉市武昌区中北路86号汉街·总部国际D座501室
          </li>
          <li>武汉市江汉区泛海国际SOHO城5栋2206</li>
          <li style={{ marginTop: "15px" }}>挑福利 上可伴</li>
        </ul>
      </div>
    );
  }
}
