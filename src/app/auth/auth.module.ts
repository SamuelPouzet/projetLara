import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './component/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ForbiddenComponent } from './component/forbidden/forbidden.component';
import { SignupComponent } from './component/signup/signup.component';


@NgModule({
  declarations: [
    LoginComponent,
    ForbiddenComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
