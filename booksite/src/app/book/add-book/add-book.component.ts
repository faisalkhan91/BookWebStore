import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookapiService } from 'src/app/bookapi.service'
import { Book } from '../book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  @ViewChild('f', {static:true}) signupForm: NgForm;

  book: Book;
  id = Math.random().toString(36).substring(2);

  constructor(private BookapiService: BookapiService) { }

  ngOnInit() {
  }

  onSubmit()
  {
    //console.log(this.signupForm.value);
    this.book = new Book(parseInt(this.id), this.signupForm.value.name, this.signupForm.value.author, this.signupForm.value.email, this.signupForm.value.price);
    //console.log(this.book);
    this.BookapiService.addbook(this.book);
  }

}
