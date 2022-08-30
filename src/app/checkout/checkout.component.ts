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
  public paycard:boolean = false;
  public paybanking:boolean = false;
  public payupi:boolean = false;
  public paycash:boolean = false;
  public phonepe:boolean = false;
  public googlepe:boolean = false;



  ngOnInit(): void {
    this.cartservice.getItems().subscribe((res)=>{
      this.carts = res;
      this.gTotal = this.cartservice.total();
    })
  }

  pay(index:number){
    this.show = index;
  }

  onPhonePe(){
    this.phonepe =true;
    this.googlepe = false;

  }
  onGooglePe(){
    this.googlepe = true;
    this.phonepe =false;

  }

  card(){
    this.paycard = true;
    this.paybanking =false;
    this.payupi =false;
    this.paycash =false;
  }
  banking(){
    this.paybanking = true;
    this.paycard = false;
    this.payupi = false;
    this.paycash = false;
  }
  upi(){
    this.payupi = true;
    this.paycard = false;
    this.paybanking = false;
    this.paycash = false;
  }
  cash(){
    this.paycash = true;
    this.paycard =  false;
    this.paybanking =  false;
    this.payupi =  false;
  }

  cashPay(){
    alert('Thanks for shopping Your order is confirmed');
    this.router.navigate(['/confirm']);
    this.carts = [''];
  }
  cardPay(){
    alert('Your redirecting to bank page');
    // alert('Thanks for shopping your order is confirmed');
    this.router.navigate(['/confirm']);
    this.carts = [];
  }
  bankPay(){
    alert('Your redirecting to Net banking page')
    // alert('Thanks for shopping Your order is confirmed');
    this.router.navigate(['/confirm']);
    this.carts = [];
  }
  upiPay(){
    alert('Your redirecting to upi app in your phone')
    // alert('Thanks for shopping Your order is confirmed');
    this.router.navigate(['/confirm']);
    this.carts = [];
  }

}
