import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TopicService} from "../../service/topic.service";
import {BreadcrumbsService} from "../../service/breadcrumbs.service";

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
    protected breadcrumbService: BreadcrumbsService,
  ) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams => {
      const id = routeParams['id'];
      this.breadcrumbService.getBreadCrumbs(id);
      this.topicService.getTopic(id);
    });
  }

}
