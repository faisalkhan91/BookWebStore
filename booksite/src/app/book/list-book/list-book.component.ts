import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookapiService } from 'src/app/bookapi.service'

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  books: Book [] = [{bookId:1, name: 'Pyhton', email: 'fk@gmail.com', author: 'Faisal', price: '22'},
                   {bookId:2, name: 'C++', email: 'meg@gmail.com', author: 'Megha', price: '10'},
                   {bookId:3, name: 'Angular', email: 'chandu@gmail.com', author: 'Chandni', price: '7'}];
  
  constructor(private BookapiService: BookapiService) { }

  ngOnInit() {
    //console.log(this.books);
    //console.log(this.BookapiService.listbook());
    // -- this.books = this.BookapiService.listbooks();
    this.books;
    //console.log(this.books);
  }

}
