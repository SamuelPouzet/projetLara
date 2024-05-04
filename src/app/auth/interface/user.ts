import {Role} from "./role";

export interface User {
  id: number,
  login: string,
  avatar: string,
  roles: Role[]
}
