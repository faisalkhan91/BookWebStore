import { Component, OnInit } from '@angular/core';
import { Order } from '../order.model';
import { Book } from 'src/app/book/book.model';
import { OrderapiService } from 'src/app/orderapi.service';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-list-cart',
  templateUrl: './list-cart.component.html',
  styleUrls: ['./list-cart.component.css']
})
export class ListCartComponent implements OnInit {

  books: Book[] = [{bookId:1, name: 'Pyhton', email: 'fk@gmail.com', author: 'Faisal', price: '22'},
  {bookId:2, name: 'C++', email: 'meg@gmail.com', author: 'Megha', price: '10'},
  {bookId:3, name: 'Angular', email: 'chandu@gmail.com', author: 'Chandni', price: '7'}];

  orders: Order[] = [];

  constructor(private BookapiService: OrderapiService) { }

  ngOnInit() {

    // $('a.remove').click(function(){
    //   event.preventDefault();
    //   $( this ).parent().parent().parent().hide( 400 );
    // })

    this.books;
  }

}
