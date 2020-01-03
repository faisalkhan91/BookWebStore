import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-list-cart',
  templateUrl: './list-cart.component.html',
  styleUrls: ['./list-cart.component.css']
})
export class ListCartComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('a.remove').click(function(){
      event.preventDefault();
      $( this ).parent().parent().parent().hide( 400 );
    })
  }

}
