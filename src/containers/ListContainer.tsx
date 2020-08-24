import React from 'react';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';
import { SearchCities } from '../molecules/Search';

export const ListContainer: React.FC<any> = observer(() => {
  const history = useHistory();

  return (
    <>
      {' '}
      <SearchCities />
    </>
  );
});
