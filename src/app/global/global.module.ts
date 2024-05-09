import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterLink} from "@angular/router";
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";



@NgModule({
    declarations: [
        NavbarComponent
    ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    CKEditorModule
  ]
})
export class GlobalModule { }
