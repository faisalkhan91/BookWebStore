import { Injectable } from '@angular/core';
import { Order } from './shopping/order.model';
import { HttpClient } from '@angular/common/http';
import { Book } from './book/book.model';

@Injectable({
  providedIn: 'root'
})
export class OrderapiService {

  orderurl = 'http://localhost:61680/api/Orders';
  orders: Order[] = [];

  constructor(private http:HttpClient) { }

  placeOrder(order: Order)
  {
    this.http.post(this.orderurl, order).subscribe(
      response=>{console.log(response)}),
      error=>{console.error();
      };
  }

  deleteorder()
  {

  }

}
