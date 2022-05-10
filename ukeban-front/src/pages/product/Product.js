import React, { useState } from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import "./Product.css";
import customedCard from "../../assets/images/product01.png";
import voucher from "../../assets/images/product02.png";
import miniCard from "../../assets/images/product03.png";
const tabListNoTitle = [
  {
    key: "article",
    tab: "定制卡",
  },
  {
    key: "app",
    tab: "提货券",
  },
  {
    key: "project",
    tab: "迷你卡",
  },
];

const contentListNoTitle = {
  article: <img className="cardImages" src={customedCard} />,
  app: <img className="cardImages" src={voucher} />,
  project: <img className="cardImages" src={miniCard} />,
};

const Product = () => {
  const [activeTabKey2, setActiveTabKey2] = useState("app");

  const onTab2Change = (key) => {
    setActiveTabKey2(key);
  };

  return (
    <>
      <br />
      <br />
      <Card
        bordered={false}
        style={{ width: "100%", width: "1200px", margin: "0 auto" }}
        bodyStyle={{ textAlign: "center" }}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey2}
        onTabChange={(key) => {
          onTab2Change(key);
        }}
      >
        {contentListNoTitle[activeTabKey2]}
      </Card>
    </>
  );
};

export default () => <Product />;
