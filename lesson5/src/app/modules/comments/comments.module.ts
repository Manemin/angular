import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentService} from "./services/comment.service";
import {RouterModule} from "@angular/router";
import {CommentComponent} from './components/comment/comment.component';
import {HttpClientModule} from "@angular/common/http";
import {AllCommentsComponent} from "./components/all-comments/all-comments.component";


@NgModule({
  declarations: [CommentComponent, AllCommentsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: '', component: AllCommentsComponent}
    ])
  ],
  providers: [CommentService]
})
export class CommentsModule {
}
