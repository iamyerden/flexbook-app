import { Component, OnInit } from '@angular/core';
import {Book} from '../../../model/book';
import {BooksService} from '../../../service/books.service';

@Component({
  selector: 'app-recommended-book',
  templateUrl: './recommended-book.component.html',
  styleUrls: ['./recommended-book.component.scss']
})
export class RecommendedBookComponent implements OnInit {

  bookId: number;
  book: Book;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.bookId = 1;
    this.booksService.getAll().subscribe(data => {
      // this.book = data;
      console.log(data);
    });
  }

}
