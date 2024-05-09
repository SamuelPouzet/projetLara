import { Component } from '@angular/core';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent {
  public Editor = ClassicEditor;
  public config = {
    toolbar: [
      'undo', 'redo','|', 'heading','|', 'fontsize', 'fontColor', 'fontBackgroundColor','|', 'bold', 'italic'
    ],
    shouldNotGroupWhenFull: true
  };
  public editorData = '';

  signControl = new FormControl('');

  signForm: FormGroup = this.formBuilder.group({
    signContent: this.signControl
  });

  constructor(
    protected formBuilder: FormBuilder,
  ) {
  }

  public onSubmit() {
    const content = { content: this.signForm.value.signContent};
    console.log(content);
  }
}
