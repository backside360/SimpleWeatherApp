import React from 'react';
import { CityStore } from './stores/CityStore';
import Logger from './stores/Logger';

export type TStore = {
  CityStore: CityStore;
  Logger: typeof Logger;
};

export const createStore = (): TStore => ({
  CityStore: new CityStore(),
  Logger,
});

export const StoresContext = React.createContext<TStore | null>(null);

export const useStores = (): TStore => {
  const stores = React.useContext(StoresContext);

  if (!stores) {
    throw new Error(
      'useStores() следует использовать внутри <StoresContext.provider />'
    );
  }

  return stores;
};
