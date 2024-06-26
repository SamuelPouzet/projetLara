import { Injectable } from '@angular/core';
import {catchError, map, Subject} from "rxjs";
import {Breadcrumbs} from "../../global/interface/breadcrumbs";
import {apiUrl} from "../../../config/config";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {

  protected breadcrumbSubject = new Subject<Breadcrumbs[]>;
  public breadcrumbs = this.breadcrumbSubject.asObservable();
  constructor(
    protected http: HttpClient
  ) { }

  public getBreadCrumbs(id: number) {
    this.http.request<Breadcrumbs[]>('get', apiUrl + `/breadcrumbs/${id}`,
      {withCredentials: true})
      .pipe(
        catchError(err => {
          console.log(err.error.detail);
          return [];
        })
      )
      .subscribe((breadcrumbs) => {
        this.breadcrumbSubject.next(breadcrumbs);
      })
    ;
  }
}
