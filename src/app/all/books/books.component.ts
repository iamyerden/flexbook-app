import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  genreGroup = 'Book';
  genreList: string[] = ['Novel', 'Horror', 'Young Adult'];

  constructor() { }

  ngOnInit(): void {
  }

}
