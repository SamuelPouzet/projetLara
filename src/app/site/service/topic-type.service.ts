import { Injectable } from '@angular/core';
import {catchError, map, Subject} from "rxjs";
import {Topic} from "../../global/interface/topic";
import {HttpClient} from "@angular/common/http";
import {apiUrl} from "../../../config/config";
import {TopicType} from "../../global/interface/topic-type";

@Injectable({
  providedIn: 'root'
})
export class TopicTypeService {

  protected typeSubject = new Subject<TopicType[]>;
  public types = this.typeSubject.asObservable();

  constructor(
    protected http: HttpClient,
  ) {
  }

  public getTopics() {
    this.http.request<TopicType[]>('get', apiUrl + `/topic_type`,
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
      .subscribe((topic) => {
        this.typeSubject.next(topic);
      })
    ;
  }
}
