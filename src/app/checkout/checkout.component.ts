import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public carts:any[] = [];
  public gTotal!: number ;
  constructor( private fb:FormBuilder, private cartservice:CartService, private http:HttpClient, private router:Router) { }

  public show = 1;


  ngOnInit(): void {
    this.cartservice.getItems().subscribe((res)=>{
      this.carts = res;
      this.gTotal = this.cartservice.total();
    })
  }

  pay(index:number){
    this.show = index;
  }

}
