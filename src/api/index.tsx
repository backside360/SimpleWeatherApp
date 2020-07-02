import axios from 'axios';
import Logger from '../entities/stores/Logger';
import { TAPI } from './types';

export const api: TAPI = {
  list: {
    getList() {
      return axios
        .get('http://localhost:7070/api/services')
        .then((res) => res.data)
        .catch((err) => {
          Logger.setIsError(true, 'list', '');
        });
    },
  },
  details: {
    getDetails(id: string) {
      return axios
        .get(`http://localhost:7070/api/services/${id}`)
        .then((res) => res.data)
        .catch((err) => {
          Logger.setIsError(true, 'details', err.request.responseURL);
        });
    },
  },
};
