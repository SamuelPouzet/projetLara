import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {User} from "../../../../auth/interface/user";
import {AuthService} from "../../../../auth/service/auth.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit{

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
      }
    })
  }

  ngOnDestroy(): void {
    this.AuthUserSub.unsubscribe();
  }
}
