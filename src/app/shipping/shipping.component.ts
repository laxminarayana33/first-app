import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  constructor( private fb:FormBuilder, private cartservice:CartService, private http:HttpClient, private router:Router) { }

  public carts:any[] = [];
  public gTotal!: number ;
  public quantity:number = 1;
  custdetails:boolean = true;
  custaddress:boolean = false;

  ngOnInit(): void {
    this.cartservice.getItems().subscribe((res)=>{
      this.carts = res;
      this.gTotal = this.cartservice.total();
    })
  }
 simpleForm = this.fb.group({
  firstname:[''],
  lastname:[''],
  email:['']
 })
 addressForm= this.fb.group({
  fullname:[''],
  phonenumber:[''],
  doorno:[''],
  street:[''],
  city:[''],
  state:[''],
  pincode:[''],
  
 })
  onsubmit(){
   const data = this.simpleForm.value
    console.log(data)
    this.simpleForm.reset()
    this.custaddress = true;
    this.custdetails = false;
  }
  submitAddress(){
    const addData = this.addressForm.value
    console.log(addData);
    this.addressForm.reset();
    this.router.navigate(['checkout']);
  }
  inc(){
    this.quantity++;
   }
   dec(){
     if(this.quantity>1){
       this.quantity--;
     }
   }
   details(){
    this.custdetails = true;
    this.custaddress = false;

   }
   address(){
    this.custaddress = true;
    this.custdetails = false;

   }



}
