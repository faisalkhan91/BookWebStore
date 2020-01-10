import { Component, OnInit } from '@angular/core';
import { BookapiService } from 'src/app/bookapi.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-remove-book',
  templateUrl: './remove-book.component.html',
  styleUrls: ['./remove-book.component.css']
})
export class RemoveBookComponent implements OnInit {

  books: Book[] =[];

  constructor(private BookapiService: BookapiService) { }

  ngOnInit() {
    this.books = this.BookapiService.listbooks();
    this.books.forEach(book => {
      this.BookapiService.removebooks(book.bookId);
    });
  }
}
