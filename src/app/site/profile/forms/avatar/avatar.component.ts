import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Observable, startWith} from "rxjs";
import {User} from "../../../../auth/interface/user";
import {ProfileService} from "../../service/profile.service";

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit{
  @Input() user: User | null = null;
  imagePreview!: Observable<any>;

  urlControl = new FormControl('');

  imageForm: FormGroup = this.formBuilder.group({
    imageUrl: this.urlControl
  });

  constructor(
    protected formBuilder: FormBuilder,
    protected profileService: ProfileService,
  ) {
  }

  ngOnInit() {
    this.imagePreview =
      this.imageForm.valueChanges
        .pipe(
          startWith({imageUrl : this.user?.avatar})
        )
    ;
    this.imageForm.patchValue({imageUrl : this.user?.avatar})
  }

  protected onSubmit() {
    const avatar = { path: this.imageForm.value.imageUrl};
    this.profileService.updateAvatar(avatar);
  }
}
