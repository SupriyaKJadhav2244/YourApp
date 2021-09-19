import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.css']
})
export class TempFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  stateName=[
    {id:1,name:'Maharashtra'},
    {id:2,name:'Punjab'},
    {id:3,name:'Gujarat'},
    {id:4,name:'Keral'}
  ]

  disabled=true;

  registration(RegiForm:any){
    console.log(RegiForm.value);
  }

}
