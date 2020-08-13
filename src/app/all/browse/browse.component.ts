import { Component, OnInit } from '@angular/core';
import {BooksService} from '../../service/books.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  genreList: string[] = ['Fantasy', 'Adventure', 'Mythology'];

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    // this.booksService.recommendedGenres().subscribe(data => {
    //   console.log(data);
    // });
  }

}
