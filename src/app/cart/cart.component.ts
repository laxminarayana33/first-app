import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public carts:any[] = [];
  public gTotal!: number ;


  constructor(private cartservice:CartService) { }

  ngOnInit() {
    this.cartservice.getItems().subscribe(res=>{
      this.carts = res;
      this.gTotal = this.cartservice.total();
    })
    
 
  }

  remove(cart:any){
    this.cartservice.removeItem(cart);
  }
  
  


}
