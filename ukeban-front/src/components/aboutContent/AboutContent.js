import "./AboutContent.css";
import React, { Component } from "react";
import titleImage from "../../assets/images/pic_title.png";
export default class AboutContent extends Component {
  render() {
    return (
      <div className="about">
        <div className="about-title">{this.props.title}</div>
        <div className="about-main">
          <p
            className="info"
            dangerouslySetInnerHTML={{ __html: this.props.content }}
          ></p>
        </div>
      </div>
    );
  }
}
