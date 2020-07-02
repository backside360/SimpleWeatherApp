import React from 'react';
import { Row, Col } from 'antd';
import { observer } from 'mobx-react';

import { ItemCard } from '../../Atoms/ItemCard';
import { IList } from '../../api/types';

interface IProps {
  items: IList[];
  onClick?: (symbol: string) => void;
}

const CardsList: React.FC<IProps> = ({ items, onClick }) => (
  <Row justify="space-around" align="stretch" gutter={[32, 32]}>
    {items.map((elem) => (
      <Col className="card" key={elem.id}>
        <ItemCard
          name={elem.name}
          price={elem.price}
          onClick={onClick}
          id={elem.id}
        />
      </Col>
    ))}
  </Row>
);

const Observed = observer(CardsList);

export { Observed as CardsList };
