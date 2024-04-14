import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  title = 'project-forum';

  constructor(
    protected authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.authService.autoLogin();
  }
}
