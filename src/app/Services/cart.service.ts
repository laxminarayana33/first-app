import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  constructor() { }

  public carts :any = [] ;
  public items :any = [] ;
  public wishList :any = [] ;
  public itemsData = new BehaviorSubject<any>([]);
  public modalData = new BehaviorSubject<any>([]);
  public wishData = new BehaviorSubject<any>([]);
  public searchItem = new BehaviorSubject<string>("");


  getItems(){
    return this.itemsData.asObservable()
  }
  setItem(item:any){
    this.carts.push(item);
    this.itemsData.next((item));
  }

  getCartItems(){}


  addCart(item:any){
    this.carts.push(item);
    this.itemsData.next(this.carts);
    this.total();
    localStorage.setItem('carts', JSON.stringify(this.carts));
  }

  total():number{
    let total = 0;
    this.carts.map((a:any)=>{
      total += a.total;
    })
    return total;
  }
  // quantity(){
  //   let quantity = 1;
  //   this.carts.map((qnt:any)=>{
  //     quantity +=qnt.quantity;
  //   })
  //   return quantity;
  // }

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
    this.itemsData.next(this.carts)
  }
  modalSetItem(item:any){
    this.items.push(item)
    this.modalData.next((item));
  }
  modalGetItem(){
   return this.modalData.asObservable()
  }

  show(item:any){
    this.items.push(item);
    this.modalData.next(this.items);
// this.itemsData.next(this.items);
  }
  close(){
    this.items = [];
  }

  getWishItems(){
    return this.wishData.asObservable()
  }
  setWishItem(item:any){
    this.wishList.push(item);
    this.wishData.next((item));
  }

  wishItem(item:any){
    this.wishList.push(item);
    this.wishData.next(this.wishList);
    localStorage.setItem('wishes', JSON.stringify(this.wishList));
  }

  increase(item:any){
    item.quantity+1;
  }
  decrease(item:any){
    if(item.quantity!=1){
      item.quantity-1;
    }
  }
  cancel(item:any){
    this.wishList.map((i:any, index:any)=>{
      if(item.id === i.id){
        this.wishList.splice(index,1);
      }
    });
    this.wishData.next(this.wishList)
  }

}
