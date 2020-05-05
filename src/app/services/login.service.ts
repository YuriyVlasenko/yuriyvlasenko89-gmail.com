import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { SettingsService } from './settings.service';
import { HttpClient } from '@angular/common/http';
const userStorageKey = 'currentUser';

export class User {
  constructor(public id: string, public login: string, public token: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private endpoint: string = '';
  private endpointName: string = 'auth';

  private currentUser: User;
  constructor(
    private localStorageService: LocalStorageService,
    private settings: SettingsService,
    private client: HttpClient
  ) {
    this.endpoint = `${this.settings.baseUrl}/${this.endpointName}`;
  }

  getCurrentUser() {
    if (!this.currentUser) {
      this.currentUser = this.localStorageService.getItem(
        userStorageKey
      ) as User;
    }
    return this.currentUser;
  }

  signIn(login: string, password: string) {
    let loginPromise = this.client
      .post(`${this.endpoint}/login`, { login, password })
      .toPromise();
    return loginPromise.then((token) => {
      let userData = {
        login,
        token,
      };
      this.localStorageService.setItem(userStorageKey, userData);
      return userData;
    });
  }

  signOut() {
    this.localStorageService.removeItem(userStorageKey);
    this.currentUser = null;
  }
}
