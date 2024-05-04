import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, Observable, tap, throwError} from "rxjs";
import {User} from "../interface/user";
import {apiUrl} from "../../../config/config";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = apiUrl;
  user$ = new BehaviorSubject<User | null>(null);
  constructor(
    protected http: HttpClient,
  ) { }

  getUserById(id: number): Observable<User>
  {
    return this.http.request<User>('get', this.apiUrl + `/user/${id}`);
  }
}
