import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public itemsData: any;

 public totalItems:number=0;
 constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    this.cartservice.getItems().subscribe((res)=>{
      this.totalItems = res.length
    })
  }

  iname: any;
  search() {
    if (this.iname !== '') {
      this.itemsData = this.itemsData.filter((res: { iname: string; }) => {
        return res.iname.toLowerCase().match(this.iname.toLowerCase());
      });
    }
  }

}
