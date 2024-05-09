import {Injectable} from '@angular/core';
import {catchError, map, Subject} from "rxjs";
import {Fieldset} from "../../global/interface/fieldset";
import {Topic} from "../../global/interface/topic";
import {HttpClient} from "@angular/common/http";
import {apiUrl} from "../../../config/config";

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  protected topicSubject = new Subject<Topic>;
  public topic = this.topicSubject.asObservable();

  constructor(
    protected http: HttpClient,
  ) {
  }

  public getTopic(topicId: number) {
      this.http.request<Topic>('get', apiUrl + `/topic/${topicId}`,
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
          this.topicSubject.next(topic);
        })
      ;
    }
}
