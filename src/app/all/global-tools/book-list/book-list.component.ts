import {Component, Input, OnInit} from '@angular/core';
import {BooksService} from '../../../service/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  @Input() genreName: string;

  books: any;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.getBooksByGenre(this.genreName).subscribe(data => {
      this.books = data;
      console.log(this.genreName);
      console.log(this.books);

    });
  }

}
