import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from "./auth/auth.module";
import {SiteModule} from "./site/site.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {GlobalModule} from "./global/global.module";
import {AuthInterceptor} from "./auth/helper/auth.interceptor";

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
  providers: [{provide : HTTP_INTERCEPTORS, useClass : AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
