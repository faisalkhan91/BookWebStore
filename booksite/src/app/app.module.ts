import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { BookComponent } from './book/book.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AddBookComponent } from './book/add-book/add-book.component';
import { ListBookComponent } from './book/list-book/list-book.component';
import { RemoveBookComponent } from './book/remove-book/remove-book.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { AddItemComponent } from './shopping/add-item/add-item.component';
import { ListCartComponent } from './shopping/list-cart/list-cart.component';
import { RemoveItemComponent } from './shopping/remove-item/remove-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookComponent,
    FooterComponent,
    HomeComponent,
    AddBookComponent,
    ListBookComponent,
    RemoveBookComponent,
    ShoppingComponent,
    AddItemComponent,
    ListCartComponent,
    RemoveItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
