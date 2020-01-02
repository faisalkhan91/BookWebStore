import { Component, OnInit } from '@angular/core';
import { BookapiService } from 'src/app/bookapi.service';

@Component({
  selector: 'app-remove-book',
  templateUrl: './remove-book.component.html',
  styleUrls: ['./remove-book.component.css']
})
export class RemoveBookComponent implements OnInit {

  constructor(private BookapiService: BookapiService) { }

  ngOnInit() {
    this.BookapiService.removebooks();
  }
}
