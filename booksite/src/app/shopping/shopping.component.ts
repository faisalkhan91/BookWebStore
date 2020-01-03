import { Component, OnInit } from '@angular/core';
import { Book } from '../book/book.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  books: Book [] = [{bookId:1, name: 'Pyhton', email: 'fk@gmail.com', author: 'Faisal', price: '22'},
                   {bookId:2, name: 'C++', email: 'meg@gmail.com', author: 'Megha', price: '10'},
                   {bookId:3, name: 'Angular', email: 'chandu@gmail.com', author: 'Chandni', price: '7'}];
  
  constructor() { }

  ngOnInit() {
  }

}
