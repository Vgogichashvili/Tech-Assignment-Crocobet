import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersPgComponent } from './users-pg/users-pg.component';
import { UserPostsPgComponent } from './user-posts-pg/user-posts-pg.component';
import { FullUserInfoPgComponent } from './full-user-info-pg/full-user-info-pg.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersPgComponent,
    UserPostsPgComponent,
    FullUserInfoPgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
