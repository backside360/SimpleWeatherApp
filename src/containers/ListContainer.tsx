import React, { useState, useEffect } from 'react';
import { api } from '../api';
import { observer } from 'mobx-react';
import { Skeleton } from 'antd';
import { useHistory } from 'react-router-dom';

import { useStores } from '../entities';
import { CardsList } from '../molecules/Card';

export const ListContainer: React.FC<any> = observer(
  ({ component: CardList }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const { ItemsStore } = useStores();
    const history = useHistory();

    useEffect(() => {
      (async () => {
        const data = await api.list.getList();
        if (data !== undefined) {
          ItemsStore.setItems(data);
        }
        setLoading(false);
      })();
    }, []);

    const handleClick = React.useCallback(
      (id) => history.push(`${id}/details`),
      [history]
    );
    return (
      <>
        {' '}
        <Skeleton loading={loading} active>
          <CardsList items={ItemsStore.items} onClick={handleClick} />
        </Skeleton>
      </>
    );
  }
);
