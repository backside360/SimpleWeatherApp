import React from 'react';
import { Row } from 'antd';
import { observer } from 'mobx-react';

import { ItemCard } from '../../Atoms/ItemCard';

import './styles.css';
import { TWeather } from 'src/api/types';

interface IProps {
  data: TWeather;
  deleteCity: () => void;
}

const CityCard: React.FC<IProps> = ({ data, deleteCity }) => (
  <Row justify="center" className="content">
    <ItemCard data={data} deleteCity={deleteCity} />
  </Row>
);

const Observed = observer(CityCard);

export { Observed as CityCard };
