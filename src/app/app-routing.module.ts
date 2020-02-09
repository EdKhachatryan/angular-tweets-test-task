import { NgModule } from '@angular/core';
import {Routes, RouterModule, UrlSerializer} from '@angular/router';
import {HashtagSearchComponent} from './components/hashtag-search/hashtag-search.component';
import {UserSearchComponent} from './components/user-search/user-search.component';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';


const routes: Routes = [
  {path: 'hashtag-search', component: HashtagSearchComponent },
  {path: 'user-search', component: UserSearchComponent },
  {path: '', redirectTo: 'hashtag-search', pathMatch: 'full'}
];

@NgModule({
  imports: [ CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
