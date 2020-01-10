import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { AddBookComponent } from './book/add-book/add-book.component';
import { ListBookComponent } from './book/list-book/list-book.component';
import { RemoveBookComponent } from './book/remove-book/remove-book.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RemoveItemComponent } from './shopping/remove-item/remove-item.component';
import { AddItemComponent } from './shopping/add-item/add-item.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},

  {path: 'book', component: BookComponent, children: [
  ]},
  {path: 'book/add', component: AddBookComponent},
  {path: 'book/remove', component: RemoveBookComponent},

  {path: 'shopping', component: ShoppingComponent, children: [
    {path: 'removeitem', component: RemoveItemComponent}
  ]},
  {path: 'shopping/additem', component: AddItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
