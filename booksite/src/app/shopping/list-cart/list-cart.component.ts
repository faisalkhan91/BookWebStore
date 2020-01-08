import { Component, OnInit } from '@angular/core';
import { Order } from '../order.model';
import { Book } from 'src/app/book/book.model';
import { OrderapiService } from 'src/app/orderapi.service';
import { BookapiService } from 'src/app/bookapi.service';
import { CartlocalService } from 'src/app/cartlocal.service';
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
  temp: Book;

  constructor(private CartlocalService: CartlocalService, private BookapiService: BookapiService) { }

  ngOnInit() {
    //this.books = this.BookapiService.listbooks();
    this.books = this.CartlocalService.listFromCart();

    // this.books.forEach(eachbook => {
    //   //console.log(eachbook);

    //   if(eachbook.bookCode != this.temp.bookCode)
    //   {

    //   }
    // });

    
  }

  DeleteBook()
  {
    // $('a.remove').click(function(){
    //   event.preventDefault();
    //   $( this ).parent().parent().parent().hide( 400 );
    // })
  }

}
