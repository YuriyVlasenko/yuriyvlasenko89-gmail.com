import { Injectable } from '@angular/core';

export const StorageKeys = {
  BASCKET: 'bascket',
};

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setItem(storageKey, value) {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }

  getItem(storageKey) {
    return JSON.parse(localStorage.getItem(storageKey));
  }
  removeItem(storageKey) {
    localStorage.removeItem(storageKey);
  }
}
