import { Component, OnInit } from '@angular/core';
import { BookapiService } from 'src/app/bookapi.service';
import { Book } from '../book.model';
import { Router } from '@angular/router'

@Component({
  selector: 'app-remove-book',
  templateUrl: './remove-book.component.html',
  styleUrls: ['./remove-book.component.css']
})
export class RemoveBookComponent implements OnInit {

  books: Book[] =[];

  constructor(private BookapiService: BookapiService, private Router: Router) { }

  ngOnInit() {
    this.books = this.BookapiService.listbooks();
    //console.log(this.books);
    this.removeBooks(this.books); //Calling the function below.

    setTimeout(() => {
      this.Router.navigateByUrl('book');
    }, 3000);   
  }

  removeBooks(books: Book[])
  {
    //console.log(this.books);
    this.books.forEach((book, index) => {
      console.log(index);
      //this.BookapiService.removebooks(book.bookId);
    });
  }
}
