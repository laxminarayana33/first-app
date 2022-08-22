import { Component, OnInit, Input } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public carts:any[] = [];
  public gTotal!: number ;
  public quantity:number = 1;
  cart: any;


  constructor(private cartservice:CartService) { }

  ngOnInit() {
    this.cartservice.getItems().subscribe((res)=>{
      this.carts = res;
      this.gTotal = this.cartservice.total();
    })
    // this.carts = JSON.parse(localStorage.getItem('carts')!)

    // this.cartservice.getCartItems();


  }
  remove(cart:any){
    this.cartservice.removeItem(cart);
  }
  emptycart(){
    this.cartservice.removeAll();
  }

  inc(item:any){
    this.carts.map((a:any)=>{
      if(item.name === a.name){
        this.quantity++;
      }
    });   
  }
  dec(item:any){
    if(this.quantity>1){
      this.quantity--;
    }
  }
}
