import {Injectable} from '@angular/core';
import {User} from "../../auth/interface/user";
import {apiUrl, forumCode} from "../../../config/config";
import {BehaviorSubject, catchError, map, Subject, tap, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Fieldset} from "../../global/interface/fieldset";

@Injectable({
  providedIn: 'root'
})
export class FieldsetService {

  protected fieldsetSubject = new Subject<Fieldset[]>;
  public fieldsets = this.fieldsetSubject.asObservable();

  constructor(
    protected http: HttpClient,
  ) {
  }

  public getFieldSets(forum: number) {
    this.http.request<Fieldset[]>('get', apiUrl + `/category/${forum}`,
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
      .subscribe((fieldset) => {
        this.fieldsetSubject.next(fieldset);
      })
    ;
  }
}
