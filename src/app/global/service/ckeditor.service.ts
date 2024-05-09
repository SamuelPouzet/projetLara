import { Injectable } from '@angular/core';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@Injectable({
  providedIn: 'root'
})
export class CkeditorService {
  public Editor = ClassicEditor;
  public config = {
    toolbar: [
      'undo', 'redo','|', 'heading','|', 'fontsize', 'fontColor', 'fontBackgroundColor','|', 'bold', 'italic'
    ],
    shouldNotGroupWhenFull: true
  };
  public editorData = '';

  constructor() { }
}
