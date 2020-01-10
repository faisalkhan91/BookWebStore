import { Component, OnInit } from '@angular/core';
import { Order } from '../order.model';
import { Book } from 'src/app/book/book.model';
import { OrderapiService } from 'src/app/orderapi.service';
import { BookapiService } from 'src/app/bookapi.service';
import { CartlocalService } from 'src/app/cartlocal.service';
import { Router } from '@angular/router'
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-list-cart',
  templateUrl: './list-cart.component.html',
  styleUrls: ['./list-cart.component.css']
})
export class ListCartComponent implements OnInit {

  books: Book [] = [{bookId:1, bookCode: 'Xz234wdfw', bookName: 'Pyhton', email: 'fk@gmail.com', author: 'Faisal', price: 22},
                   {bookId:2, bookCode: 'Gsdfd24r2', bookName: 'C++', email: 'meg@gmail.com', author: 'Megha', price: 10},
                   {bookId:3, bookCode: 'adaRT23H', bookName: 'Angular', email: 'chandu@gmail.com', author: 'Chandni', price: 7}];
  
  orders: Order[] = [];
  order: Order;
  subTotalPrice: number = 0;
  discount: number = 0;
  totalPrice: number = 0;
  shipping: number = 0;
  tax: number = 0;
  count: number = 0;

  orderGenerated = '';

  constructor(private CartlocalService: CartlocalService, private BookapiService: BookapiService, private OrderapiService: OrderapiService, private Router: Router) { }

  ngOnInit() {
    //this.books = this.BookapiService.listbooks();
    this.books = this.CartlocalService.listFromCart();

    this.books.forEach(eachbook => {
      this.subTotalPrice += eachbook.price;
      //console.log(this.price);
    });

    this.subTotalPrice;
    this.discount;
    if(this.subTotalPrice != 0)
    {
      this.shipping = 5;
    }
    this.tax = Number((this.subTotalPrice/7).toFixed(2));
    this.totalPrice = this.subTotalPrice + this.shipping + Number(this.tax.toFixed(2));
  }

  DeleteBook(index: number)
  {
    // $('a.remove').click(function(){
    //   event.preventDefault();
    //   $( this ).parent().parent().parent().hide( 400 );
    // })
    this.CartlocalService.removeFromCart(index);
    this.subTotalPrice = 0;
    this.discount = 0;
    if(this.subTotalPrice == 0)
    {
      this.shipping = 5;
    }
    this.tax = 0;
    this.totalPrice = 0;
  }

  AddPromo(promo: string)
  {
    //console.log(promo);
    if(promo == "10OFF")
    {
      this.discount = (this.subTotalPrice/10)
      this.subTotalPrice -= this.discount;
      this.tax = Number((this.subTotalPrice/7).toFixed(2));
      this.totalPrice = Number((this.subTotalPrice + this.shipping + Number(this.tax.toFixed(2))).toFixed(2));
    }
    else if (promo == "20TCS")
    {
      this.discount = (2*(this.subTotalPrice/10));
      this.subTotalPrice -= this.discount;
      this.tax = Number((this.subTotalPrice/7).toFixed(2));
      this.totalPrice = Number((this.subTotalPrice + this.shipping + Number(this.tax.toFixed(2))).toFixed(2));
    }
  }

  GenerateOrder()
  {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    const stringLength = 10;
    let randomstring = '';
    for (let i = 0; i < stringLength; i++)
    {
    const rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
    }
    this.orderGenerated = randomstring;
  }

  SubmitOrder()
  {
    //console.log(this.books);
    // this.books.forEach(book => {
    //   this.orders.push({orderId: 1, quantity: 1, totalPrice: book.price, bookId: book.bookId,})
    // });
    this.GenerateOrder();

    var keys = Object.keys(this.books);
    var len = keys.length;
    this.count = len;

    this.books.forEach(book => {
      this.order = new Order(this.orderGenerated, book.bookId, 1, (this.totalPrice/this.count));
      this.OrderapiService.placeOrder(this.order);
    });

    //console.log(this.orders);

    this.Router.navigateByUrl('shopping/additem')
  }

}
