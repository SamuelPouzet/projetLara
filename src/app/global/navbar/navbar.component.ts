import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../auth/service/auth.service";
import {Subscription} from "rxjs";
import {User} from "../../auth/interface/user";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy{

  showAdminBoard = false;
  AuthUserSub! : Subscription;
  user: User|null = null;
  constructor(
    protected authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.AuthUserSub = this.authService.AuthenticatedUser$.subscribe({
      next : user => {
        this.user = user;
        if(user) {
          // todo gérer l'affichage de l'adminboard
          // this.showAdminBoard = user.role.name === 'ROLE_ADMIN';
        }
      }
    })
  }

  public handleLogout() {
    this.authService.logout();
  }
  ngOnDestroy(): void {
    this.AuthUserSub.unsubscribe();
  }

}
