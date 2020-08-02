import { Component, OnInit } from '@angular/core';
import {Book} from '../../../model/book';
import {BooksService} from '../../../service/books.service';
import {User} from '../../../model/user';

@Component({
  selector: 'app-recommended-book',
  templateUrl: './recommended-book.component.html',
  styleUrls: ['./recommended-book.component.scss']
})
export class RecommendedBookComponent implements OnInit {

  bookId: number;
  book: Book;
  user: User;

  show = true;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.bookId = 1;
    // this.booksService.getBook(this.bookId).subscribe(data => {
    //   this.book = data;
    // });
  }

  addToMyList(){
    console.log('Here will be code to add to My List');
  }

}
