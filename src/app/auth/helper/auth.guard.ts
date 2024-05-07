import {CanActivateFn, Router} from '@angular/router';
import {map, take} from "rxjs";
import {inject} from "@angular/core";
import {AuthService} from "../service/auth.service";
import {Role} from '../interface/role';

export const authGuard: CanActivateFn = (route) => {

  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.AuthenticatedUser$.pipe(
    take(1), // take the first one and then unsubscribe automatically
    map(user => {
      // check if route is restricted by role
      const {roles} = route.data;

      if (user && roles.filter((value: Role) => user.roles.includes(value)).length > 0) {
        return true;
      }
      if (user) {
        return router.createUrlTree(['/forbidden']);
      }
      return router.createUrlTree(['/login']);
    })
  );
};
