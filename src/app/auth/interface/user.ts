import {Role} from "./role";

export interface User {
  id: number,
  login: string,
  roles: Role[]
}
