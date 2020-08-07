import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllRoutingModule } from './all-routing.module';
import {BrowseComponent} from './browse/browse.component';
import {BooksComponent} from './books/books.component';
import {LoginComponent} from './login/login.component';
import { AllComponent } from './all.component';
import {NavbarComponent} from '../static/navbar/navbar.component';
import {FooterComponent} from '../static/footer/footer.component';
import {RecommendedBookComponent} from './global-tools/recommended-book/recommended-book.component';
import {BookListComponent} from './global-tools/book-list/book-list.component';


@NgModule({
  declarations: [
    BrowseComponent,
    RecommendedBookComponent,
    BookListComponent,
    BooksComponent,
    LoginComponent,
    AllComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AllRoutingModule
  ]
})
export class AllModule { }
