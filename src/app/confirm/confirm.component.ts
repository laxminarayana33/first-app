import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor() { }

  public orderId:number = 12345678 ;

  ngOnInit() {
  //   const orderId = Math.floor((Math.random() * 100) + 1);
  // // console.log(orderId)  ;
  //   return orderId
  }

// const orderId = Math.floor(Math.random()*100)+1;


}
