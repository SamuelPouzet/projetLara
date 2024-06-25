import {Post} from "./post";
import {TopicType} from "./topic-type";

export interface Topic {
  'id': number;
  'fieldset_id': number;
  'name': string,
  'description': string;
  'type': TopicType;
  'position': number;
  'status': number;
  'children': Topic[];
  'posts': Post[];
}
