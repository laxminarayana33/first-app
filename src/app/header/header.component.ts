import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public itemsData: any;

  constructor() { }

  ngOnInit(): void {
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
