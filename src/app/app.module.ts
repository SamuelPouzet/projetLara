import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from "./auth/auth.module";
import {SiteModule} from "./site/site.module";
import {HttpClientModule} from "@angular/common/http";
import {GlobalModule} from "./global/global.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        AppRoutingModule,
        AuthModule,
        BrowserModule,
        HttpClientModule,
        SiteModule,
        GlobalModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
