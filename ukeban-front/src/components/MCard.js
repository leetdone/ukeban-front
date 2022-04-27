import React from 'react';
import 'antd/dist/antd.css';
// import './index.css';
import './MCard.css'
import { Card, Col, Row } from 'antd';

export default () => (
     <div>

  <div className="firstRow">
    <Row gutter={16}>
      <Col span={8}>
        <Card bordered={false} cover={<img alt="example" src="https://web.ukeban.com/static/qunzong.d8123169.png" />}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
    </div>


    <div className="secondRow">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
    </div>


  </div>
);