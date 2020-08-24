import React from 'react';
import { Row, Col, Layout } from 'antd';
import './styles.css';

export const Footer: React.FC = () => {
  return (
    <Layout.Footer>
      <Row
        justify="space-between"
        align="middle"
        gutter={[10, 0]}
        className="footer"
      >
        <Col span={4}>Simple Weather App</Col>
      </Row>
    </Layout.Footer>
  );
};
