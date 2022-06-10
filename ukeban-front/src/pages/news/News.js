import React, { Component } from "react";
import NewsCard from "../../components/newsCard/NewsCard";
import axios from "axios";
import "./News.css";
import { Spin } from "antd";

// import global from '../../globalVar.js';
export default class News extends Component {
  constructor() {
    super();
    this.state = {//try setState, and set each items seperately.
      newsNum: [],
      isLoading: true,
      isTimeout: false,
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

    axios.interceptors.request.use(function(config){
      // this.setState((prevState) => ({
      //   isLoading: true
      // }))
      console.log('aaaaa')
      return config
    }, function(error){
      console.log(error)
      return Promise.reject(error)
    })

    axios.interceptors.response.use(function(response){
      // this.setState((prevState) => ({
      //   isLoading: false
      // }))
      // response.isLoading = 
      return response
    }, function(error){
      console.log(error)
      return Promise.reject(error)
    })

      axios({
        method: 'GET',
        url: "/news",
        timeout: 1000 
    }).then(res => {
      this.setState((prevState) => ({
        newsNum: [...res.data],
        isLoading: false
      }))
    }).catch(error => {
      if (error.code === 'ECONNABORTED')
        console.log('timeout');
        
        this.setState(() => ({
          isTimeout:true
        }))
        return (<div>timeout!!</div>)
      })
  }

  render() {
    return (
      <div>
        {this.state.isTimeout && <button onClick={() => window.location.reload()}>Refresh Page</button>}
        {!this.state.isTimeout &&
          <Spin size="large" spinning={this.state.isLoading}>
          <div className="news">
            {this.state.newsNum.map(item => (
              <NewsCard item={item}></NewsCard>
            ))}
          </div>
        </Spin>
        }   
      </div>
    );
  }
}
