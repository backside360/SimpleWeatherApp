import React, { useState, useEffect } from 'react';
import { match as IMatch } from 'react-router-dom';
import { Row } from 'antd';

import { observer } from 'mobx-react';
import { useStores } from '../entities';
import { api } from '../api';
import { ItemCard } from '../Atoms/ItemCard';

interface TProps {
  component: React.ElementType<any>;
  match: IMatch<{ id: string }>;
}

type TState = {
  id: string | null;
  name: string | null;
  price: number | null;
  content: string | null;
};

const ItemsInfo: React.FC<TProps> = observer((props) => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [itemInfo, setItemInfo] = useState<TState>({
    id: null,
    name: null,
    price: null,
    content: null,
  });
  const { ItemsStore } = useStores();

  useEffect(() => {
    (async () => {
      try {
        const data = await api.details.getDetails(props.match.params.id);
        setItemInfo(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    })();
  }, []); // eslint-disable-line

  return (
    <Row justify="center">
      <ItemCard
        id={itemInfo ? itemInfo.id! : ItemsStore.itemInfo.id}
        name={itemInfo ? itemInfo.name! : ItemsStore.itemInfo.name}
        price={itemInfo ? itemInfo.price! : ItemsStore.itemInfo.price}
        content={itemInfo ? itemInfo.content! : ItemsStore.itemInfo.content}
        loading={loading}
      />
    </Row>
  );
});

export default ItemsInfo;
