import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryListComponent } from './library/library-list/library-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LibraryBookComponent } from './library/library-book/library-book.component';
import { MemberListComponent } from './member/member-list/member-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LibraryListComponent,
    LibraryBookComponent,
    MemberListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
