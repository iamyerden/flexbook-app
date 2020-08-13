import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  genreGroup = 'Comics';
  genreList: string[] = ['Fantasy', 'Adventure', 'Horror', 'Mystery'];

  constructor() { }

  ngOnInit(): void {
  }

}
