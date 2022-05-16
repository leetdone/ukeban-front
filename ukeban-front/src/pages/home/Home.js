import React, { Component } from "react";
import axios from "axios";
import "./Home.css";
import Carousel from "../../components/carousel/Carousel";
import HomeCards from "../../components/homeCards/HomeCards";
export default class Home extends Component {

  render() {
    return (
      <div>
        <div className="banner">
          <div className="banner-image">
            <img
              className="tiger"
              src="https://web.ukeban.com/static/banner1_v2.6442b09a.png"
              alt
            ></img>
            <div className="banner-text">
              <div className="banner-fixation">
                <p>单位发福利，人人都满意</p>
                <p>越来越多的企业选择可伴为职工发福利，听听他们怎么说</p>
              </div>
              <br />
              <Carousel className="banner-box"></Carousel>
            </div>
          </div>
        </div>
        <HomeCards />
      </div>
    );
  }
}
