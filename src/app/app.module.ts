import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashtagSearchComponent } from './components/hashtag-search/hashtag-search.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TextCutPipe } from './pipes/text-cut/text-cut.pipe';
import { ZeroToCharPipe } from './pipes/zero-to-char/zero-to-char.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HashtagSearchComponent,
    UserSearchComponent,
    TextCutPipe,
    ZeroToCharPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbTabsetModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
