import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  welcome: string = "Please find all the books here! Feel free to browse through our collection. Best rates on the market.";

  constructor() { }

  ngOnInit() {
  }

}
