import React, { Component } from "react";
import FooterMenu from "../../components/footerMenu/FooterMenu";
import "./Footer.css";
import ContactMenu from "../../components/footerMenu/ContactMenu";
import HotLine from "../../components/footerMenu/HotLine";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-main">
          <div className="footer-img">
            <div className="footer-qr-box">
              <img
                className="qr-image"
                src={require("../../assets/images/gongzhonghao.png")}
                alt=""
              />
              <p className="qr-content">扫码关注可伴云福利公众号</p>
            </div>
            <div className="footer-qr-box">
              <img
                className="qr-image"
                src={require("../../assets/images/xiaochenxu.png")}
                alt=""
              />
              <p className="qr-content">扫码添加可伴云福利小程序</p>
            </div>
          </div>

          <div className="footer-box">
            <FooterMenu />
            <ContactMenu />
          </div>
          <HotLine className="hot-line"/>
        </div>
      </div>
    );
  }
}
