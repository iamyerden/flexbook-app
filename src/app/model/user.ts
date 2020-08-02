export class User{
  id: number;
  firstName: string;
  secondName: string;
  books: any;


  constructor(id: number, firstName: string, secondName: string, books: any) {
    this.id = id;
    this.firstName = firstName;
    this.secondName = secondName;
    this.books = books;
  }
}
