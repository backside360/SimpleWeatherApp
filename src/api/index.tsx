import axios from 'axios';
import Logger from '../entities/stores/Logger';
import { TAPI } from './types';

const key = '330216f9e3042b8a57a7865c3de67865';

export const api: TAPI = {
  city: {
    getCity(city: string) {
      return axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
        )
        .then((res) => res.data);
    },
  },
  details: {
    getForecast(city: string, days: number) {
      return axios
        .get(
          `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${days}&appid=${key}`
        )
        .then((res) => res.data)
        .catch((err) => {
          Logger.setIsError(true, 'details', err.request.responseURL);
        });
    },
  },
};
