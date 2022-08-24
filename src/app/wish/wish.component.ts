import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit {

  constructor(private http:HttpClient, private cartservice:CartService) { }

  public wishes:any= [];

  ngOnInit(): void {
    this.cartservice.getWishItems().subscribe((res)=>{
    this.wishes = res;
    }) ;
    console.log(localStorage.getItem(this.wishes));
  }
  close(item:any){
    this.cartservice.cancel(item)
  }
}

   // this.http.get<any>('http://localhost:3000/address').subscribe((res:any)=>{
    //   this.wishes= res;
    //   console.log(this.wishes)
    // })