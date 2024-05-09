import {Post} from "./post";

export interface Topic {
  'id': number;
  'fieldset_id': number;
  'name': string,
  'description': string;
  'type': number;
  'position': number;
  'status': number;
  'children': Topic[];
  'posts': Post[];
}
