export interface IList {
  id: string;
  name: string;
  price: number;
  content: string;
}

export type TAPI = {
  list: {
    getList: () => Promise<IList>;
  };
  details: {
    getDetails: (id: string) => Promise<IList>;
  };
};
