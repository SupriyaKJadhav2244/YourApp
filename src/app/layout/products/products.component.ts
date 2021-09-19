import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // products=[
  //   {
  //     productId:100,
  //     productName:'Mobile',
  //     inStock: 10,
  //     country: 'India',
  //     isVeg: true,
  //     showClass: false,
  //     price: 12000,  
  //     imgSrc:'./../../../assets/pexels-photo-1156684.jpeg',
  //     // quentity:0
  //   },
  //   {
  //     productId: 101,
  //     productName: 'Laptop',
  //     inStock: 100,
  //     country: 'Australia',
  //     isVeg: true,
  //     showClass: false,
  //     price: 12000,
  //     imgSrc:'./../../../assets/images.jpg',   
  //   },
  //   {
  //     productId: 102,
  //     productName: 'Books',
  //     inStock: 100,
  //     country: 'Germany',
  //     isVeg: true,
  //     showClass: false,
  //     price: 12000,
  //     imgSrc:'./../../../assets/wp2297884.jpg',   
  //   }
  // ]

}
