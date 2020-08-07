import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllComponent} from './all.component';
import {BrowseComponent} from './browse/browse.component';
import {BooksComponent} from './books/books.component';


const routes: Routes = [
  {
    path: '',
    component: AllComponent,
    children: [
      { path: 'browse', component: BrowseComponent },
      { path: 'browse/books', component: BooksComponent },
      { path: '', redirectTo: 'browse' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllRoutingModule { }
