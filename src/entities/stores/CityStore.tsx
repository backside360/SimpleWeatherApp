import { observable } from 'mobx';
import { TWeather } from '../../api/types';

export class CityStore {
  @observable cities: TWeather[] = [];
  @observable currentCity: any = [];

  setCity = (city: TWeather): void => {
    this.cities = [...this.cities, city];
  };

  setCurrentCity = (city: TWeather[]): void => {
    this.currentCity = city;
  };

  clearCurrentCity = (): void => {
    this.currentCity = [];
  };

  deleteCity = (city: any): void => {
    const list = this.cities.filter((elem: any) => elem.name !== city);
    this.cities = list;
  };
}

export default new CityStore();
