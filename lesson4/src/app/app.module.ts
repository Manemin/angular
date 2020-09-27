import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUsersComponent } from './components/user/all-users/all-users.component';
import { UserComponent } from './components/user/user/user.component';
import {HttpClientModule} from "@angular/common/http";
import { UserInfoComponent } from './components/user/user-info/user-info.component';
import { AllPostsComponent } from './components/post/all-posts/all-posts.component';
import { PostComponent } from './components/post/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent,
    UserInfoComponent,
    AllPostsComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
