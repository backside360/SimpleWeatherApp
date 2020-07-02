import React, { useState } from 'react';
import { Result, Button, Modal, Typography } from 'antd';
import { observer } from 'mobx-react';
import { useStores } from '../../entities';
import { api } from '../../api';

const { Title } = Typography;

const ErrorModal = observer(() => {
  const { Logger, ItemsStore } = useStores();
  const { isError, setIsError } = Logger;
  const [visible, setVisible] = useState<boolean>(true);

  const onCancel = () => {
    (async () => {
      if (Logger.location === 'list') {
        const data = await api.list.getList();

        ItemsStore.setItems(data);
        setIsError(false, '', '');
      } else {
        const id = Logger.id.substring(Logger.id.lastIndexOf('/') + 1);
        const data = await api.details.getDetails(id);

        ItemsStore.setItemInfo(data);
        setIsError(false, '', '');
      }
    })();
  };

  return (
    <>
      {isError ? (
        <Modal centered visible={visible} footer={null} onCancel={onCancel}>
          <div>
            <Title>Внутренняя ошибка сервера</Title>
            <Result status="500" />{' '}
            <Button type="primary" onClick={(e) => onCancel()}>
              Повторить запрос
            </Button>
          </div>
        </Modal>
      ) : null}
    </>
  );
});

export default ErrorModal;
