import React, { Component } from "react";
import NewsCard from "../../components/newsCard/NewsCard";
import axios from "axios";
import "./News.css";

// import global from '../../globalVar.js';
export default class News extends Component {
  constructor() {
    super();
    this.state = {//try setState, and set each items seperately.
      newsNum: [],
    };
  }

  componentDidMount(){
    //mode is in .env file
    window.modet = "development";
    switch(process.env.REACT_APP_mode){
      case "development":
        axios.defaults.baseURL = 'http://127.0.0.1:3005';
        break;
      case 'test':
        axios.defaults.baseURL = 'http://127.0.0.1:3006';
        break;
      case 'production':
        axios.defaults.baseURL = 'http://127.0.0.1:3007';
        break;
      default:
        axios.defaults.baseURL = 'http://127.0.0.1:305';
        console.log(process.env.REACT_APP_mode)
    }
    // axios.defaults.baseURL = 'http://127.0.0.1:3005'
      axios({
        method: 'GET',
        url: "/news"
    }).then(res => {
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
