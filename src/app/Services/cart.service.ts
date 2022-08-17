import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  public cart:any = [];
  public carts :any = [] ;
  public itemsData = new BehaviorSubject<any>([])

  // localStorage.setItem('cart', JSON.stringify([]));

  getItems(){
    // return JSON.parse(localStorage.getItem('cart')||'{}');
    return this.itemsData.asObservable()
  }
  
  setItem(item:any){
    this.carts.push(item);
    this.itemsData.next((item));
  }

  addCart(item:any){
    this.carts.push(item);
    this.itemsData.next(this.carts);
    this.total();
    localStorage.setItem('carts', JSON.stringify(this.carts));
    JSON.parse(localStorage.getItem('carts')||'{}');
    // console.log(this.carts);
  }
  total():number{
    let total = 0;
    this.carts.map((a:any)=>{
      total += a.total;
    })
    return total;
  }

  removeItem(item:any){
    this.carts.map((i:any, index:any)=>{
      if(item.id === i.id){
        this.carts.splice(index,1);
      }
    });
    this.itemsData.next(this.carts)
  }
  removeAll(){
    this.carts = [];
  }
}
