import { observable } from 'mobx';

export class FrontendLoggers {
  @observable isError: boolean = false;
  @observable location: string = '';
  @observable id: string = '';

  setIsError = (isError: boolean, location: string, id: string): void => {
    this.isError = isError;
    this.location = location;
    this.id = id;
  };
}

const Logger = new FrontendLoggers();

export default Logger;
