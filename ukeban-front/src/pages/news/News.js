import React, { Component } from "react";
import NewsCard from "../../components/newsCard/NewsCard";
import "./News.css";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      newsNum: [
        {
          img: require("../../assets/images/keban_small.png"),
          title: "可伴公司简介",
          content: "致力于成为企业最值得信赖的福利平台",
          time: "2021/9/8    12:02",
        },
        {
          img: require("../../assets/images/keban_small.png"),
          title: "新起点，新征程，可伴云福利新平台《操作手册》",
          content: "挑福利·上可伴",
          time: "2021/9/8    12:02",
        },
        {
          img: require("../../assets/images/keban_small.png"),
          title: "喜讯！可伴入选2021年度武汉市线上经济重点企业",
          content: "再接再厉，未来可期",
          time: "2021/9/8    12:02",
        },
      ],
    };
  }
  render() {
    return (
      <div className="news">
        {this.state.newsNum.map(item => (
          <NewsCard item={item}></NewsCard>
        ))}
      </div>
    );
  }
}
