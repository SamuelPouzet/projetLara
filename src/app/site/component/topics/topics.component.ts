import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TopicService} from "../../service/topic.service";

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements  OnInit{
  protected forum = 1;
  @Input() topicId!: number;
  protected topic$ = this.topicService.topic;

  constructor(
    protected activeRoute: ActivatedRoute,
    protected topicService: TopicService,
  ) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams => {
      this.topicService.getTopic(routeParams['id']);
    });
  }

}
