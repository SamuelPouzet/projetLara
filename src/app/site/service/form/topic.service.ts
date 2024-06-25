import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";
import {Topic} from "../../../global/interface/topic";
import {TopicType} from "../../../global/interface/topic-type";

@Injectable({
  providedIn: 'root'
})
export class TopicForm {

  protected topicForm = new FormGroup({
    name: new FormControl<string>('',
        [
          Validators.minLength(3),
          Validators.required
        ]
    ),
    description: new FormControl<string>(''),
    parent: new FormControl<Topic | null>(null,
        [
          Validators.required
        ]
    ),
    type: new FormControl<TopicType | null>(null),
    status: new FormControl<number>(1),
  });

  constructor(
  ) { }

  public getForm() {
    return this.topicForm;
  }

  public insertTopic()
  {

  }
}
