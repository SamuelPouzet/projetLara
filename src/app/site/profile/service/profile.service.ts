import {Injectable} from '@angular/core';
import {apiUrl} from "../../../../config/config";
import {HttpService} from "../../../global/service/http.service";
import {AuthService} from "../../../auth/service/auth.service";
import {User} from "../../../auth/interface/user";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    protected http: HttpService,
    protected authService: AuthService,
  ) {
  }

  public updateAvatar(avatar: any) {
    this.http.post(`${apiUrl}/avatar`, {'avatar': avatar})
      .subscribe(
      (response) => {
        if ('status' in response && response.status === 'OK' && 'user' in response) {
            this.authService.updateUser(response.user as User);
        }
      }
    );
  }
}
