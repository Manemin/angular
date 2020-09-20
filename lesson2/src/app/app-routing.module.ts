import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AllPostsComponent} from "./components/all-posts/all-posts.component";
import {FullPostInfoComponent} from "./components/full-post-info/full-post-info.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'posts', component: AllPostsComponent,
    // children: [{path: ':id', component: FullPostInfoComponent}]
  },
  {path: 'posts/:id', component: FullPostInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
