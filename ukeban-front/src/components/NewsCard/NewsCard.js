import "./NewsCard.css";
import React, { Component } from "react";


export default class NewsCard extends Component {
  constructor(){
    super();
    // this.state = {
    //   image: require("../../assets/images/keban_small.png")
    // }
  }
  // componentDidMount(){
  //   this.setState()({
  //     image: require(this.props.item.image)
  //   })
  // }

  render() {
    return (
      <div className="NewsCard">
        <img className="NewsImage" src={this.props.item.img} alt=""></img>
        <p className="NewsTitle">{this.props.item.title}</p>
        <p className="NewsContent">{this.props.item.content}</p>
        <p className="NewsTime">{this.props.item.time}</p>
      </div>
    );
  }
}
