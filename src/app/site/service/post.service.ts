import { Injectable } from '@angular/core';
import {catchError, map, Subject} from "rxjs";
import {Topic} from "../../global/interface/topic";
import {apiUrl, forumCode} from "../../../config/config";
import {HttpClient} from "@angular/common/http";
import {Post} from "../../global/interface/post";

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

  public addPost(content: string, topicId: number)
  {
    return this.http.request<Topic>('post', apiUrl + `/post`,
      {body :{content: content, topic: topicId},
        withCredentials: true})
    ;
  }
}
