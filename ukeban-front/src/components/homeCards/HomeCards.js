// import 'antd/dist/antd.css';
// import './index.css';
import "./HomeCards.css";
import axios from "axios";
import { Card, Col, Row } from "antd";

import React, { Component } from "react";
import HomeCard from "../homeCard/HomeCard";
import Home from "../../pages/home/Home";
export default class HomeCards extends Component {
  constructor() {
    super();
    this.state = {
      card_list: [
      ],
    };
  }

  componentDidMount(){
    axios({
      method: 'GET',
      url: "http://127.0.0.1:3005/home"
  }).then(res => {
    this.setState((prevState) => ({
      card_list: [...res.data]
    }))
  })
  }

  render() {
    return (
    <div className="home-cards">
        {this.state.card_list.map((item, index) => (
             <div className="a-card">
                <HomeCard
                    cover={this.state.card_list[index].card_over}
                    title={this.state.card_list[index].card_title}
                    subtitle={this.state.card_list[index].card_subtitle}
                    cardItem={this.state.card_list[index].card_item}
                />
            </div>
        ))}
    </div>
    );
  }
}


    //   <div>
    //     <div className="firstRow">
    //       <Row
    //         gutter={16}
    //         style={{
    //           position: "absolute",
    //           margin: "0 auto",
    //           backgroundColor: "white",
    //         }}
    //       >
    //         <Col
    //           span={8}
    //           style={{
    //             flex: "0",
    //             padding: "0",
    //             height: "713px",
    //             width: "389px",
    //             margin: "10px",
    //           }}
    //           className={"col1"}
    //         >
    //           <HomeSingleCard
    //             title={this.state.card_list[0].card_title}
    //             subtitle={this.state.card_list[0].card_subtitle}
    //             cardItem={this.state.card_list[0].card_item}
    //           />
    //         </Col>
    //         <Col
    //           span={8}
    //           style={{
    //             flex: "0",
    //             padding: "0",
    //             height: "713px",
    //             width: "389px",
    //             margin: "10px",
    //           }}
    //           className={"col1"}
    //         >
    //           <HomeSingleCard
    //             title={this.state.card_list[1].card_title}
    //             subtitle={this.state.card_list[1].card_subtitle}
    //             cardItem={this.state.card_list[1].card_item}
    //           />
    //         </Col>
    //         <Col
    //           span={8}
    //           style={{
    //             flex: "0",
    //             padding: "0",
    //             height: "713px",
    //             width: "389px",
    //             margin: "10px",
    //           }}
    //           className={"col1"}
    //         >
    //           <HomeSingleCard
    //             title={this.state.card_list[2].card_title}
    //             subtitle={this.state.card_list[2].card_subtitle}
    //             cardItem={this.state.card_list[2].card_item}
    //           />
    //         </Col>
    //       </Row>
    //     </div>

    //     <div className="secondRow">
    //       <Row
    //         gutter={16}
    //         style={{
    //           position: "absolute",
    //           margin: "0 auto",
    //           backgroundColor: "white",
    //         }}
    //       >
    //         <Col
    //           span={8}
    //           style={{
    //             flex: "0",
    //             padding: "0",
    //             height: "713px",
    //             width: "389px",
    //             margin: "10px",
    //           }}
    //           className={"col1"}
    //         >
    //           <HomeSingleCard
    //             title={this.state.card_list[3].card_title}
    //             subtitle={this.state.card_list[3].card_subtitle}
    //             cardItem={this.state.card_list[3].card_item}
    //           />
    //         </Col>
    //         <Col
    //           span={8}
    //           style={{
    //             flex: "0",
    //             padding: "0",
    //             height: "713px",
    //             width: "389px",
    //             margin: "10px",
    //           }}
    //           className={"col1"}
    //         >
    //           <HomeSingleCard
    //             title={this.state.card_list[4].card_title}
    //             subtitle={this.state.card_list[4].card_subtitle}
    //             cardItem={this.state.card_list[4].card_item}
    //           />
    //         </Col>
    //         <Col
    //           span={8}
    //           style={{
    //             flex: "0",
    //             padding: "0",
    //             height: "713px",
    //             width: "389px",
    //             margin: "10px",
    //           }}
    //           className={"col1"}
    //         >
    //           <HomeSingleCard
    //             title={this.state.card_list[5].card_title}
    //             subtitle={this.state.card_list[5].card_subtitle}
    //             cardItem={this.state.card_list[5].card_item}
    //           />
    //         </Col>
    //       </Row>
    //     </div>
    //   </div>


