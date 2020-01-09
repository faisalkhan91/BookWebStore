import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book/book.model';

@Injectable({
  providedIn: 'root'
})
export class CartlocalService {

  cart: Book [] =[];

  constructor(private http:HttpClient) { }

  addToCart(book: Book)
  {
    this.cart.push(book);
  }

  listFromCart()
  {
    return this.cart;
  }

  removeFromCart(index: number)
  {
    this.cart.splice(index, 1);
  }

}
