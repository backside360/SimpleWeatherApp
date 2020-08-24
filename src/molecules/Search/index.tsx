import React, { useState } from 'react';
import { Row, Col, Input } from 'antd';
import { observer } from 'mobx-react';
import { api } from '../../api';
import { useStores } from 'src/entities';

import { CityList } from 'src/molecules/CityList';
import './styles.css';

const { Search } = Input;

interface IProps {
  onClick?: (symbol: string) => void;
}

export const SearchCities: React.FC<any> = observer((props) => {
  const { visible } = props;

  const { CityStore } = useStores();

  const fetchCity = async (name = '') => {
    const data = await api.city.getCity(name);
    CityStore.setCity(data);
  };

  return (
    <div className="main_page">
      <Row justify="center">
        <Col span={14}>
          <Search
            placeholder="input search text"
            onSearch={(value) => fetchCity(value)}
            enterButton
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={14}>
          <CityList />
        </Col>
      </Row>
    </div>
  );
});
