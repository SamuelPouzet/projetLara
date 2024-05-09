import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { HomeComponent } from './component/home/home.component';
import { TestauthComponent } from './component/testauth/testauth.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './profile/forms/user/user.component';
import { PasswordComponent } from './profile/forms/password/password.component';
import { SettingsComponent } from './profile/forms/settings/settings.component';
import { SignComponent } from './profile/forms/sign/sign.component';
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import { AccountComponent } from './profile/forms/account/account.component';
import { AvatarComponent } from './profile/forms/avatar/avatar.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CategoryComponent } from './component/category/category.component';
import { TopicComponent } from './component/topic/topic.component';
import { TopicsComponent } from './component/topics/topics.component';
import { PostsComponent } from './component/posts/posts.component';
import { PostComponent } from './component/post/post.component';
import {GlobalModule} from "../global/global.module";
import { PreviewComponent } from './component/preview/preview.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    HomeComponent,
    TestauthComponent,
    ProfileComponent,
    UserComponent,
    PasswordComponent,
    SettingsComponent,
    SignComponent,
    AccountComponent,
    AvatarComponent,
    CategoryComponent,
    TopicComponent,
    TopicsComponent,
    PostsComponent,
    PostComponent,
    PreviewComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    CKEditorModule,
    ReactiveFormsModule,
    GlobalModule
  ]
})
export class SiteModule { }
