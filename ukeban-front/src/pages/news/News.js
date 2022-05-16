import React, { Component } from "react";
import NewsCard from "../../components/newsCard/NewsCard";
import axios from "axios";
import "./News.css";
// import { header } from "express/lib/request";

export default class News extends Component {
  constructor() {
    super();
    this.state = {//try setState, and set each items seperately.
      newsNum: [],
    };
  }
  componentDidMount(){
    axios({
      method: 'GET',
      url: "http://127.0.0.1:3005/news"
  }).then(res => {
    // console.log(res)
    this.setState((prevState) => ({
      newsNum: [...res.data]
    }))
  })
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
