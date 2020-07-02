import React from 'react';

import { Spin, Row, Card } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export type IProps = {
  name?: string;
  price?: number;
  content?: string;
  id: string;
  onClick?: (symbol: string) => void;
  loading?: boolean;
};

export const ItemCard: React.FC<IProps> = ({
  name,
  price,
  id,
  onClick,
  loading,
  content,
}) => {
  const loader = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  return (
    <Card
      title={name}
      hoverable
      style={{ width: '400px', height: '100%', borderRadius: '10px' }}
      onClick={() => onClick && onClick(id)}
    >
      {loading ? (
        <Spin indicator={loader} />
      ) : (
        <>
          <p>{content}</p>
          <p>Цена: {price}</p>
        </>
      )}
    </Card>
  );
};
