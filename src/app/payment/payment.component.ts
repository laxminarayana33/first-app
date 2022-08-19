import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor( private fb:FormBuilder, private cartservice:CartService, private http:HttpClient, private router:Router) { }
  @Input() activestage = 1;

  public carts:any[] = [];
  public gTotal!: number ;
  public quantity:number = 1;


  ngOnInit(): void {
    this.cartservice.getItems().subscribe((res)=>{
      this.carts = res;
      this.gTotal = this.cartservice.total();
    })
    
  }
  loginForm = this.fb.group({
    username:['', Validators.required],
    password:['', Validators.required]
  })

  onSubmit(){
    this.http.get<any>('http://localhost:3000/users').subscribe(res=>{
    const user = res.find((obj:any)=>{
      return obj.username === this.loginForm.value.username && obj.password === this.loginForm.value.password
    });
    if(user){
      alert("login sucessfull");
      this.loginForm.reset();
      this.router.navigate(['shipping']);
    }else{
      alert("user not found");
    }    
    },err=>{
      alert("something went wrong")
    })
  }

  inc(){
    this.quantity++;
   }
   dec(){
     if(this.quantity>1){
       this.quantity--;
     }
   }
}
