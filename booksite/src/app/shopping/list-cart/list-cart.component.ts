import { Component, OnInit } from '@angular/core';
import { Order } from '../order.model';
import { Book } from 'src/app/book/book.model';
import { OrderapiService } from 'src/app/orderapi.service';
import { BookapiService } from 'src/app/bookapi.service';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-list-cart',
  templateUrl: './list-cart.component.html',
  styleUrls: ['./list-cart.component.css']
})
export class ListCartComponent implements OnInit {

  books: Book [] = [{bookId:1, bookCode: 'Xz234wdfw', bookName: 'Pyhton', email: 'fk@gmail.com', author: 'Faisal', price: '22'},
                   {bookId:2, bookCode: 'Gsdfd24r2', bookName: 'C++', email: 'meg@gmail.com', author: 'Megha', price: '10'},
                   {bookId:3, bookCode: 'adaRT23H', bookName: 'Angular', email: 'chandu@gmail.com', author: 'Chandni', price: '7'}];
  
  orders: Order[] = [];

  constructor(private OrderapiService: OrderapiService, private BookapiService: BookapiService) { }

  ngOnInit() {
    this.books = this.BookapiService.listbooks();
  }

  DeleteBook()
  {
    // $('a.remove').click(function(){
    //   event.preventDefault();
    //   $( this ).parent().parent().parent().hide( 400 );
    // })
  }

}
