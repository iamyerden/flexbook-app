export class Book {
  id: number;
  title: string;
  author: string;
  bookYear: number;
  description: string;
  numOfChapters: number;
  genre: string[];
  isbn: string;
  ageRating: number;
  users: [];
  viewCount: number;
  // tslint:disable-next-line:variable-name
  book_published_at: any;

  constructor(id: number, title: string, author: string, bookYear: number, description: string, numOfChapters: number, genre: string[], isbn: string, ageRating: number, users: [], viewCount: number, book_published_at: any) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.bookYear = bookYear;
    this.description = description;
    this.numOfChapters = numOfChapters;
    this.genre = genre;
    this.isbn = isbn;
    this.ageRating = ageRating;
    this.users = users;
    this.viewCount = viewCount;
    this.book_published_at = book_published_at;
  }
}
