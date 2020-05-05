import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
const userStorageKey = 'currentUser';

export class User {
  constructor(public id: string, public login: string, public token: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private currentUser: User;
  constructor(private localStorageService: LocalStorageService) {}

  getCurrentUser() {
    if (!this.currentUser) {
      this.currentUser = this.localStorageService.getItem(
        userStorageKey
      ) as User;
    }
    return this.currentUser;
  }

  signIn(login: string, password: string) {
    // TODO: implement
    let loginPromise = Promise.resolve({ login, password, token: 'test' });
    return loginPromise.then((userData) => {
      this.localStorageService.setItem(userStorageKey, userData);

      return userData;
    });
  }

  signOut() {
    this.localStorageService.removeItem(userStorageKey);
    this.currentUser = null;
  }
}
