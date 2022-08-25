import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { NgModel } from '@angular/forms';
import itemData from '../data.json';
import { CartService } from '../Services/cart.service';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public itemsData: any;
  public wishes: any;
  public items: any;
  public quantity: number = 1;
  // public showmodal:boolean = false;
  search: string = '';
  public modalData: any;
  constructor(
    private service: ServiceService,
    private cartservice: CartService,
    private router: Router,
    private http: HttpClient
  ) {}

  public totalItems: number = 0;
  ngOnInit() {
    this.service.getItem().subscribe((res) => {
      // console.log(res)
      this.itemsData = res;
      this.itemsData.forEach((i: any) => {
        Object.assign(i, { quantity: 1, total: i.price });
      });
    });
    this.cartservice.getWishItems().subscribe((res) => {
      this.wishes = res;
    });
    this.cartservice.getItems().subscribe((res) => {
      this.totalItems = res.length;
    });
    this.cartservice.searchItem.subscribe((obj: any) => {
      this.search = obj;
    });
    this.cartservice.modalGetItem().subscribe((obj1) => {
      this.items = obj1;
    });
  }

  addItem(item: any) {
    this.cartservice.addCart(item);
    // console.log(this.cart);
  }

  buyItem(item: any) {
    this.cartservice.addCart(item);
    this.router.navigate(['payment']);
  }
  logout() {
    this.router.navigate(['login']);
  }

  showmodal = 'none';
  openModal(item: any) {
    this.showmodal = 'block';
    this.cartservice.show(item);
  }
  close() {
    this.showmodal = 'none';
    this.cartservice.close();
  }

  isClicked: boolean = false;
  wish(item: any) {
    this.isClicked = true;
    this.cartservice.wishItem(item);
    // this.http.post<any>('http://localhost:3000/wishes',this.cartservice.wishItem(item)).subscribe((res)=>{
    //   const wish =res;
    // });
    // alert('this is clicked')
    // this.http.post<any>('http://localhost:3000/wishes', this.cartservice.wishItem(item)).subscribe(map((res)=>{
    //   const wish = res;
    //   console.log(wish)
    // }))
    // .subscribe(map((res)=>{
    //   this.items =res;
    // console.log(item)
    // }));
  }
  inc(item: any) {
    if (item) {
      this.quantity++;
    }
    console.log(this.quantity);
  }
  dec(item: any) {
    if (item.quantity > 1) {
      this.quantity--;
    }
    console.log(this.quantity);
  }
}

// items:{iname:String, price:Number, desc:String, imageUrl:String}[] = itemData;

// items = [
//   {
//     iname: 'Abraham Lincoln',
//     imageUrl: 'assets/images/abraham.jpeg',
//     price: 200,
//     desc: 'Abraham Lincoln was an American lawyer and statesman who served as the 16th president of the United States from 1861 until his assassination in 1865.',
//   },
//   {
//     iname: 'A P J Abdul Kalam',
//     imageUrl: './assets/images/apj.jpeg',
//     price: 300,
//     desc: 'Avul Pakir Jainulabdeen Abdul Kalam was an Indian aerospace scientist and statesman who served as the 11th President of India from 2002 to 2007.',
//   },
//   {
//     iname: 'Barak Obama',
//     imageUrl: './assets/images/barack_obama.jpeg',
//     price: 250,
//     desc: 'Barack Hussein Obama II is an American politician who served as the 44th president of the United States from 2009 to 2017.',
//   },
//   {
//     iname: 'Chanakya Neeti',
//     imageUrl: './assets/images/chanakya.jpeg',
//     price: 300,
//     desc: 'Chanakya was an ancient Indian polymath who was active as a teacher, author, strategist, philosopher, economist, jurist, and royal advisor.',
//   },
//   {
//     iname: 'Communication Skills',
//     imageUrl: './assets/images/communication.jpeg',
//     price: 350,
//     desc: 'The ability to communicate information accurately, clearly and as intended, is a vital life skill and something that should not be overlooked.',
//   },
//   {
//     iname: 'Albert Einstein',
//     imageUrl: './assets/images/einstein.jpeg',
//     price: 250,
//     desc: 'Albert Einstein was a German-born theoretical physicist, widely acknowledged to be one of the greatest and most influential physicists of all time.',
//   },
//   {
//     iname: 'Mahatma Gandi',
//     imageUrl: './assets/images/gandhi.jpeg',
//     price: 200,
//     desc: 'Mohandas Karamchand Gandhi, commonly known as Bapu, was an Indian lawyer, anti-colonial nationalist and political ethicist who employed nonviolent resistance to lead the successful campaign for India`s independence.',
//   },
//   {
//     iname: 'Acient History',
//     imageUrl: './assets/images/histroy-1.jpeg',
//     price: 300,
//     desc: 'Ancient history is the aggregate of past events from the beginning of writing and recorded human history and extending as far as late antiquity. The span of recorded history is roughly 5,000 years.',
//   },
//   {
//     iname: 'Inidan History',
//     imageUrl: './assets/images/histroy-2.jpeg',
//     price: 200,
//     desc: 'The mature Indus civilisation flourished from about 2600 to 1900 BCE, marking the beginning of urban civilisation on the Indian subcontinent. The civilisation included cities such as Harappa, Ganeriwala, and Mohenjo-daro, Dholavira, and Lothal in modern-day India.',
//   },
//   {
//     iname: 'Adolf Hitler',
//     imageUrl: './assets/images/hitlar.jpeg',
//     price: 280,
//     desc: 'Adolf Hitler was an Austrian-born German politician who was the dictator of Germany from 1933 until his death in 1945. He rose to power as the leader of the Nazi Party, becoming the chancellor in 1933 and then assuming the title of Führer und Reichskanzler in 1934.',
//   },
//   {
//     iname: 'Indian Kings',
//     imageUrl: './assets/images/indian_kings.jpeg',
//     price: 400,
//     desc: 'The great ruler Chandragupta Maurya, who founded Maurya Dynasty was indisputably the first king of India, as he not only won almost all the fragmented kingdoms in ancient India but also combined them into a large empire.',
//   },
//   {
//     iname: 'Mother Teresa',
//     imageUrl: './assets/images/mother_teresa.jpeg',
//     price: 290,
//     desc: 'Mother Teresa, also known as Saint Teresa of Calcutta, was an Albanian-Indian Roman Catholic nun who in 1950 founded and was an active member of the Missionaries of Charity. Although her passport name was Mary Teresa Bojaxhiu.',
//   },
//   {
//     iname: 'Sardar Vallabhai Patel',
//     imageUrl: './assets/images/sardar_patel.jpeg',
//     price: 350,
//     desc: 'Vallabhbhai Jhaverbhai Patel, commonly known as Sardar, was an Indian lawyer, influential political leader, barrister and statesman who served as the first Deputy Prime Minister of India and first Home Minister of India from 1947 to 1950. He is also called the "Unifier of India".',
//   },
//   {
//     iname: 'Chatrpathi Shivaji',
//     imageUrl: './assets/images/shivaji.jpeg',
//     price: 450,
//     desc: 'Shivaji Bhonsale I, also referred to as Chhatrapati Shivaji, was an Indian ruler and a member of the Bhonsle Maratha clan. Shivaji carved out his own independent kingdom from the declining Adilshahi sultanate of Bijapur which formed the genesis of the Maratha Empire.',
//   },
// ];
