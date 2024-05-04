import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./site/component/not-found/not-found.component";
import {HomeComponent} from "./site/component/home/home.component";
import {LoginComponent} from "./auth/component/login/login.component";
import {ForbiddenComponent} from "./auth/component/forbidden/forbidden.component";
import {TestauthComponent} from "./site/component/testauth/testauth.component";
import {authGuard} from "./auth/helper/auth.guard";
import {ProfileComponent} from "./site/profile/profile.component";
import {SignupComponent} from "./auth/component/signup/signup.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'test', component: TestauthComponent,
    canActivate: [authGuard],
    data: {roles: ['role.admin', 'ROLE_USER']}},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'profile', component: ProfileComponent,
    canActivate: [authGuard],
    data: {roles: ['role.user']}
  },
  {path: 'forbidden', component: ForbiddenComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
