import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './static/navbar/navbar.component';
import { FooterComponent } from './static/footer/footer.component';
import { BrowseComponent } from './all/browse/browse.component';
import { BookListComponent } from './all/browse/book-list/book-list.component';
import { RecommendedBookComponent } from './all/browse/recommended-book/recommended-book.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BrowseComponent,
    RecommendedBookComponent,
    BookListComponent,
    RecommendedBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
