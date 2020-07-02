/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, useCallback } from 'react';

import { CardsList } from '../molecules/Card';
import { ListContainer } from '../containers/ListContainer';

const Mainpage: React.FC = () => <ListContainer component={CardsList} />;

export default Mainpage;
