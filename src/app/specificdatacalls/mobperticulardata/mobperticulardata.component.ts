import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mobperticulardata',
  templateUrl: './mobperticulardata.component.html',
  styleUrls: ['./mobperticulardata.component.css']
})
export class MobperticulardataComponent implements OnInit {

  constructor(private routes:ActivatedRoute) { }
  
  mobilename:any;

  ngOnInit(): void {
    this.routes.params.subscribe(params=>{
      this.mobilename=params['productName']; 
      // console.log("Mobile Name : "+this.mobilename);
    });
  }

}
