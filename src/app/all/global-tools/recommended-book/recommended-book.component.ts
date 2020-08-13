import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../../model/book';
import {BooksService} from '../../../service/books.service';
import {User} from '../../../model/user';

@Component({
  selector: 'app-recommended-book',
  templateUrl: './recommended-book.component.html',
  styleUrls: ['./recommended-book.component.scss']
})
export class RecommendedBookComponent implements OnInit {

  @Input() genreName: string;

  book: Book;
  user: User;

  show = true;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.recommendedBook(this.genreName).subscribe(data => {
      this.book = data;
      this.book.genre = data.genreDTOS;
      console.log(this.book.genre);
    });
  }

  addToMyList(){
    console.log('Here will be code to add to My List');
  }

}
