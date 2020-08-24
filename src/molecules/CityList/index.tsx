import React from 'react';
import {
  Button,
  Table,
  Tooltip,
  Popconfirm,
  Typography,
  Empty,
  Col,
} from 'antd';
import { observer } from 'mobx-react';
import { useStores } from 'src/entities';
import { CityCard } from 'src/molecules/Card';
import './styles.css';

import { ExclamationCircleTwoTone, DeleteOutlined } from '@ant-design/icons';

const { Column } = Table;
const { Title } = Typography;

export const CityList = observer(() => {
  const { CityStore } = useStores();

  const templateNoFiles = (
    <>
      <Empty description={<Title level={3}>Список городов пуст</Title>} />
    </>
  );

  return (
    <div className="main_table">
      <Table
        dataSource={CityStore.cities}
        size={'middle'}
        className="city_table"
        locale={{ emptyText: templateNoFiles }}
        pagination={false}
        showHeader={false}
      >
        <Column
          key="category"
          render={(record) => (
            <Button
              //@ts-ignore
              onClick={() => CityStore.setCurrentCity(record)}
            >
              {record.name}
            </Button>
          )}
        />

        <Column
          dataIndex="main"
          render={(info) => (
            <Col>
              {info.temp}
              <span>&#8451;</span>
            </Col>
          )}
        />

        <Column
          title="Удалить"
          key="delete"
          colSpan={0}
          render={(record) => (
            <span>
              <Popconfirm
                placement="topRight"
                arrowPointAtCenter={true}
                title={'Действительно хотите удалить?'}
                onConfirm={() => CityStore.deleteCity(record.name)}
                okText="Да"
                cancelText="Нет"
                icon={<ExclamationCircleTwoTone twoToneColor="#F5222D" />}
              >
                <Tooltip placement="topLeft" title="Удалить" arrowPointAtCenter>
                  <a>
                    <DeleteOutlined />
                  </a>
                </Tooltip>
              </Popconfirm>
            </span>
          )}
        />
      </Table>
      {CityStore.currentCity.length !== 0 ? (
        <CityCard
          data={CityStore.currentCity}
          deleteCity={CityStore.clearCurrentCity}
        />
      ) : null}
    </div>
  );
});
