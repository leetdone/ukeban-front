import React, { Component } from "react";
import NewsCard from "../../components/newsCard/NewsCard";
import axios from "axios";
import "./News.css";
import { Spin } from "antd";
import InfiniteScroll from 'react-infinite-scroll-component';
import { render } from "react-dom";
import { getNews } from "../../service/requestNews";
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      newsPage: [],//all the news in one page
      isLoading: true,//init the component with a loading page
      isTimeout: false,
      items: [], //news items displayed
      offset: 0,//offset in one page
      hasMore: true,//more news to show?
      page: 0
    };
  }

  componentDidMount(){

      getNews(this.state.page).then(res => {
      this.setState((prevState) => ({
        newsPage: [...res.data],//all the news in one page
        items: [...res.data.slice(0,10)],//init page with 10 pieces of news
        isLoading: false//load successfully, close the loading page
      }))
    }).catch(error => {
      if (error.code === 'ECONNABORTED')//catch timeout error        
        this.setState(() => ({
          isTimeout:true
        }))
        return (<div>timeout!!</div>)
      })
  }


  fetchMoreData = () => {
    //show at most 25 pieces of news
    if (this.state.items.length >= 25) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState((prevState) => ({
        offset: this.state.offset + 1,
        //show 10 more news items
        items: [...this.state.items, ...this.state.newsPage.slice(this.state.offset, this.state.offset + 10)],
      }))
    }, 500);
  };

  //request next page from database
  async getNextPage(){
    await this.setState({
      page: this.state.page + 1
    })
    console.log(this.state.page)
    await getNews(this.state.page).then(res => {
    this.setState((prevState) => ({
      items: [...res.data],//init page with 10 pieces of news
      isLoading: false
    }))
  })
  }

  async getPreviousPage(){
    if(this.state.page >= 0){
      await this.setState({
        page: this.state.page - 1
      })
      console.log(this.state.page)
      await getNews(this.state.page).then(res => {
        this.setState((prevState) => ({
          items: [...res.data],//init page with 10 pieces of news
          isLoading: false
        }))
      })
    }
  }


  render() {
    return (
      <div>
        {/* require request again when timeout */}
        {this.state.isTimeout && <button onClick={() => window.location.reload()}>Refresh Page</button>}
        {!this.state.isTimeout &&
          <Spin size="large" spinning={this.state.isLoading}>
          {/* show a loading page */}
          
          <div id="scrollableDiv" style={{height:600, overflow: "auto" }}>
            <InfiniteScroll
              dataLength={this.state.items.length}
              next={this.fetchMoreData}
              hasMore={this.state.hasMore}
              loader={<h4>Loading...</h4>}
              scrollableTarget="scrollableDiv"
              endMessage={
                <div>
                <button onClick={() => {this.getPreviousPage()}}>previous Page</button>
                <button onClick={() => {this.getNextPage()}}>next Page</button>
                </div>
              }
            >
                <div className="news">
                  {this.state.items.map(item => (
                    <NewsCard item={item}></NewsCard>
                  ))}
                </div>
            </InfiniteScroll>

          </div>
        </Spin>
        }   
      </div>
    );
  }
}
