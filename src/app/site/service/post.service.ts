import { Injectable } from '@angular/core';
import {catchError, map, Subject} from "rxjs";
import {Topic} from "../../global/interface/topic";
import {apiUrl} from "../../../config/config";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  protected postSubject = new Subject<Topic>;
  public post = this.postSubject.asObservable();
  constructor(
    protected http: HttpClient,
  ) { }

  public getTopic(topicId: number) {
    this.http.request<Topic>('get', apiUrl + `/post/${topicId}`,
      {withCredentials: true})
      .pipe(
        catchError(err => {
          console.log(err.error.detail);
          return [];
        }),
        map((fieldsets) => {
          return fieldsets;
        })
      )
      .subscribe((post) => {
        this.postSubject.next(post);
      })
    ;
  }
}
