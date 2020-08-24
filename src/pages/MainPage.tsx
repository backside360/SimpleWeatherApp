import React from 'react';

import { CityCard } from '../molecules/Card';
import { ListContainer } from '../containers/ListContainer';

const Mainpage: React.FC = () => (
  <div id="moduleRoot">
    <ListContainer component={CityCard} />
  </div>
);

export default Mainpage;
