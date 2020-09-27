import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUsersComponent } from './components/Users/all-users/all-users.component';
import { SingleUserComponent } from './components/Users/single-user/single-user.component';
import {HttpClientModule} from "@angular/common/http";
import { AllPostsComponent } from './components/Posts/all-posts/all-posts.component';
import { SinglePostComponent } from './components/Posts/single-post/single-post.component';
import { AllCommentsComponent } from './components/Comments/all-comments/all-comments.component';
import { SingleCommentComponent } from './components/Comments/single-comment/single-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    SingleUserComponent,
    AllPostsComponent,
    SinglePostComponent,
    AllCommentsComponent,
    SingleCommentComponent
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
