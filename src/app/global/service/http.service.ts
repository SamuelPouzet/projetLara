import { Injectable } from '@angular/core';
import {apiUrl} from "../../../config/config";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    protected http: HttpClient,
  ) { }

  public post(url: string, body: {}, )
  {
     return this.http.request( 'post',url, {body :body, withCredentials : true})
  }
}
