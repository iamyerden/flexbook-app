import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) {}

  private bookUrl = '/api/books';

  recommendedBook(genreName: string): Observable<any>{
    return this.http.get<any>(`${this.bookUrl}/recommendedBook?genreName=${genreName}`);
  }

  getAll(): Observable<any> {
    return this.http.get<any>(`${this.bookUrl}/all`);
  }

  getBook(bookId: number): Observable<any>{
    return this.http.get<any>(`${this.bookUrl}/${bookId}`);
  }

  postBook(book: Book): Observable<any>{
    return this.http.post<any>(`${this.bookUrl}/add`, book);
  }

  updateBook(bookId: number, book: Book): Observable<any>{
    return this.http.put<any>(`${this.bookUrl}/${bookId}`, book);
  }

  deleteBook(bookId: number): Observable<any>{
    return this.http.delete(`${this.bookUrl}/${bookId}`);
  }

  getBooksByGenre(genreName: string): Observable<any>{
    return this.http.get<any>(`${this.bookUrl}/genre?genreName=${genreName}`);
  }

  recommendedGenres(): Observable<any>{
    return this.http.get<any>(`${this.bookUrl}/recommendedGenres`);
  }
}
