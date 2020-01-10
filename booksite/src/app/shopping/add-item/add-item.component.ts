import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { timer } from 'rxjs';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private Router: Router) { }

  ngOnInit() {

    setTimeout(() => {
      this.Router.navigateByUrl('home');
    }, 2000);

  }

}
