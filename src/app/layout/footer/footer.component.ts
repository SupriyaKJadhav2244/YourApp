import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  myData: any;

  constructor() { }

  inputVar ="I am From Parent Component";

  ngOnInit(): void {
  }

  receiveData(event:any){
    // console.log(event);
    this.myData=event;
  }

}
