import {User} from "../../auth/interface/user";

export interface Post {
  "id": number,
  "date": string,
  "content": string,
  'author': User, // voir s'il ne faut pas une interface spécifique auteur
}
