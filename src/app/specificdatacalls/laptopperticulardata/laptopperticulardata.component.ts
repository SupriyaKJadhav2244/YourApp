import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-laptopperticulardata',
  templateUrl: './laptopperticulardata.component.html',
  styleUrls: ['./laptopperticulardata.component.css']
})
export class LaptopperticulardataComponent implements OnInit {

  constructor(private routes:ActivatedRoute) { }
  
  laptopName:any;

  ngOnInit(): void {
    
    // this.laptopName = this.routes.snapshot.params.productName;
    // console.log("Laptop Name : "+this.laptopName);
    this.routes.paramMap.subscribe(params=>{
      this.laptopName = params.get('productName');
      // console.log("Laptop Name : "+this.laptopName);
     });
  }

}
