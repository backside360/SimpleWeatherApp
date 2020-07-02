import { observable } from 'mobx';
import { IList } from '../../api/types';

export class ItemsStore {
  @observable items: IList[] = [];
  //@ts-ignore
  @observable itemInfo: IList = [];

  setItems = (items: IList): void => {
    //@ts-ignore
    this.items = items;
  };

  setItemInfo = (item: IList): void => {
    //@ts-ignore
    this.itemInfo = item;
  };
}

export default new ItemsStore();
