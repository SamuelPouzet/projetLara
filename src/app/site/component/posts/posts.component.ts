import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../service/post.service";
import {CkeditorService} from "../../../global/service/ckeditor.service";
import Editor from "@ckeditor/ckeditor5-build-classic";
import {ContentService} from "../../service/content.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  protected post$ = this.postService.post;
  protected topicId!: number;
  protected contentForm!: FormGroup;
  protected contentControl = new FormControl('');

  constructor(
    protected activeRoute: ActivatedRoute,
    protected router: Router,
    protected postService: PostService,
    protected ckService: CkeditorService,
    protected contentService: ContentService,
    protected formBuilder: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams => {
      this.topicId = routeParams['id'];
      this.postService.getTopic(this.topicId);
      if (this.canQuickRespond()) {
        this.contentForm = this.formBuilder.group({
          contentControl: this.contentControl,
        });
      }
    });
  }

  canQuickRespond(): boolean {
    return true;
  }

  protected preview() {
    if(this.contentControl.value) {
      this.contentService.setContent(this.contentControl.value);
      this.router.navigate(['preview', this.topicId]);
    }
  }

  protected save() {
    if(this.contentControl.value) {
      this.postService.addPost(this.contentControl.value, this.topicId).subscribe(()=>{
        location.reload();
      });
    }
  }

  protected readonly Editor = Editor;
}
