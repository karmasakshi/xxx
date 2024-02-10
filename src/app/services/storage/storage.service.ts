import { Injectable } from '@angular/core';
import { APP_NAME } from '@xxx/constants/app-name.constant';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _prefix: string;

  public constructor() {
    this._prefix = APP_NAME.toLowerCase().replace(/\s/g, '-');
  }

  public clearLocalStorage() {
    localStorage.clear();
  }

  public clearSessionStorage() {
    sessionStorage.clear();
  }

  public getLocalStorageItem(key: string) {
    let value = null;
    const serializedValue = localStorage.getItem(this._prefix + '-' + key);
    if (serializedValue) {
      try {
        value = JSON.parse(serializedValue);
      } catch (error) {
        console.error(error);
      }
    }
    return value;
  }

  public getSessionStorageItem(key: string) {
    let value = null;
    const serializedValue = sessionStorage.getItem(this._prefix + '-' + key);
    if (serializedValue) {
      try {
        value = JSON.parse(serializedValue);
      } catch (error) {
        console.error(error);
      }
    }
    return value;
  }

  public setLocalStorageItem(key: string, value: unknown) {
    try {
      const serializedValue: string = JSON.stringify(value);
      localStorage.setItem(this._prefix + '-' + key, serializedValue);
    } catch (error) {
      console.error(error);
    }
  }

  public setSessionStorageItem(key: string, value: unknown) {
    try {
      const serializedValue: string = JSON.stringify(value);
      sessionStorage.setItem(this._prefix + '-' + key, serializedValue);
    } catch (error) {
      console.error(error);
    }
  }

  public removeLocalStorageItem(key: string) {
    localStorage.removeItem(this._prefix + '-' + key);
  }

  public removeSessionStorageItem(key: string) {
    sessionStorage.removeItem(this._prefix + '-' + key);
  }
}
