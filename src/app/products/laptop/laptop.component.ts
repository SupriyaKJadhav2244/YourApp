import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
// import { LAPDATA } from '../data/laptopdata';
import { LaptopModel } from '../model/laptop.model';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

  constructor(private sharedService:SharedService) { }

  laptops:LaptopModel[] = [];
  totProds:any;

  ngOnInit(): void {     
    // this.laptops = LAPDATA;

    this.sharedService.getlaptopData().subscribe((data:any)=>{ 
    // console.log(data);
    // console.log(data.lapData);  
    this.laptops=data.lapData;
    this.totProds = this.sharedService.calc(this.laptops);
    }) 
  }

  removeLapQuentity(laptop:any){ 
    // console.log(laptop.quentity);
    if(laptop.quentity>0){
      laptop.quentity--;
    }  
  }

  addLapQuentity(laptop:any){ 
    // console.log(laptop.quentity);
    if(laptop.quentity<laptop.inStock){
      laptop.quentity++;
    }
  }

}
