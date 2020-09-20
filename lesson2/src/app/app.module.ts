import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { HomeComponent } from './components/home/home.component';
import { FullPostInfoComponent } from './components/full-post-info/full-post-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SinglePostComponent,
    AllPostsComponent,
    HomeComponent,
    FullPostInfoComponent
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
