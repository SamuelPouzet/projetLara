import {Component, OnInit} from '@angular/core';
import {ContentService} from "../../service/content.service";
import {ActivatedRoute, Router} from "@angular/router";
import Editor from "@ckeditor/ckeditor5-build-classic";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {CkeditorService} from "../../../global/service/ckeditor.service";
import {Observable} from "rxjs";
import {PostService} from "../../service/post.service";
import {Post} from "../../../global/interface/post";

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  protected content$: Observable<string> = this.contentService.content$;
  protected contentForm!: FormGroup;
  protected contentControl = new FormControl('');
  protected topicId!: number;
  protected post: Partial<Post> = { //@todo retirer le partial et aller chercher l'auteur en bdd + appeler le post component pour le template
    content: '',
    date: new Date().toDateString(),
  };

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected contentService: ContentService,
    protected router: Router,
    protected formBuilder: FormBuilder,
    protected ckService: CkeditorService,
    protected postService: PostService,
  ) {
  }

  ngOnInit() {
    this.contentForm = this.formBuilder.group({
      contentControl: this.contentControl,
    });
    this.activatedRoute.params.subscribe(routeParams => {
      this.topicId = routeParams['id'];
    });
    this.content$.subscribe(content => {
      if (!content || content === '') {
        this.router.navigate(['posts', this.topicId])
      }
      this.post.content = content;
      this.contentControl.patchValue(content);
    })

  }

  protected preview() {
    if (this.contentControl.value) {
      this.contentService.setContent(this.contentControl.value);
      this.router.navigate(['preview', this.topicId]);
    }
  }

  protected save() {

    if (this.contentControl.value) {
      this.postService.addPost(this.contentControl.value, this.topicId).subscribe(
        () => {
          this.router.navigate(['posts', this.topicId]);
        }
      );
    }
  }

  protected readonly Editor = Editor;
}
