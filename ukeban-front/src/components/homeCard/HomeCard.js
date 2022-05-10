import React, { Component } from "react";
import "./HomeCard.css";
import { Card } from "antd";
import keban_small from "../../assets/images/keban_small.png";
export default class HomeCard extends Component {
  handleClick = (e) => {
    window.open(this.props.cardItem[e].card_url, "_self");
  };

  render() {
    return (
      <Card
        bodyStyle={{ padding: "0", backgroundColor: "white" }}
        style={{ border: "1px", borderStyle: "solid", display: "inline-block" }}
        className="cards"
        bordered={false}
        cover={
          <img
            alt="example"
            src="https://web.ukeban.com/static/qunzong.d8123169.png"
          />
        }
      >
        <div className="card-title">
          <p>{this.props.title}</p>
          <p>{this.props.subtitle}</p>
        </div>
        <div className="more" onClick={() => this.handleClick(0)}>
          <p className="more-title">
            {this.props.cardItem[0].card_theme}
          </p>
          <p className="more-content">
            {this.props.cardItem[0].card_subtheme}
          </p>
          <img src={this.props.cardItem[0].card_img} alt=""></img>
        </div>
        <div className="more" onClick={() => this.handleClick(1)}>
          <p className="more-title">
            {this.props.cardItem[1].card_theme}
          </p>
          <p className="more-content">
            {this.props.cardItem[1].card_subtheme}
          </p>
          <img src={this.props.cardItem[1].card_img} alt=""></img>
        </div>
        <div className="more" onClick={() => this.handleClick(2)}>
          <p className="more-title">
            {this.props.cardItem[2].card_theme}
          </p>
          <p className="more-content">
            {this.props.cardItem[2].card_subtheme}
          </p>
          <img src={this.props.cardItem[2].card_img} alt=""></img>
        </div>
        <p className="see-more">查看更多</p>
      </Card>
    );
  }
}
