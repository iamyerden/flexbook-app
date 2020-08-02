import { Component, OnInit } from '@angular/core';
import {BooksService} from '../../../service/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: any;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
  }

}
