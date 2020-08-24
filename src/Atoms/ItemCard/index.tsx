import React from 'react';

import { Row, Card, Col, Typography, Button } from 'antd';
import moment from 'moment';

import { Up, Down, Wind, Barometer, Sunset, Sunrise, Humidity } from './images';
import './styles.css';
import { TWeather } from 'src/api/types';

const { Title } = Typography;

export type IProps = {
  data: TWeather;
  deleteCity: () => void;
};

export const ItemCard: React.FC<IProps> = ({ data, deleteCity }) => {
  const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

  const sunrise = moment.unix(data.sys.sunrise);
  const sunset = moment.unix(data.sys.sunset);
  const footer = (
    <Button block danger onClick={() => deleteCity()} className="delete_btn">
      Удалить
    </Button>
  );
  return (
    <Card
      title={data.name}
      hoverable
      style={{ width: '400px', height: '531px', borderRadius: '10px' }}
      className="weather_card"
    >
      <Row justify="space-between" align="middle" gutter={[20, 48]}>
        <Col className="card_items">
          <span className="card_data">{data.weather[0].main}</span>
          <img src={iconUrl} alt="" />
        </Col>
        <Col>
          <Title level={2}>
            {data.main.temp}
            <span>&#8451;</span>
          </Title>
        </Col>
        <Col className="min_max">
          <p className="arrow_icon">
            {data.main.temp_max}
            <span>&#8451;</span>

            <Up />
          </p>
          <p className="arrow_icon">
            {data.main.temp_min}
            <span>&#8451;</span>

            <Down />
          </p>
        </Col>
      </Row>
      <Row justify="space-between" align="middle" gutter={[20, 48]}>
        <Col className="card_items">
          <Humidity />
          <span className="card_data">{data.main.humidity}%</span>
          <span>Humidity</span>
        </Col>
        <Col className="card_items">
          <Barometer />
          <span className="card_data">{data.main.pressure}mBar</span>
          <span>Pressure</span>
        </Col>
        <Col className="card_items">
          <Wind />
          <span className="card_data">{data.wind.speed}km/h</span>
          <span>Wind</span>
        </Col>
      </Row>
      <Row justify="center" align="middle" gutter={[20, 48]}>
        <Col className="card_items">
          <Sunrise />
          <span className="card_data">{sunrise.format('h:mm:ss')} AM</span>
          <span>Sunrise</span>
        </Col>
        <Col className="card_items">
          <Sunset />
          <span className="card_data">{sunset.format('h:mm:ss')} PM</span>
          <span>Sunset</span>
        </Col>
      </Row>
      <Row>{footer}</Row>
    </Card>
  );
};
