import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  protected content = new BehaviorSubject<string>('');
  public content$ = this.content.asObservable();
  constructor() { }

  public setContent(content: string) {
    this.content.next(content);
  }
}
