import { Injectable } from '@angular/core';
import { apiUrl, forumCode } from "../../../config/config";
import {HttpClient} from "@angular/common/http";
import {Config} from '../interface/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  protected config: Config[] = [];

  constructor(
    protected http: HttpClient,
  ) { }

  public init() {
    this.getConfig();
  }

  public get(value: string) {
    return this.config.find(v => v.code === value);
  }

  protected getConfig() {
    this.http.request<Config[]>('get',apiUrl + '/config/' + forumCode,{
      withCredentials: true
    }).subscribe( d => this.config = d);
  }
}
