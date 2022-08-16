import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  public carts :any = [] ;
  public itemsData = new BehaviorSubject<any>([])

  getItems(){
    return this.itemsData.asObservable()
  }
  
  setItem(item:any){
    this.carts.push(item);
    this.itemsData.next((item));
  }

  addCart(item:any){
    this.carts.push(item);
    this.itemsData.next(this.carts);
    console.log(this.carts);
    this.total();
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
    })
  }
  removeAll(){
    this.carts = [];
  }
}
