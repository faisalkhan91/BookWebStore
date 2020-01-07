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
  codeGenerated = '';

  constructor(private BookapiService: BookapiService) { }

  ngOnInit() {
  }

  onSubmit()
  {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    const stringLength = 10;
    let randomstring = '';
    for (let i = 0; i < stringLength; i++)
    {
    const rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
    }

    this.codeGenerated = randomstring;
    console.log(this.codeGenerated);

    //console.log(this.signupForm.value);
    this.book = new Book(this.codeGenerated, this.signupForm.value.name, this.signupForm.value.author, this.signupForm.value.email, this.signupForm.value.price);
    console.log(this.book);
    this.BookapiService.addbook(this.book);
  }

}
