import { Injectable } from '@angular/core';
import {User} from "../interface/user";

const USER_KEY = 'authenticated-user'; // todo mettre dans un fichier de conf

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public saveUser(user: User) {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getSavedUser() : User | null {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  public clean(): void {
    window.localStorage.clear();
  }

}
