import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements  OnInit, OnDestroy{

  errorMessage!: string;
  AuthUserSub!: Subscription;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    protected authService: AuthService,
    protected  router: Router,
  ) {
  }

  ngOnInit() {
    this.AuthUserSub = this.authService.AuthenticatedUser$.subscribe({
      next: user => {
        if (user) {
          this.router.navigate(['home']);
        }
      }
    })
  }

  protected onSubmitLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.authService.login(email, password).subscribe({
        next: userData => {
          console.log("User is logged in");
          this.router.navigateByUrl('/');
        },
        error: err => {
          // this.errorMessage = err;
          console.log(err);
        }

      });
  }

  ngOnDestroy() {
    this.AuthUserSub.unsubscribe();
  }

}
