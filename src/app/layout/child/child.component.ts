import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'; 

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() myInputVar:any;

  @Output() outputData=new EventEmitter();

  ngOnInit(): void {
    // console.log(this.myInputVar);
  }

  sendData(): void {
    let data="I am From Child Component"
    // console.log(data);
    this.outputData.emit(data);
  }

}
