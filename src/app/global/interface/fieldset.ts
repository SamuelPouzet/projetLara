import {Topic} from "./topic";

export interface Fieldset {
  'id': number;
  'forum_id': number;
  'name': string,
  'position': number;
  'status': number;
  'topics'?: Topic[];
}
