import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookapiService } from 'src/app/bookapi.service';
import { CartlocalService } from 'src/app/cartlocal.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  books: Book [] = [{bookId:1, bookCode: 'Xz234wdfw', bookName: 'Pyhton', email: 'fk@gmail.com', author: 'Faisal', price: 22},
                   {bookId:2, bookCode: 'Gsdfd24r2', bookName: 'C++', email: 'meg@gmail.com', author: 'Megha', price: 10},
                   {bookId:3, bookCode: 'adaRT23H', bookName: 'Angular', email: 'chandu@gmail.com', author: 'Chandni', price: 7}];
  
  cart : Book [] = [];

  constructor(private BookapiService: BookapiService, private CartlocalService: CartlocalService) { }

  ngOnInit() {
    //console.log(this.books);
    //console.log(this.BookapiService.listbook());
    this.books = this.BookapiService.listbooks();
    //this.books;
    //console.log(this.books);
  }

  addToCart(bookCode: Book)
  {
    //console.log(bookCode);
    //this.cart.push(bookCode);
    this.CartlocalService.addToCart(bookCode);
    //console.log(this.cart);
  }

}
