import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
// import { BOOKSDATA } from '../data/booksdata';
import { BooksModel } from '../model/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private sharedService:SharedService,private routes:ActivatedRoute) { }

  books : BooksModel[] = [];
  totProds:any;

  ngOnInit(): void {
    // this.books = BOOKSDATA;

    this.sharedService.getBookData().subscribe((data:any)=>{ 
    //  console.log(data);  
    //  console.log(data.bookData);
     this.books=data.bookData;
    this.totProds = this.sharedService.calc(this.books);
    })
  }

  removeBookQuentity(book:any){   
    // console.log(book.quentity);
    if(book.quentity>0){
      book.quentity--;
    }  
  }

  addBookQuentity(book:any){ 
    // console.log(laptop.quentity);
    if(book.quentity<book.inStock){
      book.quentity++;
    }
  }  

}
