import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, tap, throwError} from "rxjs";
import {User} from "../interface/user";
import {StorageService} from "./storage.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://api.forum.sam'; // todo mettre dans un fichier de configuration
  AuthenticatedUser$ = new BehaviorSubject<User | null>(null);
  constructor(
    protected http: HttpClient,
    protected storageService: StorageService,
    protected router: Router,
  ) { }

  public login(login: string, password: string) {
    return this.http.request<User>('post', this.apiUrl + '/auth',
      {body :{login: login, password: password}, withCredentials : true})
      .pipe(
        catchError(err => {
          console.log(err.error.detail);
          return throwError(() => new Error(err.error.detail))
        }),
        tap(user => {
          this.storageService.saveUser(user);
          this.AuthenticatedUser$.next(user);
        })
      );
  }

  public autoLogin() {
    const userData = this.storageService.getSavedUser();
    if (!userData) {
      return;
    }
    this.AuthenticatedUser$.next(userData);
  }

  logout(){
    this.http.request('post',this.apiUrl + '/logout',{
      withCredentials: true
    }).subscribe({
      next: () => {
        this.storageService.clean();
        this.AuthenticatedUser$.next(null);
        this.router.navigate(['/login']);
      }
    })
  }
}
