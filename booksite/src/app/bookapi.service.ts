import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';  
import { Book } from './book/book.model';

const httpOptions = {  
  headers: new HttpHeaders({  
      'Content-Type': 'application/json'  
  })  
};

@Injectable({
  providedIn: 'root'
})
export class BookapiService {

  url = 'http://localhost:61680/api/Books';
  books: Book[] = [];

  constructor(private http: HttpClient) { }

  addbook(book: Book)
  {
      this.http.post(this.url, book).subscribe(
      response=>{console.log(response)}),
      error=>{console.error();
      };
  }

  listbooks() : Book[]
  {
      this.books = [];
      this.http.get<Book[]>(this.url).subscribe(
      booklistResponse=>{
        for(let book in booklistResponse)
        {
          this.books.push(booklistResponse[book]);
        }
      }),
      error=>{console.error();
      };
      return this.books;
  }

  getBook(id: number): Book
  {
    return this.books[id];
  }

  removebooks(id: number)
  {
    this.http.delete(this.url).subscribe(
      response=>{console.log(response)}),
      error=>{console.error();
      };
  }
}
