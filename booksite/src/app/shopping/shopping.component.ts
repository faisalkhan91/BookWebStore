import { Component, OnInit } from '@angular/core';
import { Book } from '../book/book.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  books: Book [] = [{bookId:1, bookCode: 'Xz234wdfw', bookName: 'Pyhton', email: 'fk@gmail.com', author: 'Faisal', price: '22'},
                   {bookId:2, bookCode: 'Gsdfd24r2', bookName: 'C++', email: 'meg@gmail.com', author: 'Megha', price: '10'},
                   {bookId:3, bookCode: 'adaRT23H', bookName: 'Angular', email: 'chandu@gmail.com', author: 'Chandni', price: '7'}];
  
  constructor() { }

  ngOnInit() {
    this.books;
  }

}
