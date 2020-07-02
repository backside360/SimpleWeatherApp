import React from 'react';
import { ItemsStore } from './stores/ItemsStore';
import Logger from './stores/Logger';

export type TStore = {
  ItemsStore: ItemsStore;
  Logger: typeof Logger;
};

export const createStore = (): TStore => ({
  ItemsStore: new ItemsStore(),
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
