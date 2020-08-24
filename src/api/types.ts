import { isSymbol } from 'util';

export type TWeather = {
  base: string;
  clouds: IClouds;
  all: number;
  cod: number;
  coord: ICoord;
  lat: number;
  lon: number;
  dt: number;
  id: number;
  main: IMain;
  name: string;
  rain: { '1h': number };
  sys: ISys;
  timezone: number;
  visibility: number;
  weather: Array<IWeather>;
  wind: { speed: number; deg: number };
};

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface ISys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}
export interface IClouds {
  all: number;
}

export interface ICoord {
  lon: number;
  lat: number;
}

export interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export type TAPI = {
  city: {
    getCity: (city: string) => Promise<TWeather>;
  };
  details: {
    getForecast: (city: string, days: number) => Promise<any>;
  };
};
