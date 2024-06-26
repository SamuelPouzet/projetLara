import {Component, OnInit} from '@angular/core';
import {TopicTypeService} from "../../service/topic-type.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TopicType} from "../../../global/interface/topic-type";
import {ActivatedRoute, Router} from "@angular/router";
import {TopicService} from "../../service/topic.service";
import {TopicForm} from "../../service/form/topic.service";
import {Topic} from "../../../global/interface/topic";
import {switchMap} from "rxjs";
import {Location} from "@angular/common";
import Editor from "@ckeditor/ckeditor5-build-classic";
import {CkeditorService} from "../../../global/service/ckeditor.service";

@Component({
  selector: 'app-new-topic',
  templateUrl: './new-topic.component.html',
  styleUrls: ['./new-topic.component.scss']
})
export class NewTopicComponent implements OnInit {

  protected selectedType!: TopicType;
  protected topicForm !: FormGroup;
  constructor(
    protected typeService: TopicTypeService,
    protected activeRoute: ActivatedRoute,
    protected topicService: TopicService,
    protected formService: TopicForm,
    protected router: Router,
    protected location: Location,
    protected ckService: CkeditorService,
  ) {
    this.typeService.getTopics();
  }

  ngOnInit() {
    this.topicForm = this.formService.getForm();
    this.activeRoute.params
      .pipe(
        switchMap(routeParams => {
          this.topicService.getTopic(routeParams['parent_id']);
          return this.topicService.topic;
        })
      )
      .subscribe(topic => {
        this.topicForm.patchValue({parent: topic})
      });

    this.topicForm.controls['type'].valueChanges.subscribe(value => {
      this.selectedType = value;
      if (value && value.code === 'topic_forum') {
        this.topicForm.addControl("topic_forum_content", new FormControl('', Validators.required));
      } else if(this.hasFirstPost()){
        this.topicForm.removeControl('topic_forum_content');
      }

    });

  }

  protected hasFirstPost()  {
    return this.topicForm.contains('topic_forum_content');
  }

  protected rollback() {
    this.location.back();
  }

  protected submit() {
    if (this.topicForm.valid) {
      this.topicService.addTopic(this.topicForm.value as Topic)
        .subscribe(rep => {
          this.router.navigate(['topics', rep.id]);
        });
      console.log('form submitted');
    }
  }

  protected readonly Editor = Editor;
}
