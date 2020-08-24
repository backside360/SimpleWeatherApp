import React from 'react';
import { Row, Col, Layout } from 'antd';
import './styles.css';

export const Header: React.FC = () => {
  return (
    <Layout.Header className="header">
      <Row justify="space-between" align="middle" gutter={[10, 0]}>
        <Col span={4}>Simple Weather App</Col>
      </Row>
    </Layout.Header>
  );
};
