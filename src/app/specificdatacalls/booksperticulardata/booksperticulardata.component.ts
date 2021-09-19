import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booksperticulardata',
  templateUrl: './booksperticulardata.component.html',  
  styleUrls: ['./booksperticulardata.component.css']
})
export class BooksperticulardataComponent implements OnInit { 
  
  bookName:any;

  constructor(private routes:ActivatedRoute) { }

  ngOnInit(): void {    
    // this.bookName = this.routes.snapshot.paramMap.get('productName');
    this.routes.paramMap.subscribe(params=>{ 
      this.bookName = params.get('productName');
    });
  }

}
