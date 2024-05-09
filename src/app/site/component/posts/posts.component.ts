import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../service/post.service";
import {CkeditorService} from "../../../global/service/ckeditor.service";
import Editor from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  protected post$ = this.postService.post;

  constructor(
    protected activeRoute: ActivatedRoute,
    protected postService: PostService,
    protected ckService: CkeditorService,
  ) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams => {
      this.postService.getTopic(routeParams['id']);
    });
  }

  canQuickRespond(): boolean {
    return true;
  }

  protected readonly Editor = Editor;
}
