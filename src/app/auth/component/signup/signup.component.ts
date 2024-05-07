import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  AuthUserSub!: Subscription;
  errors = {};

  signupForm: FormGroup = new FormGroup({
    login: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    email: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.email,
    ]),
    agreement: new FormControl('',[
      Validators.required,
      Validators.requiredTrue,
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
    ]),
    passwordConfirm: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
    ]),
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
    if(!this.signupForm.valid) {
      this.signupForm.markAllAsTouched();
      return;
    }
    return;
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;

    this.authService.login(email, password).subscribe({
      next: () => {
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
