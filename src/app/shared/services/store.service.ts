import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private state = {
    data: {
      outgoings: [],
    }
  };

  set(keys: string[], data: any) {
    this.setData(keys, data, this.state);
  }

  get(keys: string[]): any {
    return this.getData(keys, this.state);
  }

  private setData(keys: string[], data: any, state: any) {
    let _keys = JSON.parse(JSON.stringify(keys)).splice(0, 1);
    if (keys.length > 0)
      this.setData(keys, data, state[_keys[0]]);
    else
      state[_keys[0]] = data;
  }

  private getData(keys: string[], state: any): any {
    let _keys = JSON.parse(JSON.stringify(keys)).splice(0, 1);
    return (keys.length > 0) ? this.getData(keys, state[_keys[0]]) : state[_keys[0]];
  }
}
